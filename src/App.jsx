import 'normalize.css';
import './index.css'
import AppContainer from './Elements/AppContainer';
import HomeCover from './Elements/HomeCover';
import Thoughts from './Elements/Thoughts';
import Filters from './Elements/Filters';
function App() {

  return (
    <AppContainer>
      <HomeCover/>
      <Filters/>
      <Thoughts/>
    </AppContainer>
  )
}

export default App
