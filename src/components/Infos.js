import React, { useState } from "react";
import ImageUploading from "react-images-uploading";

import "../assets/css/Infos.css";
import Avatar from "../assets/images/avatar.png";
import CameraIcon from "../assets/images/camera.png";

const Infos = () => {
  const [name, setName] = useState("Expert");
  const [family, setFamily] = useState("Dev");
  const [title, setTitle] = useState("Senior Full Stack Developer");
  const [avatars, setAvatars] = useState([Avatar]);

  const onChangeAvatar = (avatarList, addUpdateIndex) => {
    // data for submit
    console.log(avatarList, addUpdateIndex);
    setAvatars(avatarList);
  };

  return (
    <div className="grid grid-cols-8 items-center">
      <div className="col-span-2">
        <ImageUploading
          value={avatars}
          onChange={onChangeAvatar}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <img
                alt="avatar"
                src={
                  imageList[0]["data_url"] ? imageList[0]["data_url"] : Avatar
                }
                className="pt_avatar"
                style={isDragging ? { filter: "blur(1px)" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              />
              <img
                src={CameraIcon}
                alt="camera-icon"
                className="pt_camera-icon"
              />
            </div>
          )}
        </ImageUploading>
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-4 flex flex-col gap-2">
        <div className="pt_input-text-div">
          <input
            type="text"
            placeholder="Name"
            className="pt_input-text pt_w-100-pro"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="pt_input-text-div">
          <input
            type="text"
            placeholder="Family"
            className="pt_input-text pt_w-100-pro"
            value={family}
            onChange={(e) => setFamily(e.target.value)}
          ></input>
        </div>
        <div className="pt_input-text-div">
          <input
            type="text"
            placeholder="Profession Title"
            className="pt_input-text pt_w-100-pro"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Infos;
