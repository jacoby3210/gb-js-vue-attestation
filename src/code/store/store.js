// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    articles: [
      {
        id: 0,
        category: "Дизайн кухни",
        datestamp: "26 Декабрь,2022",
        image: "./resources/images/article-00.png",
        title: "Последний пост",
        subtitle: "Low Cost Latest Invented Interior Designing Ideas",
        text: "С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов. Перед появлением электронных издательств дизайнеры импровизировали в работе над макетами, изображая текст при помощи волнистых линий. С появлением самоклеющихся наклеек с напечатанным текстом «Lorem ipsum» появился более реалистичный способ обозначения расположения текста на странице.",
      },
      {id: 1, category: "Дизайн кухни", datestamp: "26 Декабрь,2022", image: "./resources/images/article-01.png", title: "Создадим лучший макет перепланировки",},
      {id: 2, category: "Дизайн для жизни", datestamp: "22 Декабрь,2022", image: "./resources/images/article-02.png", title: "Лучшие интерьерные идеи по низкой цене",},
      {id: 3, category: "Дизайн интерьера", datestamp: "25 Декабрь,2022", image: "./resources/images/article-03.png", title: "Лучшие интерьерные решения для офисов ",},
      {id: 4, category: "Дизайн кухни", datestamp: "26 Декабрь,2022", image: "./resources/images/article-01.png", title: "Создадим лучший макет перепланировки",},
      {id: 5, category: "Дизайн для жизни", datestamp: "22 Декабрь,2022", image: "./resources/images/article-02.png", title: "Лучшие интерьерные идеи по низкой цене",},
      {id: 6, category: "Дизайн интерьера", datestamp: "25 Декабрь,2022", image: "./resources/images/article-03.png", title: "Лучшие интерьерные решения для офисов ",},
      {id: 7, category: "Дизайн кухни", datestamp: "26 Декабрь,2022", image: "./resources/images/article-01.png", title: "Создадим лучший макет перепланировки",},
      {id: 8, category: "Дизайн для жизни", datestamp: "22 Декабрь,2022", image: "./resources/images/article-02.png", title: "Лучшие интерьерные идеи по низкой цене",},
      {id: 9, category: "Дизайн интерьера", datestamp: "25 Декабрь,2022", image: "./resources/images/article-03.png", title: "Лучшие интерьерные решения для офисов ",},
      {id: 10, category: "Дизайн кухни", datestamp: "26 Декабрь,2022", image: "./resources/images/article-01.png", title: "Создадим лучший макет перепланировки",},
      {id: 11, category: "Дизайн для жизни", datestamp: "22 Декабрь,2022", image: "./resources/images/article-02.png", title: "Лучшие интерьерные идеи по низкой цене",},
      {id: 12, category: "Дизайн интерьера", datestamp: "25 Декабрь,2022", image: "./resources/images/article-03.png", title: "Лучшие интерьерные решения для офисов ",},
      {id: 13, category: "Дизайн кухни", datestamp: "26 Декабрь,2022", image: "./resources/images/article-01.png", title: "Создадим лучший макет перепланировки",},
      {id: 14, category: "Дизайн для жизни", datestamp: "22 Декабрь,2022", image: "./resources/images/article-02.png", title: "Лучшие интерьерные идеи по низкой цене",},
      {id: 15, category: "Дизайн интерьера", datestamp: "25 Декабрь,2022", image: "./resources/images/article-03.png", title: "Лучшие интерьерные решения для офисов ",},
    ],
    articleTags: ["Кухня", "Спальня", "Здание", "Архитектура", "Планировка", "Прочее"],
    projects: [
      {
        id: 1,
        name: "Современная кухня",
        category: "Декор / Планировка",
        image: "./resources/images/project-01.png",
      },
      {
        id: 2,
        name: "Современная кухня",
        category: "Декор / Планировка",
        image: "./resources/images/project-02.png",
      },
      {
        id: 3,
        name: "Современная кухня",
        category: "Декор / Планировка",
        image: "./resources/images/project-03.png",
      },
      {
        id: 4,
        name: "Современная кухня",
        category: "Декор / Планировка",
        image: "./resources/images/project-04.png",
      },
    ],
    statistics: [
      { value: 12, description: "Лет опыта" },
      { value: 15, description: "Успешных проектов" },
      { value: 85, description: "Проектов в работе" },
      { value: 95, description: "Счастливых клиентов" },
    ],
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    }
  },
  getters: {
    count: state => state.count
  }
});
