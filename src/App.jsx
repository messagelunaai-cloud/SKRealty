import React from 'react'
import Layout from './Layout'
import Home from './Home'
import EmailGate from './components/gate/EmailGate'

export default function App() {
  return (
    <EmailGate>
      <Layout>
        <Home />
      </Layout>
    </EmailGate>
  )
}