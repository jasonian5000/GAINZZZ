export const inchesToFeet = value => {
    value = Number(value)
    let feet = Math.floor(value / 12)
    let inches = value % 12
    return `${feet}' ${inches}"`
}