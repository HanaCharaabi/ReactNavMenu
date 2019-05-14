import React, { Component } from 'react';
import './App.css'
import NavMenu from './NavMenu.js'

class App extends Component {
  state = {  }
  
  render() { 
      let links=[
         {label:'Home', link:'#home',active:true} ,
         {label:'About', link:'#about'},
         {label:'Contact', link:'#contact'},
        ]
        let souMenu=[
         {label:'For entrepreneurs', link:'#for-entrepreneurs'} ,
         {label:'For students', link:'#for-students'},
         {label:'For hobbyistes', link:'#for-hobbyistes'},
        ]
					
  
    return ( 
        <div className="container center">
        <NavMenu links={links} souMenu={souMenu}/>
       </div>
     );
  }
}
 
export default App;