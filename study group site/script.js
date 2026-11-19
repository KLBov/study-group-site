const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!name || !email || !message) {
    status.textContent = 'Заполните все поля формы.';
    return;
  }
  if (!email.includes('@') || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.textContent = 'Проверьте email: укажите корректный адрес с символом @.';
    form.elements.email.focus();
    return;
  }

  const subject = encodeURIComponent('Сообщение с сайта учебной группы');
  const body = encodeURIComponent(`Имя: ${name}\nEmail: ${email}\n\n${message}`);
  status.textContent = 'Открываем почтовую программу. Если этого не произошло, напишите на group@example.com.';
  window.location.href = `mailto:group@example.com?subject=${subject}&body=${body}`;
});
