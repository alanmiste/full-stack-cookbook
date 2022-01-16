import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './hoc/Routes';
import RecipeProvider from './components/Context/context'
import 'bootstrap/dist/css/bootstrap.min.css';

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
