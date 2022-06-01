const input = document.querySelector('.number_input')
const button = document.querySelector('.check_button')
const message = document.querySelector('.message')

const getValue = () => {
  let value = Number(input.value)
  localStorage.setItem('inputValue', value)  
}

const checkValue = () => {
  if (localStorage.getItem('inputValue')) {
    let val = localStorage.getItem('inputValue')
    if (isNaN(val)) throw new TypeError('not a number')
    if (val < 5 || val > 10) throw new RangeError('wrong number (available range from 5 to 10)')
    message.innerHTML = `it's ${val}`
  }
}

try {
  button.addEventListener('click', getValue)
  checkValue()
} catch (e) {
  message.innerHTML = `error: ${e.message}`
} finally {
  localStorage.clear()
}