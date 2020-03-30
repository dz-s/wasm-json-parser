/**
 * @see https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/string/knuth-morris-pratt/knuthMorrisPratt.js
 * @param {string} word
 * @return {number[]}
 */
function buildPatternTable(word: string) {
    const patternTable = [0];
    let prefixIndex: number = 0;
    let suffixIndex: number = 1;

    while (suffixIndex < word.length) {
        if (word.charAt(prefixIndex) === word.charAt(suffixIndex)) {
            patternTable[suffixIndex] = prefixIndex + 1;
            suffixIndex += 1;
            prefixIndex += 1;
        } else if (prefixIndex === 0) {
            patternTable[suffixIndex] = 0;
            suffixIndex += 1;
        } else {
            prefixIndex = patternTable[prefixIndex - 1];
        }
    }

    return patternTable;
}

/**
 * @param {string} text
 * @param {string} word
 * @return {number}
 */
export default function knuthMorrisPratt(text: string, word: string) {
    if (word.length === 0) {
        return 0;
    }

    let textIndex: number = 0;
    let wordIndex: number = 0;

    const patternTable = buildPatternTable(word);

    while (textIndex < text.length) {
        if (text.charAt(textIndex) === word.charAt(wordIndex)) {
            // We've found a match.
            if (wordIndex === word.length - 1) {
                return (textIndex - word.length) + 1;
            }
            wordIndex += 1;
            textIndex += 1;
        } else if (wordIndex > 0) {
            wordIndex = patternTable[wordIndex - 1];
        } else {
            wordIndex = 0;
            textIndex += 1;
        }
    }

    return -1;
}