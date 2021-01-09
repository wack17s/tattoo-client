import * as React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import { useRouter } from 'next/router'

import { Body } from '../../components/Body'
import { BreadCrumb } from '../../components/BreadCrumb'
import { HeaderMenuButton } from '../../components/Header'
import { getPageNames } from '../../utils/getLocalizedText';
import { PageName } from '../../types/pageName.enum';
import { ChooseTattooArticle } from '../../articles/ChooseTattooArticle';
import { MyTattooArticle } from '../../articles/MyTattooArticle';
import { HealthTattooArticle } from '../../articles/HealthTattooArticle';
import { JapaneseTattooArticle } from '../../articles/JapaneseTattooArticle';
import { chooseTattooArticleData, myTattooArticleData, healthTattooArticleData, japaneseTattooArticleData } from '../../articles/types';
import { Tags } from '../../seo/Tags';
import { articleTagData } from '../../seo/articleTagData';

interface IArticleProps {
  name?: string;
  id?: string;
}

const BreadCrumbContainer = styled.div`
  margin-top: 40px;
`;

const Title = styled.h1`
  font-family: 'Rubik';
  font-size: 42px;
  line-height: 56px;

  @media (max-width: 720px) {
    font-size: 32px;
    line-height: 40px;
  }
  max-width: 600px;
  margin-bottom: 24px;

  @media (min-width: 721px) {
    margin-top: 24px;
  }
`;

export const Article: NextPage<IArticleProps> = ({ id }) => {
  const { locale, reload, push, query } = useRouter();

  const pageNames = getPageNames(locale);

  let article = null;
  let name = '';
  let description = '';
  let image = undefined;

  switch (id) {
    case chooseTattooArticleData.id: {
      article = <ChooseTattooArticle />;
      name = chooseTattooArticleData.name;
      description = chooseTattooArticleData.placeholder;
      image = chooseTattooArticleData.images.preview;

      break;
    }
    case myTattooArticleData.id: {
      article = <MyTattooArticle />;
      name = myTattooArticleData.name;
      description = myTattooArticleData.placeholder;
      image = myTattooArticleData.images.preview;

      break;
    }
    case healthTattooArticleData.id: {
      article = <HealthTattooArticle />;
      name = healthTattooArticleData.name;
      description = healthTattooArticleData.placeholder;
      image = healthTattooArticleData.images.preview;

      break;
    }
    case japaneseTattooArticleData.id: {
      article = <JapaneseTattooArticle />;
      name = japaneseTattooArticleData.name;
      description = japaneseTattooArticleData.placeholder;
      image = japaneseTattooArticleData.images.preview;

      break;
    }
  }

  const breadCrumbs = [
    {
      label: pageNames[PageName.ARTICLES],
      onPress: () => {
        push('/articles');
      }
    },
    {
      label: name,
      onPress: () => {
        reload();
      }
    },
  ];

  return (
    <Body selectedButton={HeaderMenuButton.ARTICLES}>
      <Tags
        pathname={`/articles/${query.id}`}
        hideUa
        title={articleTagData[id].title}
        description={articleTagData[id].description}
        ogTitle={name}
        ogDescription={description}
        iamgeUrl={image}
      />
      <BreadCrumbContainer>
        <BreadCrumb items={breadCrumbs} />
      </BreadCrumbContainer>
      <Title>
        {name}
      </Title>
      {article}
    </Body>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      id: context.params.id,
    }
  }
}
