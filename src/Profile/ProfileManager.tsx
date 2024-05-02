// ProfileManager.tsx
import React, { useState } from "react";
import { UserProfile } from "./UserProfile";

export interface ProfileManagerProps {
  children: React.ReactNode;
}

export interface ProfileManagerState {
  profile: UserProfile;
  phoneError: string;
  emailError: string;
  editMode: boolean;
}

export interface ProfileManagerActions {
  handleChange: (name: string, value: string | Date | File | null) => void;
  handleEdit: () => void;
  handleSave: () => void;
}

export const ProfileManager: React.FC<ProfileManagerProps> = ({ children }) => {
  const initialProfile: UserProfile = {
    name: "",
    gender: "",
    birthday: new Date(),
    occupation: "",
    phone: "",
    email: "",
    profileImage: null,
  };

  const [profile, setProfile] = useState<UserProfile>(initialProfile);
  const [phoneError, setPhoneError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleChange = (name: string, value: string | Date | File | null) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    setPhoneError("");
    setEmailError("");
  };

  return (
    <div>
      {/* Pass props to children components */}
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement<any>, {
          profile,
          onChange: handleChange,
          phoneError,
          emailError,
          editMode,
          onEdit: handleEdit,
          onSave: handleSave,
        })
      )}
    </div>
  );
};
