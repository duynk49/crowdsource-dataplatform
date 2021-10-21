const {
    getEnabledLanguages
} = require('../src/assets/js/language-filter');

describe('Test language filter', () => {
    describe('getEnabledLanguages', () => {
        test('should filter languages', () => {
            const enabled_languages = [
                "as",
                "bn",
                "hi"
            ]
            const expected = [
                { value: "Assamese", id: "as", text: "অসমীয়া", hasLocaleText: false, data: true },
                { value: "Bengali", id: "bn", text: "বাংলা", hasLocaleText: false, data: true },
                { value: "Hindi", id: "hi", text: "हिंदी", hasLocaleText: false, data: true }]
            const languages = getEnabledLanguages(enabled_languages)
            expect(languages).toEqual(expected)
        });
    });
});
