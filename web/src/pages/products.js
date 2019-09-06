import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/block-content'
import Container from '../components/container'
import Filter from '../components/filter'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query ProductsPageQuery {
    page: sanityPage(title: { eq: "Products" }) {
      title
      _rawBody
    }
  }
`

const ProductsPage = props => {
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
      'Missing "Products" page data. Open the studio at http://localhost:3333 and add "Products" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={page.title} />
      <Container>
        <h1 className={responsiveTitle1}>{page.title}</h1>
        <BlockContent blocks={page._rawBody || []} />
        <Filter />
      </Container>
    </Layout>
  )
}
ProductsPage.defaultProps = {
  data: {
    page: {
      title: 'Products'
    }
  }
}
export default ProductsPage
