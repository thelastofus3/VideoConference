import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AgoraRTC, {AgoraRTCProvider} from "agora-rtc-react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// In video call, set mode to "rtc"
const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

root.render(
    <StrictMode>
        <AgoraRTCProvider client={client}>
            <App />
        </AgoraRTCProvider>
    </StrictMode>
);
