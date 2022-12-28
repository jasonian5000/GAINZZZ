import serverURL from "./serverURL"

const createUserAcct = async (
    firstName,
    lastName,
    username,
    email,
    password
) => {
    const body = { firstName, lastName, username, email, password }
    await fetch(`${serverURL}/sign_up`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
}

export default createUserAcct