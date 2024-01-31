import React from 'react'
import applicantDetailsLogo from '../images/person_search.png'
import resourceHireCycleLogo from '../images/account_tree.png'
import { NavLink} from 'react-router-dom'

const Navbar = () => {

  const navLinkStyle = ({isActive})=>{
    return{
      textDecoration: isActive?'none':'none',
      color: isActive? '#27b357':'black', 
    };
  };

  return (
    <div className='navbar'>
        <div className="left">
            <img src={applicantDetailsLogo} alt='logo'></img>
            <p>Applicant Details</p>
        </div>
        <div className="vertical"></div>
        
        <div className="right ">
            <img src={resourceHireCycleLogo} alt='logo'></img>
            <p><NavLink style={navLinkStyle} to='/resource-hire-cycle'>Resource Hire Cycle</NavLink></p>
        </div>
        
    </div>
  )
};

export default Navbar;