document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contact-form');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var submitBtn = document.getElementById('submit-btn');
    var successMessage = document.getElementById('success-message');

    function validateInput(input) {
        if (!input.checkValidity()) {
            input.classList.add('error');
            input.nextElementSibling.innerText = input.validationMessage;
            return false;
        } else {
            input.classList.remove('error');
            input.nextElementSibling.innerText = '';
            return true;
        }
    }

    function checkFormValidity() {
        return validateInput(nameInput) && validateInput(emailInput) && validateInput(messageInput);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (checkFormValidity()) {
            form.style.display = 'none';
            successMessage.classList.remove('hidden');
        }
    });

    nameInput.addEventListener('input', function() {
        validateInput(nameInput);
        submitBtn.disabled = !checkFormValidity();
    });

    emailInput.addEventListener('input', function() {
        validateInput(emailInput);
        submitBtn.disabled = !checkFormValidity();
    });

    messageInput.addEventListener('input', function() {
        validateInput(messageInput);
        submitBtn.disabled = !checkFormValidity();
    });
});
