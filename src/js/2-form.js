const STORAGE_KEY = 'feedback-form-state'
let formData = {
    email: '',
    message: ''
}

const form = document.querySelector('.feedback-form')

function loadFormStorage() {
    const savedData = localStorage.getItem(STORAGE_KEY)
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData)
            formData.email = parsedData.email || ''
            formData.message = parsedData.message || ''
            form.elements.email.value = formData.email
            form.elements.message.value = formData.message
        } catch (error) {
            console.error('Error parsing JSON:', error)
            localStorage.removeItem(STORAGE_KEY)
        }
    }
}
    loadFormStorage()
    
    form.addEventListener('input', (event) => {
    if (event.target.name === 'email' || event.target.name === 'message') {
        formData[event.target.name] = event.target.value.trim()
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    }
})

    form.addEventListener('submit', (event) => {
    event.preventDefault()
    const currentEmail = form.elements.email.value.trim()
    const currentMessage = form.elements.message.value.trim()
    if (!currentEmail || !currentMessage) {
        alert('Fill please all fields')
        return
    }
    formData.email = currentEmail
    formData.message = currentMessage

    console.log('form data', formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset()
    formData = {
        email: '',
        message: ''
    }
})
