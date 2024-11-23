import './css/App.css'
import React from 'react';
import {useState} from "react";
import {
    useIsConnected,
    useJoin,
    useLocalCameraTrack,
    useLocalMicrophoneTrack,
    usePublish, useRemoteUsers
} from "agora-rtc-react";
import {JoinRoom} from "./JoinRoom.jsx";
import {UserList} from "./UserList.jsx";
import Sparkles from "./Sparkles.jsx";

function App() {
    const [calling, setCalling] = useState(false);
    const isConnected = useIsConnected(); // Store the user's connection status
    const [appId] = useState("90d6a443243e4f8d81bbbc1903abae2e");
    const [channel, setChannel] = useState("");
    const [token] = useState("");

    useJoin({appid: appId, channel: channel, token: token ? token : null}, calling);

    const encoderConfig = {
        width: { min: 640, ideal: 1920, max: 1920 },
        height: { min: 480, ideal: 1080, max: 1080 },
    };
    const [micOn, setMic] = useState(true);
    const [cameraOn, setCamera] = useState(true);
    const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
    const { localCameraTrack } = useLocalCameraTrack(cameraOn, {encoderConfig});
    usePublish([localMicrophoneTrack, localCameraTrack]);

    const remoteUsers = useRemoteUsers();

    return (
        <>
            <Sparkles />
            <div className="rooms">
                {isConnected ? (
                    <UserList localMicrophoneTrack={localMicrophoneTrack} cameraOn={cameraOn} micOn={micOn} localCameraTrack={localCameraTrack} remoteUsers={remoteUsers} />
                ) : (
                    <JoinRoom setChannel={setChannel} setCalling={setCalling} appId={appId} token={token} />
                )}
            </div>
            {isConnected && (
                <div className="control">
                    <div className="left-control">
                        <button className="btn" onClick={() => setMic(a => !a)}>
                            <i className={`i-microphone ${!micOn ? "off" : ""}`} />
                        </button>
                        <button className="btn" onClick={() => setCamera(a => !a)}>
                            <i className={`i-camera ${!cameraOn ? "off" : ""}`} />
                        </button>
                    </div>
                    <button
                        className={`btn btn-phone ${calling ? "btn-phone-active" : ""}`}
                        onClick={() => setCalling(a => !a)}
                    >
                        {calling ? <i className="i-phone-hangup" /> : <i className="i-mdi-phone" />}
                    </button>
                </div>
            )}
        </>
    );
}

export default App
