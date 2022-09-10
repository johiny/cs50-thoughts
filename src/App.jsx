import 'normalize.css';
import './index.css'
import AppContainer from './Elements/AppContainer';
import HomeCover from './Elements/HomeCover';
import Thoughts from './Elements/Thoughts';
import Filters from './Elements/Filters';
import {ThoughtsProviderAndController} from './Elements/ThoughtsProviderAndController'
function App() {

  return (
    <AppContainer>
      <HomeCover/>
      <ThoughtsProviderAndController>
      <Filters/>
      <Thoughts/>
      </ThoughtsProviderAndController>
    </AppContainer>
  )
}

export default App
