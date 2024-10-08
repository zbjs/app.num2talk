import PropTypes from 'prop-types';
const OutputDisplay = ({ number, output, handleCopy, handlePrint, handleSaveImage, setShowEmailPopup }) => (
    <div className="output" id="printableArea">
        <span className="output-label">Your number:</span>
        <span className="output-text">{number}</span>
        <br />
        <span className="output-label">Converted:</span>
        <span className="output-text">{output}</span>
        <div className="action-icons">
            <span className="icon" onClick={handleCopy} title="Copy">
               <i className="fas fa-copy"></i>
            </span>
            <span className="icon" onClick={handlePrint} title="Print">
                <i className="fas fa-print"></i>
            </span>
            <span className="icon" onClick={handleSaveImage} title="Save as Image">
                <i className="fas fa-download"></i>
            </span>
            <span className="icon" onClick={() => setShowEmailPopup(true)} title="Share">
                <i className="fas fa-share-alt"></i>
            </span>
        </div>
    </div>
);

OutputDisplay.propTypes = {
    number: PropTypes.string.isRequired,
    output: PropTypes.string.isRequired,
    handleCopy: PropTypes.func.isRequired,
    handlePrint: PropTypes.func.isRequired,
    handleSaveImage: PropTypes.func.isRequired,
    setShowEmailPopup: PropTypes.func.isRequired,
};

export default OutputDisplay;
