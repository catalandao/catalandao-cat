import Header from './Header'
import Head from './Head'
import Footer from './Footer'

const Page = ({ children, className }) => <>
  <Head />
  <Header />
  <article className={className}>
    {children}
  </article>
  <Footer />
</>

export default Page
