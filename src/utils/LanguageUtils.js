import messages_vie from '../translations/vie.json';
import messages_en from '../translations/en.json';

const flattenMessages = ((nestedMessages, prefix = '') => {
    if (nestedMessages == null) {
        return {}
    }
    return Object.keys(nestedMessages).reduce((messages, key) => {
        const value = nestedMessages[key];
        const prefixedKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'string') {
            Object.assign(messages, {[prefixedKey]: value})
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey))
        }

        return messages
    }, {})
});

const messages = {
    'vie': flattenMessages(messages_vie),
    'en': flattenMessages(messages_en),
};

export default class LanguageUtils {
    static getMessageByKey(key, language) {
        return messages[language][key]
    }

    static getFlattenedMessages() {
        return messages;
    }
}