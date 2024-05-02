import React from "react";

interface ProfileImageUploadProps {
  profileImage: File | null; // Change the type to File
  onImageChange: (imageData: File | null) => void; // Adjust the type of the callback function
}

export function ProfileImageUpload({
  profileImage,
  onImageChange,
}: ProfileImageUploadProps) {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageChange(file); // Pass the File object directly
    }
  };

  return (
    <div className="image-uploader">
      {profileImage ? (
        <img
          src={URL.createObjectURL(profileImage)} // Convert File to data URL
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
      <input
        type="file"
        id="uploadBtn"
        accept="image/*"
        onChange={handleImageChange}
      />
      <label htmlFor="uploadBtn">
        {profileImage ? "Update photo" : "Upload photo"}
      </label>
    </div>
  );
}
