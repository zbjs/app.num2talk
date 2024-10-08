import PropTypes from 'prop-types';

const LanguageSelector = ({ language, setLanguage, languageMap }) => (
    <select 
        className="language-select"
        onChange={(e) => setLanguage(e.target.value)} 
        value={language}
    >
        {Object.keys(languageMap).map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
        ))}
    </select>
);

// Adding PropTypes for validation
LanguageSelector.propTypes = {
    language: PropTypes.string.isRequired,
    setLanguage: PropTypes.func.isRequired,
    languageMap: PropTypes.object.isRequired,
};

export default LanguageSelector;
