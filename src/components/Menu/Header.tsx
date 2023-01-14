import Logo from './Logo';
import Menu from './Menu';
import BasButton from './Button';
import './li.css';
const Header=()=>{
    return(
<div className='Head'>
   
  <div className='logo'>
  <Logo />
  </div>
    <div className='menu'>
     <Menu />
     </div > 
   
<div  className='button'>
<BasButton />
  </div>
 
</div>
    )

}
export default Header;