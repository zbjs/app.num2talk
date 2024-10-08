import PropTypes from 'prop-types';

const EmailPopup = ({ email, setEmail, handleShare, setShowEmailPopup }) => (
    <div className="email-popup">
        <h2>Share via Email</h2>
        <input
            type="email"
            className="email-input"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <button className="share-button" onClick={handleShare}>Send</button>
        <button className="cancel-button" onClick={() => setShowEmailPopup(false)}>Cancel</button>
    </div>
);

EmailPopup.propTypes = {
    email: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired,
    handleShare: PropTypes.func.isRequired,
    setShowEmailPopup: PropTypes.func.isRequired,
};

export default EmailPopup;
