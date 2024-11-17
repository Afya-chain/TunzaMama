// src/hooks/useTranslation.js
import { useLanguage } from '../context/LanguageContext';

export const useTranslation = () => {
  const { t, language, setLanguage } = useLanguage();

  const formatDate = (date) => {
    try {
      return new Date(date).toLocaleDateString(language === 'en' ? 'en-US' : 'sw-KE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return date;
    }
  };

  const formatNumber = (number) => {
    try {
      return new Intl.NumberFormat(language === 'en' ? 'en-US' : 'sw-KE').format(number);
    } catch (error) {
      console.error('Error formatting number:', error);
      return number;
    }
  };

  return {
    t,
    language,
    setLanguage,
    formatDate,
    formatNumber
  };
};