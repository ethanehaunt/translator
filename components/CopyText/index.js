import React from 'react';

const CopyText = ({ jsonData, targetLanguage }) => {

    const copyText = () => {
        try {
            const jsonString = JSON.stringify(jsonData, null, 2);
            navigator.clipboard.writeText(jsonString);
        } catch (error) {
            console.error('Copy failed:', error);
        }
    };
    const isValid = typeof jsonData === 'object' ? Object.keys(jsonData).length : jsonData;
    return <button data-tooltip-id="tooltip" data-tooltip-content="Copy Text" className="btn btn-info material-icons-outlined" disabled={!(targetLanguage && isValid)} onClick={copyText}>content_copy</button>;
};

export default CopyText;
