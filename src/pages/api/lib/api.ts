interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const sendContactForm = async (data: ContactFormData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
