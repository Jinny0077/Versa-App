// ProfileLocalStorage.tsx
import React, { useEffect, useState } from "react";
import { ProfileDetails, ProfileDetailsProps } from "../pages/ProfileDetails";
import { UserProfile } from "./UserProfile"; // Make sure the import path is correct

interface ProfileLocalStorageProps {
  initialProfile?: UserProfile | null;
}

export const ProfileLocalStorage: React.FC<ProfileLocalStorageProps> = ({
  initialProfile = null,
}) => {
  const [profile, setProfile] = useState<UserProfile | null>(initialProfile);

  useEffect(() => {
    if (!initialProfile) {
      const storedProfile = localStorage.getItem("profile");
      if (storedProfile) {
        setProfile(JSON.parse(storedProfile));
      }
    }
  }, [initialProfile]);

  useEffect(() => {
    if (profile) {
      localStorage.setItem("profile", JSON.stringify(profile));
    }
  }, [profile]);

  const handleChange = (name: string, value: string | Date | File | null) => {
    setProfile((prevProfile) => {
      if (!prevProfile) return null;
      return {
        ...prevProfile,
        [name]: value,
      };
    });
  };

  const handleEdit = () => {
    // Handle edit mode
  };

  const handleSave = () => {
    // Handle save mode
  };

  const profileDetailsProps: ProfileDetailsProps = {
    profile: profile || getDefaultProfile(),
    phoneError: "Invalid", // Add your phone error state here
    emailError: "Invalid", // Add your email error state here
    editMode: false, // Add your edit mode state here
    onEdit: handleEdit,
    onSave: handleSave,
    onChange: handleChange,
  };

  return <ProfileDetails {...profileDetailsProps} />;
};

function getDefaultProfile(): UserProfile {
  return {
    name: "",
    gender: "",
    birthday: new Date(),
    occupation: "",
    phone: "",
    email: "",
    profileImage: null,
  };
}
