import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login';
import Home from './Pages/Home';
import Admin from './Pages/Admin'
import Product from './Pages/Product';
import User from './Pages/User';
import AdminPage from './Pages/Admin/AdminPage';
import Detail from './Pages/Product/Detail';
import SignUp from './Pages/SignUp';
import NotFound from './Pages/NotFound';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='admin' element={<Admin />}>
          <Route index element={<AdminPage />} />
          <Route path='product' element={<Product />} />
          <Route path='product/:id' element={<Detail />} />

          <Route path='user' element={<User />} />

        </Route>
        <Route path={"*"} element={<NotFound />}></Route>

      </Routes>
    </div>
  );
}

export default App;
