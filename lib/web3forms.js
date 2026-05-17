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
      if (response.status < 400) return { success: true };
    }
  }

  if (data.success === true || data.success === "true") {
    return data;
  }

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

  return { success: true, ...data };
}
