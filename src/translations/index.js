import I18n from 'react-native-i18n';
import de from './de.json';
import en from './en.json';
import es from './es.json';

I18n.fallbacks = true;
I18n.translations = { de, en, es };

export default I18n;
