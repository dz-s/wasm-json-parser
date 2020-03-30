import KMP from './KMP'
import { JNull, JBool } from './JValue'

export default function pString(str: string, word: string): [bool, string] {
    if (KMP(str, word) !== -1) {
        return [true, word]
    } else {
        return [false, str]
    }
}

export function pJNull(str: string): JNull {
    if (str === 'null') {
        return null
    } else {
        throw new SyntaxError('Error parsing null');
    }
}

export function pJBool(str: string): JBool {
    if (str === 'true') {
        return true
    } else if (str === 'false') {
        return false
    } else {
        throw new SyntaxError('Error parsing bool');
    }
}
