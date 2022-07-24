import store from '../configs/store'
import Layout from '../containers/Layout'
import '../styles/globals.css'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Layout>
  <Component {...pageProps} />
  </Layout>
  </Provider>
  )
}

export default MyApp
