import Header from '../Header';
import React, { useState } from 'react';
import LanguageSelections from '../LanguageSelections';
import { translationText } from '../../api/translationText';

const BasicTranslations = () => {

    const [text, setText] = useState('');
    const [targetLanguage, setTargetLanguage] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const translateText = async () => {
        if (text && targetLanguage) {
            try {
                const translation = await translationText(text, targetLanguage);
                setTranslatedText(translation);
            } catch (error) {
                setTranslatedText('');
            }
        }
    };

    const clearTranslation = () => {
        setText('');
        setTargetLanguage('')
        settranslatedText('');
    }

    return (
        <div>
            <Header headerText="Basic Text Translation" />
            <div className="flexColumn">
                <textarea
                    rows="4"
                    cols="50"
                    value={text}
                    className="form-control marginTop1"
                    placeholder="Enter text in English"
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
            </div>
            <LanguageSelections
                text={text}
                targetLanguage={targetLanguage}
                setTargetLanguage={setTargetLanguage}
                startTranslation={translateText}
                clearTranslation={clearTranslation}
            />
            {translatedText && (
                <div className="flexColumn marginTop2">
                    <label className="label w100">Translated Data Preview</label>
                    <div className="flexColumn translationPreview">{translatedText}</div>
                </div>
            )}
        </div >
    );
};

export default BasicTranslations;
