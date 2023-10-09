import Select from 'react-select';
import { languageOptions } from '@/constants/common';


const LanguageSelections = ({ text, targetLanguage, setTargetLanguage, startTranslation, clearTranslation }) => {
    return (
        <div className="flexSpaceBetween">
            <Select
                className="w100"
                options={languageOptions}
                placeholder="Select language"
                onChange={(e) => setTargetLanguage(e.value)}
            />
            <button data-tooltip-id="tooltip" data-tooltip-content="Translate" className="btn btn-info material-icons-outlined" disabled={!(targetLanguage && text)} onClick={() => startTranslation()}>translate</button>
            <button data-tooltip-id="tooltip" data-tooltip-content="Clear" className="btn btn-default material-icons-outlined" onClick={() => clearTranslation()}>refresh</button>
        </div >
    );
}

export default LanguageSelections;