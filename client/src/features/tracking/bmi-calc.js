const bmiCalc = (height, weight) => {
    let heightM = Number(height) * 0.0254
    let weightKg = Number(weight) * 0.453592
    let num = weightKg /(heightM * heightM)
    let bmi = Math.round(num * 10) / 10
    return bmi
}

export default bmiCalc