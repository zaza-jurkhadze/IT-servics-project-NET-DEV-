import { WEB3FORMS_ACTION } from "@/constants";

function isSuccessResponse(response, data) {
  if (data?.success === true || data?.success === "true") return true;
  if (response.status === 200 && data?.body?.message) return true;
  if (response.ok && response.status >= 200 && response.status < 300) return true;
  return false;
}

export async function submitWeb3Form(form) {
  const payload = Object.fromEntries(new FormData(form).entries());

  const response = await fetch(WEB3FORMS_ACTION, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    if (response.ok || response.redirected) {
      return { success: true };
    }
    throw new Error("Invalid response");
  }

  if (isSuccessResponse(response, data)) {
    return data;
  }

  const message =
    data?.message || data?.body?.message || data?.error || "Submit failed";
  throw new Error(message);
}
