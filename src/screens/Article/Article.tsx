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
import { ChooseTattooArticle } from '../../articles/ChooseTattoo';
import { chooseTattooArticleData } from '../../articles/types';

interface IArticleProps {
  name?: string;
  id?: string;
  component?: any;
}

const BreadCrumbContainer = styled.div`
  margin: 40px 0px 0px 16px;
`;

export const Article: NextPage<IArticleProps> = ({ name, component }) => {
  const { locale, reload, push } = useRouter();

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

  return (
    <Body logoUri='../logo.png' selectedButton={HeaderMenuButton.ARTICLES}>
      <BreadCrumbContainer>
        <BreadCrumb items={breadCrumbs} />
      </BreadCrumbContainer>
      <br></br>
      <Text h2>
        {name}
      </Text>
      <br></br>
      <div className='article' style={{ maxWidth: 700 }} dangerouslySetInnerHTML={{ __html: component }}></div>
    </Body>
  )
}

export async function getStaticProps(context) {
  const props: IArticleProps = {
    component: undefined,
    name: undefined,
    id: undefined,
  };
  
  switch (context.params.id) {
    case chooseTattooArticleData.id: {
      props.name = chooseTattooArticleData.name;
      props.component = ChooseTattooArticle;
      props.id = chooseTattooArticleData.id;
    }
  }

  return {
    props
  }
}
