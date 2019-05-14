import React, { Component } from 'react';
import './NavMenu.css';

class NavMenu extends Component {
    constructor(props){
        super(props)
        this.state=({
            list:'off',
        })
    }

  
    functionDrop=()=>{
        if(this.state.list==='off'){
            this.setState({
                list:'on'
            })
        }
        if(this.state.list==='on'){
         this.setState({
             list:'off'
         })
     }
    }
 
    render() { 
       let linksMarkup=this.props.links.map ((link, index)=>{
           
           return (
            <li key='index' className="menu__list-item">
            <a  className="menu__link "  href={link.link}>
            {link.label}</a></li>
                    
            );
        });

        let linksMarkup2=this.props.souMenu.map ((link, index)=>{
            return (
            <li  key='index' className="menu__list-item">
            {/* linkMarkup */}<a className="menu__link " href={link.link}>  {link.label}</a>
            </li>
                    
            );

       
        });

        return (
            <nav className="menu">

            <div className="menu__right">
                <ul className="menu__list">
                 {linksMarkup}
                    <li onClick={this.functionDrop} className="menu__list-item "><a className="menu__link menu__link--active"  href="#">Services</a>
                        <ul className={this.state.list} id="drop-menu">
                        {linksMarkup2}
					    </ul>
                    </li>
                </ul>
            </div>
        </nav>
   
          );
    }
}
 
export default NavMenu;