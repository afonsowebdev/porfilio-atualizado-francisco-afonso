addEventListener('DOMContentLoaded', () => { 
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('messege');
    const formMessage = document.getElementById('formMessage');
    const btnSubmit = document.getElementById('btnSubmit');

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault();

        const name = nameInput.value.trim(); 
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();
    

        if(name === '' || email === '' || subject === '' || message === '') {
            alert('Por favor, preencha todos os campos do formulário para que o processo de envio seja concluído com sucesso.');
            return;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Por favor, insira um endereço de email válido.');
            return;
        } else if (subject === '' || message === '') {
            alert('Por favor, preencha todos os campos do formulário para que o processo de envio seja concluído com sucesso.');
            return;
        } else {
            formMessage.textContent = 'Mensagem enviada com sucesso! Obrigado por entrar em contato.';
            formMessage.style = 'color: green; margin-top: 10px; font-weight: 600; align-items: center;';
            contactForm.reset();
        }
    })

});