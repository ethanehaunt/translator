import Header from '../Header';
import CopyText from '../CopyText';
import FileUpload from '../FileUpload';
import React, { useState } from 'react';
import styles from './styles.module.css';
import FileDownload from '../FileDownload';
import LanguageSelections from '../LanguageSelections';
import { translationText } from '../../api/translationText';

const FileTranslations = () => {

    const [jsonData, setJsonData] = useState(null);
    const [targetLanguage, setTargetLanguage] = useState('');
    const [translatedData, setTranslatedData] = useState({});

    const translateText = async (alias, text) => {
        if (alias && text && targetLanguage) {
            try {
                const translation = await translationText(text, targetLanguage);
                translatedData[alias] = translation;
            } catch (error) {
                translatedData[alias] = "";
            }
        }
    };

    const startTranslation = () => {
        setTranslatedData({});
        jsonData && Object.keys(jsonData).forEach((alias) => {
            translateText(alias, jsonData[alias]);
        })
    }

    const clearTranslation = () => {
        setJsonData(null);
        setTargetLanguage('');
        setTranslatedData({});
    }

    return (
        <div>
            <Header headerText="File Translation" />
            {!jsonData && <FileUpload
                jsonData={jsonData}
                setJsonData={setJsonData}
            />}
            {jsonData && <div className={styles.jsonPreview}>
                <div className={styles.previewContainer}>
                    <div className="flexSpaceBetween">
                        <label className="label w25">JSON Data Preview</label>
                        <LanguageSelections
                            text={jsonData}
                            targetLanguage={targetLanguage}
                            setTargetLanguage={setTargetLanguage}
                            startTranslation={startTranslation}
                            clearTranslation={clearTranslation}
                        />
                    </div>
                    <pre className={styles.jsonPreviewPre}>{jsonData && JSON.stringify(jsonData, null, 2)}</pre>
                </div>
                <div className={styles.previewContainer}>
                    <div className="flexSpaceBetween">
                        <label className="label w75">Translated Data Preview</label>
                        <div className="flexEnd">
                            <FileDownload jsonData={translatedData} targetLanguage={targetLanguage} />
                            <CopyText jsonData={translatedData} targetLanguage={targetLanguage} />
                        </div>
                    </div>
                    <pre className={styles.jsonPreviewPre}>{Object.keys(translatedData)?.length > 0 && JSON.stringify(translatedData, null, 2)}</pre>
                </div>
            </div>}
        </div >
    );
};

export default FileTranslations;
