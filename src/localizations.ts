import { PageName } from './types/pageName.enum';
import { ILocalizations, Language } from './localizations.types';

export const localizations: ILocalizations = {
  [Language.RU]: {
    pageNames: {
      [PageName.MAIN]: "Главная",
      [PageName.TATTOOERS]: "Поиск мастера",
      [PageName.FOR_TATTOOERS]: "Для мастеров",
      [PageName.ARTICLES]: "Статьи",
      [PageName.ABOUT]: "О проекте",
    
      [PageName.CHOOSE_CITY]: "Выбор города",
      [PageName.CHOOSE_STYLE]: "Выбор стиля"
    },
    pages: {
      [PageName.MAIN]: {
        name: "Главная",
        text: {
          title: "Найти мастера тату легко!",
          text: "Чтобы найти лучших тату мастеров в своем городе пройди несколько простых шагов.",
          button: "Начать"
        }
      },
      [PageName.CHOOSE_CITY]: {
        name: "Выбор города",
        text: {
          title: "01. Выбери город",
          text: "Выбери город в котором хочешь найти мастера",
          button: "Все города",
          chooseButton: "Далее",
        }
      },
      [PageName.CHOOSE_STYLE]: {
        name: "Выбор стиля",
        text: {
          title: "02. Выбери стиль",
          text: "Выбери стилистику в которой ищешь мастера (можно выбрать несколько вариантов)",
          button: "Все стили",
          chooseButton: "Далее",
        }
      },
      [PageName.TATTOOERS]: {
        name: "Поиск мастера",
        text: {
          selectCity: 'Выбор города',
          selectCityPlaceholder: 'Все города Украины',
          selectStyle: 'Выбор стиля',
          more: 'Еще',
          less: 'Меньше',
          allCities: 'Все города',
          allStyles: 'Все стили',
          discard: 'Сбросить',
          select: 'Выбрать'
        }
      },
      [PageName.TATTOOER]: {
        name: "Мастер",
        text: {
          description: 'Описание',
          style: 'Стиль',
          contact: 'Связаться',
        }
      },
      [PageName.ARTICLES]: {
        name: "Статьи",
        text: {
          title: 'Статьи',
          text: 'Мы собрали материал который поможет тебе углубиться в мир тату'
        }
      },
      [PageName.ABOUT]: {
        name: "О проекте",
        text: {
          title: 'О проекте',
          description: 'Это нон профит проект создан командой интузиастов которые сами столкнулись с проблемой поиска мастеров тату.',
          subtitle1: 'Команда',
          text1: 'Мы небольшая инхаус команда в которую входят разработчики, дизайнеры и SEO специалисты.',
          subtitle2: 'Обратная связь',
          text2: 'Если у тебя есть вопросы, предложения или вам нужен проект под ключ, напишите нам на contact@mytattoo.com.ua',
          subtitle3: 'FAQ',
          text3: '1) мы не предоставляем форму связи\n\r 2) пишите челам в директ инсты\n\r 3) если инфа не сходится, напишите нам в директ инсты\n\r и тд'
        }
      },
      [PageName.NOT_FOUND]: {
        name: 'Error 404',
        text: {
          title: 'Error 404',
          text: 'Страница не найдена.',
          link: 'На главную'
        }
      }
    }
  },
  [Language.UA]: {
    pageNames: {
      [PageName.MAIN]: "Головна",
      [PageName.TATTOOERS]: "Пошук майстра",
      [PageName.FOR_TATTOOERS]: "Для майстрів",
      [PageName.ARTICLES]: "Публікації",
      [PageName.ABOUT]: "Про проект",
    
      [PageName.CHOOSE_CITY]: "Вибір міста",
      [PageName.CHOOSE_STYLE]: "Вибір стилю"
    },
    pages: {
      [PageName.MAIN]: {
        name: "Головна",
        text: {
          title: "Знайти майстра тату легко!",
          text: "Щоб знайти кращих тату майстрів в своєму місті пройди декілька простих кроків.",
          button: "Почати"
        }
      },
      [PageName.CHOOSE_CITY]: {
        name: "Вибір міста",
        text: {
          title: "01. Обери місто",
          text: "Обери місто в якому хочешь знайти майстра",
          button: "Всі міста",
          chooseButton: "Далі",
        }
      },
      [PageName.CHOOSE_STYLE]: {
        name: "Вибір стилю",
        text: {
          title: "02. Обери стиль",
          text: "Обери стилістику в котрій шукаєш майстра (можно обрати кілька варіантів)",
          button: "Всі стили",
          chooseButton: "Далі",
        }
      },
      [PageName.TATTOOERS]: {
        name: "Пошук майстра",
        text: {
          selectCity: 'Вибір міста',
          selectCityPlaceholder: 'Всі міста України',
          selectStyle: 'Вибір стилю',
          more: 'Ще',
          less: 'Менше',
          allCities: 'Всі міста',
          allStyles: 'Всі стилі',
          discard: 'Скинути',
          select: 'Обрати'
        }
      },
      [PageName.TATTOOER]: {
        name: "Майстер",
        text: {
          description: 'Опис',
          style: 'Стиль',
          contact: 'Зв\'язатися'
        }
      },
      [PageName.ARTICLES]: {
        name: "Публікації",
        text: {
          title: 'Публікації',
          text: 'Ми зібрали матеріалиб які допоможуть тобі поглинути в світ тату'
        }
      },
      [PageName.ABOUT]: {
        name: "Про проект",
        text: {
          title: 'Про проект',
          description: ' Це нон профіт проект створений командою ентузіастів які самі зіткнулись з проблемою пошуку тату майстрів.',
          subtitle1: 'Команда',
          text1: 'Ми невелика інхаус команда шо складається з дизайнерів, розробників та SEO спеціалістів.',
          subtitle2: 'Зворотній зв\'язок',
          text2: 'Якщо у тебе є питання, пропозиції або вам потрібен проект під ключ, напишіть нам на contact@mytattoo.com.ua',
          subtitle3: 'FAQ',
          text3: '1) ми не надаємо форму зв\'язку\n\r 2) пишіть майстрам в дірект інстаграму\n\r 3) якщо інформація профілю не зходиться, пишіть нам в дірект\n\r і тд'
        }
      },
      [PageName.NOT_FOUND]: {
        name: 'Error 404',
        text: {
          title: 'Error 404',
          text: 'Сторінка не знайдена.',
          link: 'На головну',
        }
      }
    }
  },
};
