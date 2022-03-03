import './App.css';
import Header from './container/Header';
import ProductListening from './container/ProductListening';
import ProductDetails from './container/ProductDetails';
import { BrowserRouter , Routes , Route} from 'react-router-dom'
function App() {
  return (
    <div className="App"> 
      <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListening />}/>
        <Route path="/product/:productId" element={<ProductDetails />}/>
        <Route>404 Not Found!</Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
