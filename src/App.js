import './App.css';
import NavigationBar from './components/Navbar';
import Intro from './components/Intro';
import './style/landingPage.css'
import List from './components/List';

function App() {
  return (
    <div>
      <div className='bgImg'>
        <NavigationBar />
        <Intro />
      </div>
    <div className='List'>
      <List />
    </div>
    </div>
  )
}

export default App;
