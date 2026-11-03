GLOBAL ADVENTURES BLOG — ПРАКТИЧНА РОБОТА № 1
Дисципліна: Програмування в Internet

ЯК ЗАПУСТИТИ
1. Розпакувати архів, не змінюючи вкладені папки.
2. Відкрити pw1/index.html у Chrome, Firefox або Edge.
3. Сайт працює локально без інтернету; галерея містить оригінальні SVG-ілюстрації.

СКЛАД ПРОЄКТУ
pw1/index.html — головна
pw1/lviv.html, kyoto.html, rome.html — три сторінки міст
pw1/gallery.html — галерея з шістьма зображеннями
pw1/contact.html — контактна форма
pw1/subscribe.html — підписка з обов’язковим чекбоксом згоди
pw1/privacy.html, terms.html — службові сторінки футера
pw1/css/style.css — ваш початковий CSS + адаптивні доповнення
pw1/js/site.js — демонстраційна обробка форм без сервера
pw1/images/* — ілюстрації міст і favicon.ico

ВАЖЛИВО
Форми навчальні: повідомлення не відправляються. Для справжньої відправки потрібен сервер або сторонній сервіс.
Команди Git і публікація не виконані: репозиторій не було надано.

МОЖЛИВІ КОМАНДИ GIT (з кореня репозиторію labs):
git switch -c pw1
# скопіювати папку pw1 у репозиторій
git add pw1
git commit -m "Practical 1: Global Adventures Blog"
git switch main
git merge pw1
git push origin main

Фотографії можна підставити замість SVG у тегах <img src="images/...">.
