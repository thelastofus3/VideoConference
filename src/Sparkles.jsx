import React, { useState, useEffect } from 'react';

const Sparkles = () => {
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const handleMouseMove = (event) => {
            createSparkle(event.pageX, event.pageY);
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const createSparkle = (x, y) => {
        const newSparkle = { x, y, id: Date.now() };
        setSparkles((prevSparkles) => [...prevSparkles, newSparkle]);

        setTimeout(() => {
            setSparkles((prevSparkles) =>
                prevSparkles.filter((sparkle) => sparkle.id !== newSparkle.id)
            );
        }, 1000);
    };

    return (
        <div>
            {sparkles.map((sparkle) => (
                <div
                    key={sparkle.id}
                    className="sparkle"
                    style={{
                        left: `${sparkle.x - 5}px`,
                        top: `${sparkle.y - 5}px`,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Sparkles;
