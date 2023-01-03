const setWeightRange = weightData => {
    let high = 0
    let low = weightData[0]?.weight
    for (let index = 0; index < weightData?.length; index++) {
        if (weightData[index]?.weight > high) {
            high = weightData[index]?.weight
        }
        if (weightData[index]?.weight < low) {
            low = weightData[index]?.weight
        }
    }
    return { low: low - 20, high: high + 20 }
}

export default setWeightRange