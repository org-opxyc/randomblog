import React, { useState } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

import getCookie from '../utils/getcookie'
import RedirectionInfo from '../components/redirection-info'

const COOKIE_NAME = '_redirect_to'
const SESSION_STORAGE_KEY = '_redirected'

export default function Root({ data }) {
  // redirect to appripariate page
  const [redir, setRedir] = useState(false)

  const redirected = sessionStorage.getItem(SESSION_STORAGE_KEY)
  let redirect_to = getCookie(COOKIE_NAME)
  
  if (redirected === null && redirect_to !== '') {
    setRedir(true)
    sessionStorage.setItem(SESSION_STORAGE_KEY, true)
    document.cookie = COOKIE_NAME + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    window.location.href = redirect_to
  }

  const posts = data.allContentfulBlogPost.nodes
  const [author] = data.allContentfulPerson.nodes

  return (
    <Layout>
      <Hero
        image={author.heroImage.gatsbyImageData}
        title={author.name}
        content={author.shortBio.shortBio}
      />
      <ArticlePreview posts={posts} />

      {redir ? <RedirectionInfo /> : null}
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          shortBio
        }
        title
        heroImage: image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
      }
    }
  }
`
