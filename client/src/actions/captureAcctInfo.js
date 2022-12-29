const captureAcctInfo = (e, info) => {
    e.preventDefault()
    let height =
        e.target.form[0].value ? e.target.form[0].value : info[0].height
    let weight =
        e.target.form[2].value ? e.target.form[2].value : info[0].weight
    let age =
        e.target.form[4].value ? e.target.form[4].value : info[0].age
    let gender =
        e.target.form[6].value ? e.target.form[6].value : info[0].gender

    let personalTrainer =
        e.target.form[8].value ? e.target.form[8].value : info[0].personalTrainer
        
    let input = {
        height,
        weight,
        gender,
        age,
        personalTrainer,
    }
    return input
}

export default captureAcctInfo