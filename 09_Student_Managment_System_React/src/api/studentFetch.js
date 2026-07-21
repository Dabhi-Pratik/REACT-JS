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

export async function addStudent(studentdata) {
  try {
    const res = await fetch(`${BASE_URI}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentdata),
    });

    if (!res.ok) {
      throw new Error("Faild to Add Student Data");
    }

    const data = await res.json();

    console.log("Data", data);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteStudent(id) {
  try {
    const res = await fetch(`${BASE_URI}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete Student");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
