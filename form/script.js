document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const comment = document.getElementById('comment');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const commentError = document.getElementById('commentError');

    function validateName() {
        // Regex to match only letters and spaces
        const namePattern = /^[A-Za-z\s]+$/;

        if (name.value.trim() === '') {
            nameError.textContent = 'Por favor, preencha o nome.';
            nameError.style.display = 'block';
        } else if (!namePattern.test(name.value.trim())) {
            nameError.textContent = 'O nome não pode conter números ou caracteres especiais.';
            nameError.style.display = 'block';
        } else {
            nameError.style.display = 'none';
        }
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    }

    function validateComment() {
        if (comment.value.trim().length < 10) {
            commentError.textContent = 'O comentário deve ter pelo menos 10 caracteres.';
            commentError.style.display = 'block';
        } else {
            commentError.style.display = 'none';
        }
    }

    // Add event listeners for real-time validation
    name.addEventListener('input', validateName);
    email.addEventListener('input', validateEmail);
    comment.addEventListener('input', validateComment);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Run validation on submit
        validateName();
        validateEmail();
        validateComment();

        // Check if all fields are valid
        const nameValid = /^[A-Za-z\s]+$/.test(name.value.trim()) && name.value.trim() !== '';
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
        const commentValid = comment.value.trim().length >= 10;

        //if (nameValid && emailValid && commentValid) {
            //alert('Formulário enviado com sucesso!');
            // Optionally, you can submit the form data here
            // form.submit();
       // }
    });
});
