import PropTypes from 'prop-types';

const NumberInput = ({ number, setNumber }) => (
    <input
        className="number-input"
        type="text"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
    />
);

// Adding PropTypes for validation
NumberInput.propTypes = {
    number: PropTypes.string.isRequired,  // Assuming number is handled as a string
    setNumber: PropTypes.func.isRequired,  // Function to update the number state
};

export default NumberInput;
