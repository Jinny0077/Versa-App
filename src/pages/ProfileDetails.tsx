import { UserProfile } from "../Profile/UserProfile";
import InputField from "../Profile/InputField";
import SelectField from "../Profile/SelectField";
import DateField from "../Profile/DateField";
import { ProfileImageUpload } from "../Profile/ImageUpload";
import "../Profile/MyProfile.css";

export interface ProfileDetailsProps {
  profile: UserProfile;
  onChange: (name: string, value: string | Date | File | null) => void;
  phoneError: string;
  emailError: string;
  editMode: boolean;
  onEdit: () => void;
  onSave: () => void;
}

export function ProfileDetails({
  profile,
  onChange,
  phoneError,
  emailError,
  editMode,
  onEdit,
  onSave,
}: ProfileDetailsProps) {
  const handleFieldChange = (
    name: string,
    value: string | Date | File | null
  ) => {
    onChange(name, value);
  };

  const occupationOptions = [
    "Developer",
    "Engineer",
    "Designer",
    "Manager",
    "Analyst",
    "Other",
  ];

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <ProfileImageUpload
        profileImage={profile.profileImage}
        onImageChange={(imageData: File | null) =>
          handleFieldChange("profileImage", imageData)
        }
      />
      <InputField
        label="Name"
        name="name"
        value={profile.name}
        onChange={handleFieldChange}
        disabled={!editMode}
      />
      <SelectField
        label="Gender"
        name="gender"
        value={profile.gender}
        options={["male", "female"]}
        onChange={handleFieldChange}
        disabled={!editMode}
      />
      <DateField
        label="Birthday"
        name="birthday"
        value={profile.birthday}
        onChange={handleFieldChange}
        disabled={!editMode}
      />
      <SelectField
        label="Occupation"
        name="occupation"
        value={profile.occupation}
        options={occupationOptions}
        onChange={handleFieldChange}
        disabled={!editMode}
      />
      <InputField
        label="Phone"
        name="phone"
        value={profile.phone}
        onChange={handleFieldChange}
        disabled={!editMode}
        error={phoneError}
      />
      <InputField
        label="Email"
        name="email"
        value={profile.email}
        onChange={handleFieldChange}
        disabled={!editMode}
        error={emailError}
      />
      {!editMode && <button onClick={onEdit}>Edit</button>}
      {editMode && <button onClick={onSave}>Save</button>}
    </div>
  );
}
