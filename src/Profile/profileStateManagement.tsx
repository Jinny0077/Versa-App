import React from "react";

export interface ProfileManagerState {
  profile: {
    name: string;
    gender: string;
    birthday: Date;
    occupation: string;
    phone: string;
    email: string;
    profileImage: File | null;
  };
  phoneError: string;
  emailError: string;
  editMode: boolean;
}

export interface ProfileManagerActions {
  handleChange: (name: string, value: string | Date | File | null) => void;
  handleEdit: () => void;
  handleSave: () => void;
}

export const useProfileStateManagement = (): [
  ProfileManagerState,
  ProfileManagerActions
] => {
  const initialProfileState: ProfileManagerState = {
    profile: {
      name: "",
      gender: "",
      birthday: new Date(),
      occupation: "",
      phone: "",
      email: "",
      profileImage: null,
    },
    phoneError: "",
    emailError: "",
    editMode: false,
  };

  const [profileState, setProfileState] =
    React.useState<ProfileManagerState>(initialProfileState);

  const handleProfileChange: ProfileManagerActions["handleChange"] = (
    name,
    value
  ) => {
    setProfileState((prevState) => ({
      ...prevState,
      profile: {
        ...prevState.profile,
        [name]: value,
      },
    }));
  };

  const handleProfileEdit: ProfileManagerActions["handleEdit"] = () => {
    setProfileState((prevState) => ({
      ...prevState,
      editMode: true,
    }));
  };

  const handleProfileSave: ProfileManagerActions["handleSave"] = () => {
    setProfileState((prevState) => ({
      ...prevState,
      editMode: false,
      phoneError: "",
      emailError: "",
    }));
  };

  return [
    profileState,
    {
      handleChange: handleProfileChange,
      handleEdit: handleProfileEdit,
      handleSave: handleProfileSave,
    },
  ];
};
