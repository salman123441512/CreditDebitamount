import React, { useState, useEffect } from 'react';

function Counter({ target, text }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = target; // Target number
        if (start === end) return;

        const totalDuration = 2000; // Total duration of the animation in ms
        const incrementTime = (totalDuration / end) * 2; // Time between increments

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [target]);

    return (
        <div className="counter">
            <span className="count">{count}</span> +
            <p>{text}</p>
        </div>
    );
}

export default Counter;

