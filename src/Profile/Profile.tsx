import { ProfileLocalStorage } from "./ProfileLocalStorage";

export function Profile() {
  const storedProfile = localStorage.getItem("profile");
  const initialProfile = storedProfile ? JSON.parse(storedProfile) : null;

  return <ProfileLocalStorage initialProfile={initialProfile} />;
}
