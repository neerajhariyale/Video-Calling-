import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams, useNavigate } from 'react-router-dom';

const VideoComp = () => {
    const { roomID } = useParams();
    const containerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const myMeeting = async () => {
            if (!roomID || !containerRef.current) {
                navigate('/');
                return;
            }

            const appID = 2046966053;
            const serverSecret = "49045cc7498f82af2f99d3262070d5f5";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,
                serverSecret,
                roomID,
                Date.now().toString(),
                "Anonymous"
            );

            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: containerRef.current,
                sharedLinks: [
                    {
                        name: 'Personal link',
                        url: `${window.location.origin}/#/room/${roomID}`,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.GroupCall,
                },
            });
        };

        myMeeting();

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = "";
            }
        };
    }, [roomID, navigate]);

    return (
        <div
            className="myCallContainer"
            ref={containerRef}
            style={{ width: '100vw', height: '100vh' }}
        ></div>
    );
};

export default VideoComp;
