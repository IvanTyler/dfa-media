Установите зависимости в frontend и backend папках командой npm i
Для запуска проекта в папке backend введите команду npm run dev, в папке frontend npm start
Для отображения контента приложения сделал моковые данные на бэкенде

Изменения которые я внес и которые обсудил бы с дизайнером:
1. Не понятно для чего точка поэтому не верстал ее: https://prnt.sc/nrew1i5iKZCf
2. Слишком большие отступы, считаю, что здесь они не нужны: https://prnt.sc/RuAxM9j00ZDO
3. Слишком маленькие шрифты еле глазу видно и аватарку можно по больше сделать: https://prnt.sc/Y793eM3TQpWI
  этот пункт частично вытекает из 2го пункта.
4. Увеличил: ширину, размер шрифтов, высоту и размер аватарки постов, уменьшил отступы родительского блока.
  этот пункт вытекает из 2 и 3 пунктов.
5. Как я понял посты и пользователи в постах имеют статус: астивный/не активный поэтому добавил в объектах поле active
и в случайном порядке ставлю true|false и в зависимости от этого доавбляю рамку с тенью посту и прозрачность аватарке https://prnt.sc/FP36dtL-MAW2
6. Добавил скролл блоку постов аналагично дизайну скроллу в постах https://prnt.sc/-EQg-e-9riYW
Из выше сказанного подозреваю, что возможно дизайн был не доработан и поэтому подстроился под ситуацию.

Технологии которые использовал:
- Beckend node js
- Frontend react + redux, typeScript, scss
