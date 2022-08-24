import 'normalize.css';
import './index.css'
import AppContainer from './Elements/AppContainer';
import HomeCover from './Elements/HomeCover';
import Thoughts from './Elements/Thoughts';

function App() {

  return (
    <AppContainer>
      <HomeCover/>
      <Thoughts/>
    </AppContainer>
  )
}

export default App
