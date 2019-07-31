import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/block-content'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query TermsPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)terms/" }) {
      title
      _rawBody
    }
  }
`

const TermsPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data.page

  if (!page) {
    throw new Error(
      'Missing "Terms and Conditions" page data. Open the studio at http://localhost:3333 and add "Terms" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={page.title} />
      <Container>
        <h1 className={responsiveTitle1}>{page.title}</h1>
        <BlockContent blocks={page._rawBody || []} />
      </Container>
    </Layout>
  )
}
TermsPage.defaultProps = {
  data: {
    page: {
      title: 'No title'
    }
  }
}
export default TermsPage
