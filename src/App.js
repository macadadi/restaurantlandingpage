
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import { useSelector } from 'react-redux';
import Adminheader from './components/admin/Adminheader';
import Customer from './components/Customer'
import Productsfooter from './components/Productsfooter';




function App() {
const user = useSelector(state=>state.products.user)
 console.log()
  return (
    <div className="m-2">
   {/* Page Wrapper  */}
<div id="page-wrapper">
<Router>
  {!user ? <Adminheader />  :  <Customer />
 }

</Router>
<Productsfooter />
</div>
    </div>
  );
}

export default App;
