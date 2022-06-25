import 'normalize.css';
import './index.css'
import AppContainer from './Elements/AppContainer';
import Logo from './Elements/Logo';
import Thoughts from './Elements/Thoughts';
import InsertThought from './Elements/InsertThought';
import Thought from './Elements/Thought';
function App() {

  return (
    <AppContainer>
      <Logo/>
      <Thoughts>
        <InsertThought/>
        <Thought/>
        <Thought/>
        <Thought/>
      </Thoughts>
    </AppContainer>
  )
}

export default App
