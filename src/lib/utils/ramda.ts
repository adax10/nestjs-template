import {
    values,
    toPairs,
    fromPairs,
    compose,
    isNil,
    is,
    isEmpty,
    cond,
    equals,
    prop,
    descend,
    reverse,
    flatten,
    sortBy,
    empty,
    uniq,
    always,
    sort,
    T,
    sum,
    splitEvery,
    last
} from 'ramda'
import { KeyValuePair } from '../types'

/* eslint-disable @typescript-eslint/no-explicit-any */
const hasElements = (subject: any) => (Array.isArray(subject) ? subject.length > 0 : false)
const hasKeys = (subject: any) => (typeof subject === 'object' ? Object.keys(subject).length > 0 : false)
const isDefined = <T>(subject: T): subject is NonNullable<T> => typeof subject !== 'undefined' && subject !== null
const notNil = (subject: any) => !isNil(subject)
const all = (...args: Array<boolean>) => !args.some(arg => !arg)
const clearObject = <T = any>(subject: KeyValuePair) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const filteredArray = toPairs<any>(subject).filter(([_, value]) => notNil(value) && value !== '')

    return fromPairs(filteredArray) as T
}

export {
    all,
    values,
    hasKeys,
    clearObject,
    toPairs,
    notNil,
    isNil,
    is,
    hasElements,
    isEmpty,
    cond,
    equals,
    compose,
    isDefined,
    flatten,
    empty,
    always,
    uniq,
    T,
    prop,
    sortBy,
    reverse,
    descend,
    sort,
    fromPairs,
    splitEvery,
    sum,
    last
}
