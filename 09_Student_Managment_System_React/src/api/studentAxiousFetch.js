import axios from "axios";

const BASE_URI = import.meta.env.VITE_BASE_URI;

export async function getStudent() {
  try {
    const res = await axios.get(`${BASE_URI}/all`);

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function addStudent(studentdata) {
  try {
    const res = await axios.post(`${BASE_URI}/add`, studentdata);

    if (res.status !== 201) {
      throw new Error("you do not add Student Data");
    }

    console.log("Data", res.data);

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteStudent(id) {
  try {
    const res = await axios.delete(`${BASE_URI}/${id}`);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function editStudent(id, studentdata) {
  try {
    const res = await axios.put(`${BASE_URI}/update/${id}`, studentdata);
  } catch (error) {
    throw new Error(error.message);
  }
}
