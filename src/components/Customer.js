import React from 'react'
import Leftnav from './Leftnav';
import {Route,Switch} from 'react-router-dom'
import Cartdetail from './cart/Cartdetail';
import Payment from './cart/Payment';
import Bagscontainer from './Bagscontainer';
import Typical from 'react-typical'

function Customer() {
    return (
        <div>
  <Leftnav />
  {/* Banner */}
<div className="d-flex">
<div className=" col-md-3 advert-div "> 
<div className="">
<h5><Typical
        steps={['Hello am experinced in React', 2000, 
        'Hello am experinced in Redux', 2000,'Hello am experinced in Typescript', 2000,'Hello am experinced in Bootstrap',
         2000,' am currently looking for a new opportunity', 10000,]}
        loop={Infinity}
        wrapper="b"
      /></h5>

    <div>contact me on:</div>
<p>
  Email : macadadi36@gmail.com
  Tel: +254 710770278
 </p>
</div>
</div>
 <div className="col-md-9">
 <Switch>
    <Route exact path='/' component={Bagscontainer} />
    <Route exact path="/cart" component={Cartdetail}/>
    <Route exact path='/payment' component={Payment} />
    <Route exact path='/:name' component={Bagscontainer} /> 
  </Switch>
 </div>
</div>

        </div>
    )
}

export default Customer
