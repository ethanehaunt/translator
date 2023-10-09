import axios from 'axios';

export const translationText = async (text, targetLanguage) => {

  const encodedParams = new URLSearchParams();
  encodedParams.set('q', text);
  encodedParams.set('target', targetLanguage);
  encodedParams.set('source', 'en');

  const options = {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': '05c6580279mshcb643e812d6121ap191f81jsn2ef1e298800e',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    data: encodedParams,
  };

  const response = await axios.request(options);
  return response.status === 200 && response?.data?.data?.translations ? response.data.data.translations[0].translatedText : "";
};


