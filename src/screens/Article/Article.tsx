import * as React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import { useRouter } from 'next/router'

import { Body } from '../../components/Body'
import { BreadCrumb } from '../../components/BreadCrumb'
import { HeaderMenuButton } from '../../components/Header'
import { Text } from '../../components/Text'
import { getPageNames } from '../../utils/getLocalizedText';
import { PageName } from '../../types/pageName.enum';
import { ChooseTattooArticle } from '../../articles/ChooseTattooArticle';
import { MyTattooArticle } from '../../articles/MyTattooArticle';
import { HealthTattooArticle } from '../../articles/HealthTattooArticle';
import { JapaneseTattooArticle } from '../../articles/JapaneseTattooArticle';
import { chooseTattooArticleData, myTattooArticleData, healthTattooArticleData, japaneseTattooArticleData } from '../../articles/types';
import Head from 'next/head';

interface IArticleProps {
  name?: string;
  id?: string;
}

const BreadCrumbContainer = styled.div`
  margin-top: 40px;
`;

const Title = styled(Text)`
  max-width: 600px;
  margin-bottom: 24px;

  @media (min-width: 721px) {
    margin-top: 24px;
  }
`;

export const Article: NextPage<IArticleProps> = ({ name, id }) => {
  const { locale, reload, push, pathname, query } = useRouter();

  const pageNames = getPageNames(locale);

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

  let article = null;

  switch (id) {
    case chooseTattooArticleData.id: {
      article = <ChooseTattooArticle />;
      break;
    }
    case myTattooArticleData.id: {
      article = <MyTattooArticle />;
      break;
    }
    case healthTattooArticleData.id: {
      article = <HealthTattooArticle />;
      break;
    }
    case japaneseTattooArticleData.id: {
      article = <JapaneseTattooArticle />;
      break;
    }
  }


  return (
    <Body logoUri='../logo.png' selectedButton={HeaderMenuButton.ARTICLES}>
      <Head>
        <link rel="canonical" href={`/articles/${query.id}`} />
      </Head>
      <BreadCrumbContainer>
        <BreadCrumb items={breadCrumbs} />
      </BreadCrumbContainer>
      <Title h2>
        {name}
      </Title>
      {article}
    </Body>
  )
}

export async function getStaticProps(context) {
  const props: IArticleProps = {
    name: undefined,
    id: undefined,
  };
  
  switch (context.params.id) {
    case chooseTattooArticleData.id: {
      props.name = chooseTattooArticleData.name;
      props.id = chooseTattooArticleData.id;
      break;
    }
    case myTattooArticleData.id: {
      props.name = myTattooArticleData.name;
      props.id = myTattooArticleData.id;
      break;
    }
    case healthTattooArticleData.id: {
      props.name = healthTattooArticleData.name;
      props.id = healthTattooArticleData.id;
      break;
    }
    case japaneseTattooArticleData.id: {
      props.name = japaneseTattooArticleData.name;
      props.id = japaneseTattooArticleData.id;
      break;
    }
  }

  return {
    props
  }
}
