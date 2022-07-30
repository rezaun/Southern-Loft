
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import Additem from './Components/AddInventory/Additem';
import Header from "./Components/Shared/Header/Header"
import SignIn from './Components/SignUp/SignIn/SignIn';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Details from './Components/Inventory/Details/Details';
import Manageitems from './Components/Inventory/Manageinventoy/Manageitems';
import Footer from './Components/Shared/Header/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Blog from './Components/Blog/Blog';
import Myitem from './Components/Inventory/Myitem';
import Career from './Components/Career/Career';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';

function App() {
  return (
    <div>
       <MessengerCustomerChat
    pageId="110957717361438"
    appId="319626130268710"
   
  />,
     <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/career" element={<Career />}></Route>
        <Route path='/inventory/:Inventoryid' element={<RequireAuth>
          <Details />
        </RequireAuth>}></Route>
        <Route path='/manage' element={<RequireAuth><Manageitems /></RequireAuth>
          }></Route>
          
          <Route path='/myitem' element={<Myitem />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/additem' element={   <Additem />  }></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
