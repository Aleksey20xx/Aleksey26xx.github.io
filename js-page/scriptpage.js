"use strict"

document.addEventListener('DOMContentLoaded', () => {

// анимация    
    const scrollItems = document.querySelectorAll('.anim-items');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 1.5) + window.scrollY;
        
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 4);
                
            if (windowCenter > scrollOffset) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    };

    scrollAnimation();
    window.addEventListener('scroll', () => {
        scrollAnimation();
    });

    const textArea = document.querySelectorAll('[data-autoresize]');

    textArea.forEach(item => {
        let textAreaH = item.offsetHeight;
        
        item.addEventListener('input', event => {
            let $this = event.target;

            $this.style.height = textAreaH + 'px';
            $this.style.height = $this.scrollHeight + 'px';
        });
    });

// модальные окна
    const modalBtn = document.querySelectorAll('[data-modal]');
    const body = document.body;
    const modalClose = document.querySelectorAll('.modal__close')

    modalBtn.forEach(item => {
        item.addEventListener('click', event => {
            let $this = event.currentTarget;
            let modalId = $this.getAttribute('data-modal');
            let modal = document.getElementById(modalId);
            
            modal.classList.add('show');
            body.classList.add('no-scroll');

        });
    });
    modalClose.forEach(item => {
        item.addEventListener('click', event => {
            let currentModal = event.currentTarget.closest('.modal');

            currentModal.classList.remove('show');
            body.classList.remove('no-scroll');
        });
    });


// Отправка формы
    const form = document.getElementById('form');

    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let errore = formValidate(form);
        let formData = new FormData(form);

        if (errore === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if(response.ok){
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
            }else {
                alert('Ошибка');
                form.classList.remove('_sending');
            }
        } else {
            alert('Заполните обязательные поля');
        }
    };
    function formValidate(form) {
        let errore = 0;
        let formReq = document.querySelectorAll('._req')

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveErrore(input);

            if (input.classList.contains('._email')) {
                if(validateEmail(email)) {
                    formAddErrore(input);
                    errore++;
                }
            }else {
                if (input.value === '') {
                    formAddErrore(input);
                    errore++;
                };
            };
        };
        return errore;

    };
    function formAddErrore(input) {
        input.parentElement.classList.add('_errore');
        input.classList.add('_errore');
    };
    function formRemoveErrore(input) {
        input.parentElement.classList.remove('_errore');
        input.classList.remove('_errore');
    };
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});

