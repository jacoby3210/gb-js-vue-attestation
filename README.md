# Учебный проект на Vue.js для итоговой аттестации.

## Краткое описание

Учебный проект представляет собой слайдер изображений, реализованный на Vue.js, который позволяет динамически загружать HTML-контент и управлять отображением слайдов с помощью CSS и JavaScript. Проект создан для демонстрации ключевых навыков работы с компонентами Vue, взаимодействием с DOM, а также управления состоянием приложения.

## Функциональные возможности

1. **Динамическая загрузка контента**: Проект принимает HTML-код через входные параметры, что позволяет гибко изменять контент без необходимости изменения макета сайта.
2. **Paginator для работы с большими массивами данных**: Для оптимизации отображения массивов данных реализован компонент пагинации, который отображает ограниченное количество элементов на каждой странице, что улучшает производительность интерфейса и делает работу с данными более удобной.
3. **Tabulator для переключения элементов**: Реализован компонент для переключения видимости различных элементов в зависимости от заданных условий, например, по категориям или фильтрам.
4. **Слайдер изображений**: Реализована возможность переключения между изображениями, содержащимися в переданном HTML-контенте, с использованием радиокнопок.
  - **CSS-анимация**: Плавное переключение изображений через изменение их видимости с помощью CSS-анимации (свойство `opacity`).
5. **Управление состоянием**: Использование реактивных данных и механизмов VueX для управления состоянием приложения и отображением текущего активного изображения.

## Технологии

- **HTML и CSS**: Используются для верстки и управления внешним видом слайдера, включая анимацию и стилизацию контента.
- **JavaScript**: Для взаимодействия с DOM, управления видимостью изображений и обработки логики переключения.
- **Vue.js**: Основной JavaScript-фреймворк для построения пользовательского интерфейса и управления состоянием компонентов.
- **Vue Router**: Для реализации навигации по различным страницам или слайдам, если проект требует переключения между разными частями интерфейса.
- **VueX**: Используется для глобального управления состоянием приложения, например, для хранения текущего слайда или других общих данных.

## Цели проекта

1. Закрепление навыков работы с фреймворком Vue.js.
2. Понимание принципов реактивного программирования и работы с динамическим контентом.

## Рабочий экземпляр:
Рабочая версия проекта на GitHub Pages: https://jacoby3210.github.io/gb-js-vue-attestation/

Примечания:
  - рабочая страница блога:  первая в разделе Статьи & Новости.
  - рабочая страница проекта: первый в разделе проекты с фильтром "Спальня".
  - остальные страницы блога\проекта при переходе выдадут страницу ошибки. 