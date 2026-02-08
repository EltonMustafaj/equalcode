'use client';

import React from 'react';

const Logo = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontFamily: 'inherit',
            fontWeight: 800,
            fontSize: '1.25rem',
            letterSpacing: '-0.04em',
            color: '#000',
        }}>
            <div style={{ position: 'relative', width: '36px', height: '36px' }}>
                <svg
                    width="36"
                    height="36"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Background Grid/Technical frame */}
                    <rect x="0.5" y="0.5" width="39" height="39" stroke="#E5E5E5" strokeWidth="0.5" />
                    <line x1="20" y1="0" x2="20" y2="40" stroke="#E5E5E5" strokeWidth="0.5" />
                    <line x1="0" y1="20" x2="40" y2="20" stroke="#E5E5E5" strokeWidth="0.5" />

                    {/* Core Engineered Shape */}
                    <path d="M10 10V30H30V10H10Z" stroke="black" strokeWidth="2" />
                    <path d="M10 20L20 10L30 20L20 30L10 20Z" fill="black" />
                    <rect x="18" y="18" width="4" height="4" fill="#ffd200" />

                    {/* Technical details (corners) */}
                    <circle cx="10" cy="10" r="1.5" fill="black" />
                    <circle cx="30" cy="10" r="1.5" fill="black" />
                    <circle cx="10" cy="30" r="1.5" fill="black" />
                    <circle cx="30" cy="30" r="1.5" fill="black" />
                </svg>
            </div>
            <span style={{ textTransform: 'uppercase', fontSize: '1.1rem' }}>Equalcode</span>
        </div>
    );
};

export default Logo;
