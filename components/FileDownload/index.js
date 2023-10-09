import React from 'react';

const FileDownload = ({ jsonData, targetLanguage }) => {

    const handleDownload = () => {
        const jsonDataBlob = new Blob([JSON.stringify(jsonData, null, 2)], {
            type: 'application/json',
        });
        const url = URL.createObjectURL(jsonDataBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = targetLanguage + '.json';
        a.click();
        URL.revokeObjectURL(url);
    };
    const isValid = typeof jsonData === 'object' ? Object.keys(jsonData).length : jsonData;
    return <button data-tooltip-id="tooltip" data-tooltip-content="Download" className="btn btn-info material-icons-outlined" onClick={handleDownload} disabled={!(targetLanguage && isValid)}>file_download</button>;
};

export default FileDownload;
