export const toBoolean = <T>(value?: T) => {
    if (typeof value === 'boolean') {
        return value
    }

    return Boolean(value && (value === 'true' || value === '1'))
}
