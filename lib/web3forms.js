import { WEB3FORMS_ACTION } from "@/constants";

export async function submitWeb3Form(form) {
  const response = await fetch(WEB3FORMS_ACTION, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: new FormData(form),
  });

  const data = await response.json();
  if (!response.ok || !data.success) {
    throw new Error(data.message || "Submit failed");
  }

  return data;
}

