import { NextRequest, NextResponse } from "next/server";

const API = "https://flikker-api-production.up.railway.app";

interface Membership {
  businessId: string;
  role: string;
}

interface LoginResponse {
  accessToken: string;
  memberships: Membership[];
}

async function getCredentials(): Promise<{ accessToken: string; businessId: string }> {
  const email = process.env.FLIKKER_EMAIL;
  const password = process.env.FLIKKER_PASSWORD;

  if (!email || !password) {
    throw new Error("ENV_MISSING: FLIKKER_EMAIL or FLIKKER_PASSWORD not set");
  }

  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`AUTH_FAILED ${res.status}: ${body}`);
  }

  const data: LoginResponse = await res.json();
  const accessToken = data.accessToken;
  const businessId =
    data.memberships?.find((m) => m.role === "OWNER")?.businessId ??
    data.memberships?.[0]?.businessId;

  if (!accessToken) throw new Error("AUTH_RESPONSE: missing accessToken");
  if (!businessId) throw new Error(`AUTH_RESPONSE: no businessId in memberships — ${JSON.stringify(data.memberships)}`);

  return { accessToken, businessId };
}

export async function POST(req: NextRequest) {
  try {
    const { name, phone } = await req.json();

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: "Nombre y teléfono requeridos" }, { status: 400 });
    }

    const campaignId = process.env.FLIKKER_CAMPAIGN_ID;
    if (!campaignId) {
      return NextResponse.json({ error: "Campaña no configurada" }, { status: 500 });
    }

    const { accessToken, businessId } = await getCredentials();

    const sendRes = await fetch(`${API}/test-lab/campaigns/${campaignId}/send`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "x-business-id": businessId,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: phone.trim(),
        customerName: name.trim(),
      }),
      cache: "no-store",
    });

    if (!sendRes.ok) {
      const text = await sendRes.text();
      console.error("Send failed:", sendRes.status, text);
      return NextResponse.json({ error: "No se pudo enviar el mensaje" }, { status: 502 });
    }

    const result = await sendRes.json();
    return NextResponse.json({ success: true, phone: result.phone });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[send-demo]", msg);
    const isDev = process.env.NODE_ENV === "development";
    return NextResponse.json(
      { error: isDev ? msg : "Error interno del servidor" },
      { status: 500 }
    );
  }
}
