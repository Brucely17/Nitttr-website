import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
      );
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      // style={{
      //   marginLeft: '2.2%',
      //   marginTop: '-100px',
      //   zIndex: 1000
      // }}
     className='absolute right-16 top-[120px]'
    />
  );
};

export default GoogleTranslate;
