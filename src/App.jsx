import 'normalize.css';
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import AppContainer from './Elements/AppContainer';
import HomeCover from './Elements/HomeCover';
import MainSection from './Elements/MainSection';
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <AppContainer>
      <HomeCover/>
      <MainSection/>
      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
          />
    </AppContainer>
  )
}

export default App
