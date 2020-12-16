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
import { ChooseTattooArticle } from '../../articles/ChooseTattoo/ChooseTattoo';
import { ChooseTattooId, ChooseTattooName } from '../../articles/ChooseTattoo/params';

interface IArticleProps {
  name?: string;
  id?: string;
  component?: any;
}

const BreadCrumbContainer = styled.div`
  margin: 40px 0px 0px 16px;
`;

export const Article: NextPage<IArticleProps> = ({ name, component }) => {
  const { locale } = useRouter();

  const pageNames = getPageNames(locale);

  return (
    <Body logoUri='../logo.png' selectedButton={HeaderMenuButton.ARTICLES}>
      <BreadCrumbContainer>
        <BreadCrumb pageNames={[pageNames[PageName.ARTICLES], name]} />
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
    case ChooseTattooId: {
      props.name = ChooseTattooName;
      props.component = ChooseTattooArticle;
      props.id = ChooseTattooId;
    }
  }

  return {
    props
  }
}
