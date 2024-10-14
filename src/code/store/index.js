// src/store/index.js
import axios from "axios";
import { createStore } from 'vuex';

export default createStore({
  state: {
    articles: [
      {
        id: 0,
        category: "Дизайн кухни",
        datestamp: "26 Декабрь,2022",
        image: "./images/article-00.png",
        title: "Последний пост",
        subtitle: "Low Cost Latest Invented Interior Designing Ideas",
        text: "С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов. Перед появлением электронных издательств дизайнеры импровизировали в работе над макетами, изображая текст при помощи волнистых линий. С появлением самоклеющихся наклеек с напечатанным текстом «Lorem ipsum» появился более реалистичный способ обозначения расположения текста на странице.",
      },
      {id: 1,  category: "Дизайн кухни",      datestamp: "26 Декабрь,2022", image: "./images/article-01.png", tags: [1], title: "Создадим лучший макет перепланировки",},
      {id: 2,  category: "Дизайн для жизни",  datestamp: "22 Декабрь,2022", image: "./images/article-02.png", title: "Лучшие интерьерные идеи по низкой цене",},
      {id: 3,  category: "Дизайн интерьера",  datestamp: "25 Декабрь,2022", image: "./images/article-03.png", title: "Лучшие интерьерные решения для офисов ",},
      {id: 4,  category: "Дизайн кухни",      datestamp: "26 Декабрь,2022", image: "./images/article-01.png", title: "Создадим лучший макет перепланировки",},
      {id: 5,  category: "Дизайн для жизни",  datestamp: "22 Декабрь,2022", image: "./images/article-02.png", title: "Лучшие интерьерные идеи по низкой цене",},
      {id: 6,  category: "Дизайн интерьера",  datestamp: "25 Декабрь,2022", image: "./images/article-03.png", title: "Лучшие интерьерные решения для офисов ",},
      {id: 7,  category: "Дизайн кухни",      datestamp: "26 Декабрь,2022", image: "./images/article-01.png", title: "Создадим лучший макет перепланировки",},
      {id: 8,  category: "Дизайн для жизни",  datestamp: "22 Декабрь,2022", image: "./images/article-02.png", title: "Лучшие интерьерные идеи по низкой цене",},
      {id: 9,  category: "Дизайн интерьера",  datestamp: "25 Декабрь,2022", image: "./images/article-03.png", title: "Лучшие интерьерные решения для офисов ",},
      {id: 10, category: "Дизайн кухни",      datestamp: "26 Декабрь,2022", image: "./images/article-01.png", title: "Создадим лучший макет перепланировки",},
      {id: 11, category: "Дизайн для жизни",  datestamp: "22 Декабрь,2022", image: "./images/article-02.png", title: "Лучшие интерьерные идеи по низкой цене",},
      {id: 12, category: "Дизайн интерьера",  datestamp: "25 Декабрь,2022", image: "./images/article-03.png", title: "Лучшие интерьерные решения для офисов ",},
      {id: 13, category: "Дизайн кухни",      datestamp: "26 Декабрь,2022", image: "./images/article-01.png", title: "Создадим лучший макет перепланировки",},
      {id: 14, category: "Дизайн для жизни",  datestamp: "22 Декабрь,2022", image: "./images/article-02.png", title: "Лучшие интерьерные идеи по низкой цене",},
      {id: 15, category: "Дизайн интерьера",  datestamp: "25 Декабрь,2022", image: "./images/article-03.png", title: "Лучшие интерьерные решения для офисов ",},
    ],
    articleTags: ["Кухня", "Спальня", "Здание", "Архитектура", "Планировка", "Прочее"],
    projects: [
      {id: 1,  name: "Современная Кухня",     category: "Декор / Планировка", image: "./images/project-01.png", type:"Кухня"},
      {id: 2,  name: "Современная Ванная",    category: "Декор / Планировка", image: "./images/project-02.png", type:"Ванная"},
      {id: 3,  name: "Современная Спальня",   category: "Декор / Планировка", image: "./images/project-03.png", type:"Спальня"},
      {id: 4,  name: "Современная Гостиная",  category: "Декор / Планировка", image: "./images/project-04.png", type:"Гостинная"},
      {id: 5,  name: "Современная Кухня",     category: "Декор / Планировка", image: "./images/project-01.png", type:"Кухня"},
      {id: 6,  name: "Современная Ванная",    category: "Декор / Планировка", image: "./images/project-02.png", type:"Ванная"},
      {id: 7,  name: "Современная Спальня",   category: "Декор / Планировка", image: "./images/project-03.png", type:"Спальня"},
      {id: 8,  name: "Современная Гостиная",  category: "Декор / Планировка", image: "./images/project-04.png", type:"Гостинная"},
      {id: 9,  name: "Современная Кухня",     category: "Декор / Планировка", image: "./images/project-01.png", type:"Кухня"},
      {id: 10, name: "Современная Ванная",    category: "Декор / Планировка", image: "./images/project-02.png", type:"Ванная"},
      {id: 11, name: "Современная Спальня",   category: "Декор / Планировка", image: "./images/project-03.png", type:"Спальня"},
      {id: 12, name: "Современная Гостиная",  category: "Декор / Планировка", image: "./images/project-04.png", type:"Гостинная"},
    ],
    statistics: [
      { value: 12, description: "Лет опыта" },
      { value: 15, description: "Успешных проектов" },
      { value: 85, description: "Проектов в работе" },
      { value: 95, description: "Счастливых клиентов" },
    ],
  },
  mutations: {
  },
  actions: {
    async loadContent(self,  {localPath}){
      console.log(`${import.meta.env.BASE_URL}data/${localPath}`)
      return axios.get(
        `${import.meta.env.BASE_URL}data/${localPath}`, 
        { cache: 'no-cache' }
      ).then(
        response => {
          if (response && response.headers.get('Content-Type') !== 'text/html') {
            console.log(`Файл существует.`);
            return response.data;
          } else {
            console.log(`Файл не найден. `);
            return false;
          }
        }
      ).catch(
        error => {
          console.error(`Ошибка при загрузке статьи: ${error}`);
          return false;
        }
      );
    },

  },
  getters: {
  }
});
