import createUserAcct from './createUserAcct'

const validateSignUp = async (e, setNeedMoreToast) => {
    const regex =
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/

    const input = {
        firstName: e.target.form[0].value,
        lastName: e.target.form[1].value,
        username: e.target.form[2].value,
        email: e.target.form[3].value,
        password: e.target.form[4].value,
    }
    const validateEmail = email => {
        if (regex.test(email)) {
            return true
        }
        return false
    }
    if (
        input.firstName.length < 1 ||
        input.lastName.length < 1 ||
        !validateEmail(input.email) ||
        input.password.length < 6
    ) {
        setNeedMoreToast(true)
    } else {
        await createUserAcct(
            input.firstName,
            input.lastName,
            input.username,
            input.email,
            input.password
        )
    }
}

export default validateSignUp
