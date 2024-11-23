import './css/JoinRoom.css';
export const JoinRoom = ({setChannel, appId, setCalling}) => {
    const handleJoinChannel = (channelId) => {
        setChannel(channelId);
        setCalling(true);
    };

    const renderRoom = (roomId) => (
        <div className="room" key={roomId}>
            <h2>Room {roomId}</h2>
            <p className="room-status">Status: Available</p>
            <button
                id={`join-btn-${roomId}`}
                className={`join-btn ${!appId ? "disabled" : ""}`}
                onClick={() => handleJoinChannel(roomId)}
                disabled={!appId}
            >
                Join Room
            </button>
        </div>
    );

    return (
        <div className="join-room">
            <h1 className="title">Join a Room</h1>
            <p className="subtitle">
                Select a room below to start your journey.
            </p>
            <div className="rooms-container">
                {["1", "2", "3"].map(renderRoom)}
            </div>
        </div>
    );
};

