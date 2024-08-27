const getRandomString = () => {
    const randomString = Math.random().toString(36).substring(2, 12)
    return randomString
}

function logRandomString() {
    const randomString = getRandomString()
    const timestamp = new Date().toISOString()
    document.getElementById('random-string').innerText = `${timestamp}: ${randomString}`
    console.log('Random string:', randomString)
    setTimeout(logRandomString, 5000)
}
