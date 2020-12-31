
import * as React from 'react';
import styled from 'styled-components';

import { japaneseTattooArticleData } from './types';
import { Body, Info, TextBlock, SubTitle, SmallSubTitle } from './components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;

  @media (max-width: 720px) {
    flex-direction: column-reverse;
    margin-top: 24px;
  }
`;

export const RowStyle = styled(Row)`
  margin-top: 106px;

  @media (max-width: 720px) {
    margin-top: 56px;
  }
`;

export const ColumnDesktop = styled.div`
  @media (max-width: 720px) {
    display: none;
  }
`;

export const TextBlockMobile = styled(TextBlock)`
  display: none;
  margin-bottom: 40px;

  @media (max-width: 720px) {
    display: flex;
  }
`;

export const Image = styled.img`
  width: 276px;
  margin-left: 32px;
  border-radius: 8px;
  margin-bottom: 32px;

  @media (max-width: 720px) {
    width: 100%;
    margin-left: 0;
    height: 220px;
    object-fit: cover;
    margin-bottom: 24px;
  }
`;

const TEXT1 = 'История японской татуировки тесно связана с культурным, политическим и даже экономическим развитием страны. В глубокой древности японцы покрывали тело сакральными татуировками, которые выполняли роль оберегов, а много позже искусство ирэдзуми стало табуированным и запрещенным для простых смертных. До сих пор в Японии существует множество предубеждений, связанных с татуировками. Но, несмотря на это, искусство ирэдзуми интересует западный мир. Давайте узнаем значение японских тату, а также разберемся, подойдут ли такие рисунки человеку другой культуры.';

const TEXT2 = 'Ирэдзуми в дословном переводе с японского означает «инъекции туши». Нательные рисунки тушью появились в Японии в глубокой древности. Доподлинно известно о существовании татуировок на Японских островах в 3 веке до нашей эры. Островитяне наносили рисунки на все тело, чтобы защитить себя от гнева морских богов. Позже мифологические мотивы и религиозная символика станут основой нательной живописи японцев.'
const TEXT3 = 'Спустя время татуировки превратились в метод наказания преступников, чем и являлись на протяжении многих столетий. Только в конце 17 века случилось возрождение татуировки как культурного феномена, и искусство нательной живописи стало популярным способом украсить тело. Тогда и начал развиваться японский стиль тату в том виде, в котором мы его знаем сейчас.';
const TEXT4 = 'С 1868 по 1948 год татуировки снова попали под запрет властей. На этот раз из-за политических причин. Японские правители увидели в татуировках атрибутику уголовного мира, а не особое искусство своего народа. Почти 100 лет японская татуировка была под запретом, что и стало причиной негативного отношения современных японцев к этому виду искусства. Именно в этот период тату стало ключевым отличием японской мафии якудза, что тоже отразилось на общественном мнении.';
const TEXT5 = 'Сегодня тату в Японии официально разрешены, но мало жителей страны стремятся украсить себя традиционными рисунками. В некоторые общественные места даже запрещено приходить татуированным людям. Ирэдзуми превратилось в развлечение для иностранцев, для которых и работают тату салоны в больших городах Японии. Но настоящих японских мастеров тату, работающих в традиционной технике, насчитывается не более 3-х десятков на всю страну. Но именно они владеют особыми знаниями ирэдзуми, которые передаются из поколения в поколение.';

const TEXT6 = 'Западных людей эскизы тату в японском стиле привлекают красочностью и символизмом. На них изображены целые сценки из мифов и легенд, а каждый символ имеет скрытое значение. Даже человек далекий от тату отличит японские тату эскизы от нательных рисунков в другом стиле. Яркие краски, животные и растительные мотивы, а также особая техника рисунка делает японские татуировки уникальными.';
const TEXT7 = 'Давайте рассмотрим популярные японские тату значение, чтобы узнать больше об искусстве ирэдзуми.';

const TEXT8 = 'В Азии одной из самых популярных тем для тату является изображение дракона. В Японии дракон ассоциируется со стихией воды и не имеет отношения к огню, в отличие от западной культуры. В качестве оберега изображение дракона символизирует мудрость и созидательную силу, а также щедрость и обладание тайным знанием. Современные японские эскизы тату с драконом — лучшее решение для тех, кто мечтает стать увереннее в себе и обрести внутреннюю силу.';

const TEXT9 = 'Один из самых известных символов азиатских тату — речной карп кои, о котором сложено немало легенд и мифов. Один из них гласит, что преодолев жизненные испытания, карп превратится в речного дракона. По этой причине тату с карпом набивают люди, у которых есть важная цель в жизни или большая мечта. Тату с карпом приносит удачу целеустремленным и смелым людям, которые не боятся рисковать.'

const TEXT10 = 'Изображение ревущего льва или разъяренного тигра предназначалось для защиты своего хозяина, а также декларации его мужества и силы. Это японское тату значение имеет самое фигуральное: изображения тигров и львов набивали воины для устрашения противника.'

const TEXT11 = 'Еще одна известная японская татуировка, значение которой имеет мифологическое происхождение. Змея сбрасывает кожу, что ассоциируется с обновлением и исцелением. Изображение змеи призвано защитить человека от болезней и сохранить здоровье крепким.'

const TEXT12 = 'В Японии каждому цветку приписывали особое значение: вишня – бренность сущего, хризантемы – власть императора, роза – гармония мироздания, орхидея – сила, гибискус – нежность. Благодаря символизму цветы являлись популярным изображением в мужских тату.';

const TEXT13 = 'Маски и демоны связаны с миром духов и их покровительством. Якудза и самураи набивали тату демонов, чтобы обрести их защиту. Сегодня такие рисунки тоже могут стать обережными символами для своего хозяина. Яркий и многогранный японский стиль, тату эскизы в котором мы сегодня посмотрели, считается одним из наиболее известных и выразительных в мировом искусстве татуировки. Но помните, что японское тату для себя следует выбирать внимательно, чтобы не попасть в немилость синтоистских богов.';

export const JapaneseTattooArticle: React.FunctionComponent = () => {
  return (
    <Body>
      <Info p1>5 дней назад • 5 минут на прочтение</Info>

      <Row>
        <TextBlock noMargin p1book>{TEXT1}</TextBlock>
        <Image src={japaneseTattooArticleData.images.img1} />
      </Row>

      <SubTitle small p2book>Ирэдзуми: история возникновения</SubTitle>
      <Row>
        <ColumnDesktop>
          <TextBlock p1book>{TEXT2}</TextBlock>
          <TextBlock p1book>{TEXT3}</TextBlock>
          <TextBlock p1book>{TEXT4}</TextBlock>
          <TextBlock p1book>{TEXT5}</TextBlock>
        </ColumnDesktop>
        <div>
          <Row>
            <Image src={japaneseTattooArticleData.images.img2} />
            <TextBlockMobile noMargin p1book>{TEXT2}</TextBlockMobile>
          </Row>
          <Row>
            <Image src={japaneseTattooArticleData.images.img3} />
            <TextBlockMobile noMargin p1book>{TEXT3}</TextBlockMobile>
          </Row>
          <Row>
            <Image src={japaneseTattooArticleData.images.img4} />
            <TextBlockMobile noMargin p1book>{TEXT4}</TextBlockMobile>
          </Row>
        </div>
      </Row>

      <SubTitle small p2book>Значение популярных японских тату</SubTitle>
      <TextBlock p1book>{TEXT6}</TextBlock>
      <TextBlock p1book>{TEXT7}</TextBlock>

      <RowStyle>
        <div>
          <SmallSubTitle p3book>Дракон</SmallSubTitle>
          <TextBlock noMargin p1book>{TEXT8}</TextBlock>
        </div>
        <Image src={japaneseTattooArticleData.images.img5} />
      </RowStyle>
      <RowStyle>
        <div>
          <SmallSubTitle p3book>Карп Кои</SmallSubTitle>
          <TextBlock noMargin p1book>{TEXT9}</TextBlock>
        </div>
        <Image src={japaneseTattooArticleData.images.img6} />
      </RowStyle>
      <RowStyle>
        <div>
          <SmallSubTitle p3book>Тигр и лев</SmallSubTitle>
          <TextBlock noMargin p1book>{TEXT10}</TextBlock>
        </div>
        <Image src={japaneseTattooArticleData.images.img7} />
      </RowStyle>
      <RowStyle>
        <div>
          <SmallSubTitle p3book>Змея</SmallSubTitle>
          <TextBlock noMargin p1book>{TEXT11}</TextBlock>
        </div>
        <Image src={japaneseTattooArticleData.images.img8} />
      </RowStyle>
      <RowStyle>
        <div>
          <SmallSubTitle p3book>Цветы</SmallSubTitle>
          <TextBlock noMargin p1book>{TEXT12}</TextBlock>
        </div>
        <Image src={japaneseTattooArticleData.images.img9} />
      </RowStyle>
      <RowStyle>
        <div>
          <SmallSubTitle p3book>Японские демоны</SmallSubTitle>
          <TextBlock noMargin p1book>{TEXT13}</TextBlock>
        </div>
        <Image src={japaneseTattooArticleData.images.img10} />
      </RowStyle>
    </Body>
  );
}
