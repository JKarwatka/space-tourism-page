import type { NextPage } from 'next'
import Link from 'next/link'
import { BodyText, H1, H4, H5 } from '../../components/atoms'
import { colors } from '../../components/designSystem'
import { MainButton, PageBackground, PageContainer, ContentContainer, ButtonContainer } from './atoms'
import { homePageContent } from './content'

const HomePage: NextPage = () =>  (
  <PageBackground>
    <PageContainer>
      <ContentContainer>
        <H5 color={colors.TERNARY}>{homePageContent.UPPER_TITLE}</H5>
        <H1>{homePageContent.LOWER_TITLE}</H1>
        <BodyText color={colors.TERNARY}>{homePageContent.BODY}</BodyText>
      </ContentContainer>
      <MainButton>
        <Link href="/destination"><a><H4 color={colors.SECONDARY}>{homePageContent.BUTTON}</H4></a></Link>
      </MainButton>
    </PageContainer>
  </PageBackground>
)

export default HomePage
