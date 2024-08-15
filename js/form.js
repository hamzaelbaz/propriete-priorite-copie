const form = document.querySelector('form')
const nom = document.querySelector('#nom')
const depart = document.querySelector('#depart')
const destination = document.querySelector('#destination')
const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = nom.value;
    const start = depart.value;
    const destinations = destination.value;
    const numbers = nombre.value;
    const emails = email.value;
    try {
        const response = await axios.post('/.netlify/functions/sendEmail', {
            name: name,
            start: start,
            destinations: destinations,
            numbers: numbers,
            emails: emails
        });
		nom.value = ""
        depart.value = ""
        destination.value =""
        nombre.value = ""
        email.value = ""

    } catch (error) {
        console.error("oups! elle y a une erreur:", error);
    }
});