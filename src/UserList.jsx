import "./css/UserList.css";
import React from "react";
import { LocalUser, RemoteUser } from "agora-rtc-react";

export const UserList = ({ localMicrophoneTrack, cameraOn, micOn, localCameraTrack, remoteUsers }) => {
    const totalUsers = 1 + (remoteUsers?.length || 0);
    return (
        <div className="user-list">
            <div className="user-list-header">
                <h1>Total Users: {totalUsers}</h1>
            </div>
            <div className="users-container">
                <div className="user">
                    <LocalUser
                        audioTrack={localMicrophoneTrack}
                        cameraOn={cameraOn}
                        micOn={micOn}
                        playAudio={false}
                        videoTrack={localCameraTrack}
                        cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
                    >
                        <samp className="user-name">You</samp>
                    </LocalUser>
                </div>
                {remoteUsers.map((user) => (
                    <div className="user" key={user.uid}>
                        <RemoteUser
                            cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
                            user={user}
                        >
                            <samp className="user-name">UID: {user.uid}</samp>
                        </RemoteUser>
                    </div>
                ))}
            </div>
        </div>
    );
};
