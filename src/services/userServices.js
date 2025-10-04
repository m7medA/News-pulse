import axiosClient from "./axiosClient";

export async function getProfileData(token) {
  const request = await axiosClient.get("/profile/view/", {
    headers: { Authorization: `Token ${token}` },
  });

  return request.data;
}

export async function updatePassword({ token, oldPassword, newPassword }) {
  console.log(oldPassword);

  try {
    const request = await axiosClient.post(
      "/auth/password-change/",
      {
        old_password: oldPassword,
        new_password: newPassword,
      },
      {
        headers: { Authorization: `Token ${token}` },
      }
    );

    return request.data;
  } catch (error) {
    throw error;
  }
}
