import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './hoc/Routes';
import RecipeProvider from './components/Context/context'

function App() {
  return (
    <div className="App">
      <RecipeProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </RecipeProvider>

    </div>
  );
}

export default App;
