const randomExercise = (arr, num) => {
    const random = [...arr].sort(() => 0.5 - Math.random())
    return random.slice(0, num)
}

export default randomExercise