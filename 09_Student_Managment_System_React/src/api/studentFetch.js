const BASE_URI = import.meta.env.VITE_BASE_URI;

export async function getStudent() {
  try {
    const res = await fetch(`${BASE_URI}/all`);

    const data = await res.json();

    if (!res.ok) {
      throw new Error("Failed to Fetch Student Data");
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
