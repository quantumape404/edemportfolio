import React, { useEffect } from 'react';
import './BorderDesignRight.css'; 


const BorderDesignRight = () => {

    useEffect(() => {
        const gradients = ['gradient-set-1', 'gradient-set-2', 'gradient-set-3', 'gradient-set-4', 'gradient-set-5'];
        let currentGradient = 0;

        const intervalId = setInterval(() => {
            const element = document.querySelector('.corner-bottom-right');
            if (element) {
                element.classList.remove(...gradients);
                element.classList.add(gradients[currentGradient]);
                currentGradient = (currentGradient + 1) % gradients.length;
            }
        }, 3000); 

        // Cleanup on unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="corner-bottom-right">
            <svg
                width="300"
                height="300"
                data-name="corner-bottom-right"
                xmlns="http://www.w3.org/2000/svg"
                style={{ pointerEvents: 'none' }}

            >
                <defs>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0" className="stop-color1"></stop>
                        <stop offset=".5" className="stop-color2"></stop>
                        <stop offset="1" className="stop-color1"></stop>
                    </linearGradient>
                </defs>
                <path
                    fill="url('#grad2')"
                    d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z"
                ></path>
            </svg>
        </div>
    );
};

export default BorderDesignRight;