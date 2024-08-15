const form = document.querySelector('form')
const nom = document.querySelector('#Full-Name')
const message = document.querySelector('#Message')
const nombre = document.querySelector('#Phone-number')
const email = document.querySelector('#Email')
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = nom.value;
    const messages = message.value;
    const numbers = nombre.value;
    const emails = email.value;
    try {
        const response = await axios.post('/.netlify/functions/sendEmail', {
            name: name,
           messages:messages,
            numbers: numbers,
            emails: emails
        });
		nom.value = ""
        message.value = ""
        nombre.value = ""
        email.value = ""

    } catch (error) {
        console.error("oups! elle y a une erreur:", error);
    }
});