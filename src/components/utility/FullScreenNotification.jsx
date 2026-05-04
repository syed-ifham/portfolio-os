import React, { useState, useEffect } from 'react';

const MacNotification = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        const showTimer = setTimeout(() => setIsVisible(true), 100);

        const hideTimer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => setShouldRender(false), 400);
        }, 5000);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    const handleFullScreenClick = () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.log("Fullscreen request failed:", err);
            });
        }

        setIsVisible(false);
        setTimeout(() => setShouldRender(false), 400);
    };

    if (!shouldRender) return null;

    return (
        <div style={{
            position: 'fixed',
            top: '40px',
            left: '0',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            pointerEvents: 'none',
            zIndex: 9999,
        }}>
            <div
                onClick={handleFullScreenClick}
                style={{
                    pointerEvents: 'auto',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',

                    background: 'rgba(255, 255, 255, 0.01)',
                    backdropFilter: 'blur(50px)',
                    WebkitBackdropFilter: 'blur(50px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',

                    padding: '16px 22px',
                    borderRadius: '16px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                    color: '#1d1d1f',
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-150%) scale(0.95)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    maxWidth: '440px'
                }}
            >
                <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #2A93FF, #0056FF)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(0, 86, 255, 0.25)'
                }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                </div>

                <div style={{ flex: 1 }}>
                    <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600', letterSpacing: '0.2px' }}>
                        Optimal Experience
                    </h4>
                    <p style={{ margin: '3px 0 0', fontSize: '13px', opacity: 0.85, lineHeight: '1.4' }}>
                        Click here to view this portfolio in full screen.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MacNotification;