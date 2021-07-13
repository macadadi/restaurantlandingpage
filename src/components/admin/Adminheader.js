import React from 'react'
import {Link, Route,Switch} from 'react-router-dom'
import adminaccounts from './Body/adminaccounts'
import Adminorders from './Body/Adminorders'
import Adminproducts from './Body/Adminproducts'
import Adminsales from './Body/Adminsales'
import Customers from './Body/Customers'

function Adminheader() {
    return (
        <nav>
            <div className='bg-info p-3'>admin</div>
            <div className ='d-flex row'>
  <div className="  col-md-2 d-flex flex-column  p-3 side-nave ">
         
<label className=""><Link to='/' >  <h3>Customers</h3></Link></label>
<label className=""><Link to='/orders' ><h3>Orders</h3></Link></label>
<label className=""><Link to='/products' ><h3>Products</h3></Link></label>
<label className=""><Link to='/sales' ><h3>Sales</h3></Link></label>
<label className=""><Link to='/accounts' > <h3>Account</h3></Link></label>
         
            </div>
            <div className='header-div col-md-10'>
                <Switch>
                    <Route exact path='/' component={Customers}/>
                    <Route path='/orders' component={Adminorders}/>
                    <Route path='/products' component={Adminproducts}/>
                    <Route path="/sales" component={Adminsales}/>
                    <Route path="/accounts" component={adminaccounts}/>
                    
                </Switch>
            </div>
            </div>
         
            <div className="bg-info mb-0 ">Footer</div>
        </nav>

    )
}

export default Adminheader
