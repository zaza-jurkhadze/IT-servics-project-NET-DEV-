import { WEB3FORMS_ACTION } from "@/constants";

export async function submitWeb3Form(form) {
  const response = await fetch(WEB3FORMS_ACTION, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: new FormData(form),
  });

  const text = await response.text();
  let data = {};
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      // HTML redirect page or empty body — treat 2xx/3xx as success
      if (response.status < 400) return { success: true };
    }
  }

  if (data.success === true || data.success === "true") {
    return data;
  }

  // Only show error on explicit API failure codes
  if (
    response.status === 400 ||
    response.status === 403 ||
    response.status === 429 ||
    response.status === 500
  ) {
    throw new Error(
      data.message || data.body?.message || data.error || "Submit failed",
    );
  }

  if (data.success === false) {
    throw new Error(data.message || data.body?.message || "Submit failed");
  }

  // 2xx/3xx without explicit failure — email was accepted
  return { success: true, ...data };
}
