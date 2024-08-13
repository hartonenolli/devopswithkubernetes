const getRandomString = () => {
    const randomString = Math.random().toString(36).substring(2, 12)
    return randomString
}

const logRandomString = () => {
    const randomString = getRandomString()
    const timestamp = new Date().toISOString()
    console.log(`${timestamp}: ${randomString}`)

    setTimeout(logRandomString, 5000)
}

logRandomString()