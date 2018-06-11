import languageConstants from './languageConstants';

export default function classMaker(lang) {

    // this way, you dont need to pass in the language argument every time.
    // only need to pass it in once at the beginning.

    return function(className){
        let space = ' ';
        if (lang === languageConstants.ENGLISH) {
            return space + className;
        } else if (lang === languageConstants.CHINESE) {
            className += ' ' + className + '-cn';
            return space + className;
        } else if (lang === languageConstants.JAPANESE) {
            className += ' ' + className + '-jp';
            return space + className;
        }
    };
}