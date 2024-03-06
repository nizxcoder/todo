// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import { Provider } from 'react-redux';
import TodoCotainer from './Component/TodoContainer';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <TodoCotainer />
      </Provider>
    </div>
  );
}

export default App;
