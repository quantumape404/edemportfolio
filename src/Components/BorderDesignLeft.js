import React, { useEffect } from 'react';
import './BorderDesignLeft.css'; 

const BorderDesignLeft = () => {

    useEffect(() => {
        const gradients = ['gradient-set-1', 'gradient-set-2', 'gradient-set-3', 'gradient-set-4', 'gradient-set-5'];
        let currentGradient = 0;

        const intervalId = setInterval(() => {
            const element = document.querySelector('.corner-top-left');
            if (element) {
                element.classList.remove(...gradients);
                element.classList.add(gradients[currentGradient]);
                currentGradient = (currentGradient + 1) % gradients.length;
            }
        }, 3000); // Change every 5 seconds

        // Cleanup on unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="corner-top-left">
            <svg
                width="300"
                height="300"
                data-name="corner-top-left"
                xmlns="http://www.w3.org/2000/svg"
                style={{ pointerEvents: 'none' }}
            >
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0" className="stop-color1"></stop>
                        <stop offset=".5" className="stop-color2"></stop>
                        <stop offset="1" className="stop-color1"></stop>
                    </linearGradient>
                </defs>
                <path
                    fill="url('#grad1')"
                    d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
                ></path>
            </svg>
        </div> 
    );
};

export default BorderDesignLeft;