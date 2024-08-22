function getRandomNumber() {
    const randomNumber =  Math.floor(Math.random() * 10) + 1
      document.getElementById('randomNumber').innerHTML = randomNumber
  }