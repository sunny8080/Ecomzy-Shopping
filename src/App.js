import Cart from './pages/Cart';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calTotalAmt } from './redux/slices/CartSlice';
import { getProducts } from './redux/slices/ProductSlice';
import Modal from './components/Modal';

function App() {
  const { items } = useSelector(state => state.cart);
  const { isOpen } = useSelector(state => state.modal);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(calTotalAmt());
  }, [items, dispatch]);

  useEffect(() => {
    // dispatch2(getProducts('random parameter'));
    dispatch(getProducts());
  }, [dispatch])

  return (
    <div className=" ">

      {isOpen && <Modal />}
      <div>
        <NavBar />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;
