"use server";

export async function submitContactForm(
  prevState: { success: boolean; message: string },
  formData: FormData
) {
  const strapiUrl = process.env.STRAPI_BASE_URL;

  if (!strapiUrl) {
    console.error("STRAPI_BASE_URL is not defined");
    return { success: false, message: "Server configuration error." };
  }

  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch(`${strapiUrl}/api/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: rawData }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Submission failed:", response.status, errorData);
      return {
        success: false,
        message: "Failed to submit form. Please try again.",
      };
    }

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Submission error:", error);
    return { success: false, message: "An unexpected error occurred." };
  }
}
