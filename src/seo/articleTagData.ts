import { ITagData } from './types';
import { chooseTattooArticleData, myTattooArticleData, healthTattooArticleData, japaneseTattooArticleData } from '../articles/types';

export const articleTagData: ITagData = {
  [chooseTattooArticleData.id]: {
    title: 'Сколько по времени делается тату (татуировку)',
    description: 'Сколько времени занимает сделать тату? Часто задаваемый вопрос. В этой статье, мы разберем, сколько времени нужно, чтобы набить татуировку. И какие факторы влияют на это.',
  },
  [myTattooArticleData.id]: {
    title: 'Хотите сделать (набить) тату – MyTattoo лучший сервис для выбора tattoo мастера',
    description: 'Хотите сделать тату, но не знаете как подобрать мастера? MyTattoo – сервис, где собраны все татуировщики. На сайте, Вы можете посмотреть фото эскизов и работ (татуировок). И выбрать мастера, которые набьет тату, именно Вам.',
  },
  [healthTattooArticleData.id]: {
    title: 'Вредны ли татуировки на теле: насколько опасно для здоровья делать тату?',
    description: 'Каждый кто хочет сделать татуировку, задается вопросом: насколько это опасно для здоровья? Не навредит ли телу тату? Насколько безопасно бить tattoo, и какими могут быть последствия? В этой статье, мы постараемся ответить на эти вопросы.',
  },
  [japaneseTattooArticleData.id]: {
    title: 'Значение японских тату: история происхождения, фото, эскизы, стили,  символика',
    description: 'Значения японских тату: ирэдзуми, дракон, карп кои, тигр и лев, змея, цветы, японские демоны. В этой статье вы узнаете историю происхождения татуировок, с фото эскизами под каждый стиль.',
  },
};
