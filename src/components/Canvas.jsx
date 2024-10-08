import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Canvas = ({ number, result }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        context.fillStyle = '#FFFFFF'; // White background
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = '#000000'; // Black text color
        context.font = '24px Arial';
        context.fillText(`Your number: ${number}`, 10, 50);
        context.fillText(`Converted: ${result}`, 10, 100);
    }, [number, result]);

    return (
        <canvas
            ref={canvasRef}
            style={{ display: 'none' }} // Hide the canvas
            width={1024}
            height={1024}
        />
    );
};

Canvas.propTypes = {
    number: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
};

export default Canvas;
