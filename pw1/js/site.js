// Навчальна демонстрація: форми не надсилають дані на сервер.
// Облікові дані не збираються; збереження підписки можливе лише локально у браузері.
document.querySelectorAll('form[data-demo]').forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const notice = form.querySelector('.form-status');
    if (form.dataset.demo === 'subscribe') {
      const email = form.querySelector('input[type="email"]').value;
      try {localStorage.setItem('global-adventures-demo-subscription', email);} catch (e) {}
      notice.textContent = 'Дякуємо! Підписку збережено лише в цьому браузері (демонстраційний режим).';
    } else {
      notice.textContent = 'Форма заповнена правильно. Це демонстрація: повідомлення не відправлено на сервер.';
    }
    notice.setAttribute('role', 'status');
    form.reset();
  });
});
