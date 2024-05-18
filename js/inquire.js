const scriptURL = 'https://script.google.com/macros/s/AKfycbx-8AAWSvyf8aetpjBmUb05Hi6D-VeO3aqlnynm3xJ0_oUG4N9Ns12LsdBpjXU3NCeP/exec'
const form = document.forms['inquiry-form']
const thanks = document.querySelector('.thanks')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(form.style.display = "none")
    .then(thanks.style.display = "block")
    .catch(error => console.error('Error!', error.message))
})