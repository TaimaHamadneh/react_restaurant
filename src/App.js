import './App.css';
import Navbar  from './components/Navbar/Navbar';
import Header from './container/Header/Header'
import Order from './container/Order/Order';
import Menu from './container/Menu/Menu';

function App() {
  return (
    <div>
    <Navbar />
    <Header />
    <Order />
    <Menu />
    </div>
  );
}

export default App;
