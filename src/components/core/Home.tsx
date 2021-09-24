import Layout  from './Layout'
import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const state = useSelector(state => state)
  return (
    <Layout>
      Home {JSON.stringify(state)}
    </Layout>
  )
}

export default Home

