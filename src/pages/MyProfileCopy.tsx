import React, { useEffect, useState } from "react";
import "../Profile/MyProfile.css";

interface UserProfile {
  name: string;
  gender: string;
  birthday: Date;
  occupation: string;
  phone: string;
  email: string;
  profileImage: string | null;
}

interface ImageUploadProps {
  profileImage: string | null;
  onImageChange: (imageData: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  profileImage,
  onImageChange,
}) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-uploader">
      {profileImage ? (
        <img
          src={profileImage}
          alt="Profile"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
      ) : (
        <img
          src="/imgs/profile icon.jpg"
          alt="Profile"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
      )}
      <label htmlFor="uploadBtn">
        {profileImage ? "Update photo" : "Upload photo"}
      </label>
      <input
        type="file"
        id="uploadBtn"
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>
  );
};

export function MyProfile() {
  const initialProfile: UserProfile = {
    name: "Your name",
    gender: "male",
    birthday: new Date("1990-01-01"),
    occupation: "",
    phone: "",
    email: "",
    profileImage: null,
  };

  const getProfileFromLocalStorage = (): UserProfile => {
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      const parsedProfile: UserProfile = JSON.parse(storedProfile);
      parsedProfile.birthday = new Date(parsedProfile.birthday);
      return parsedProfile;
    }
    return initialProfile;
  };

  const [profile, setProfile] = useState<UserProfile>(
    getProfileFromLocalStorage
  );

  const [phoneError, setPhoneError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [isValidData, setIsValidData] = useState<boolean>(false);

  useEffect(() => {
    if (isValidData) {
      saveProfileToLocalStorage(profile);
    }
  }, [profile, isValidData]);

  const occupationOptions = [
    "Developer",
    "Engineer",
    "Designer",
    "Manager",
    "Analyst",
    "Other",
  ];

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      birthday: date,
    }));
  };

  const handleImageChange = (imageData: string) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      profileImage: imageData,
    }));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    let phoneIsValid = true;
    let emailIsValid = true;

    const phoneRegex = /^\d{10}$/;
    if (profile.phone && !phoneRegex.test(profile.phone)) {
      setPhoneError("Invalid phone number");
      phoneIsValid = false;
    } else {
      setPhoneError("");
    }

    if (profile.email && !profile.email.includes("@")) {
      setEmailError("Invalid email address");
      emailIsValid = false;
    } else {
      setEmailError("");
    }

    if (phoneIsValid && emailIsValid) {
      setIsValidData(true);
      setEditMode(false);
    } else {
      setIsValidData(false); //
    }
  };

  const saveProfileToLocalStorage = (profileData: UserProfile) => {
    const serializedProfileData = {
      ...profileData,
      birthday: profileData.birthday.toISOString(),
    };
    localStorage.setItem("profile", JSON.stringify(serializedProfileData));
  };

  return (
    <div className="my-profile">
      <ImageUpload
        profileImage={profile.profileImage}
        onImageChange={handleImageChange}
      />

      <div className="user-details">
        <h2>User Details</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            disabled={!editMode}
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={profile.gender}
            onChange={handleChange}
            disabled={!editMode}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Birthday:</label>
          <input
            type="date"
            name="birthday"
            value={profile.birthday.toISOString().split("T")[0]}
            onChange={(e) => handleDateChange(new Date(e.target.value))}
            disabled={!editMode}
          />
        </div>
        <div>
          <label>Occupation:</label>
          <select
            name="occupation"
            value={profile.occupation}
            onChange={handleChange}
            disabled={!editMode}
          >
            <option value="">Select Occupation</option>
            {occupationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            disabled={!editMode}
          />
          {phoneError && <span style={{ color: "red" }}>{phoneError}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!editMode}
          />
          {emailError && <span style={{ color: "red" }}>{emailError}</span>}
        </div>

        {!editMode && <button onClick={handleEdit}>Edit</button>}
        {editMode && <button onClick={handleSave}>Save</button>}
      </div>
    </div>
  );
}
