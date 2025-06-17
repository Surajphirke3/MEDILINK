// lib/api.ts
const BASE_URL = "http://localhost:5000"; // Update to your backend URL

export async function fetchWithToken(
  endpoint: string,
  method: "GET" | "POST",
  token: string,
  body?: Record<string, unknown>
) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error || "Something went wrong");
  }
  return data;
}

export async function requestEmailVerification(token: string) {
  return await fetchWithToken("/v1/auth/email-verify/request", "GET", token);
}

export async function submitEmailOTP(token: string, otp: string) {
  return await fetchWithToken("/v1/auth/email-verify/submit", "POST", token, {
    otp,
  });
}
