import './style.css';
import { MdOutlineFacebook } from "react-icons/md";
const Footer =()=>
{
    return(
        <div className='foot'> 
            <p>for further information :</p>
<div  className='try' >
        
           
                      <br />
        <div   className='f1'>
             <div><a  id='a1' href="/"><span></span>Youtube</a></div>             
             <div><a id='a2' href="/"><span><MdOutlineFacebook style={{fontSize:'x-large'  }}/></span>Facebook</a></div>
             <div><a  id='a3' href="/">Twitter</a></div>        
        </div>
      
</div>
</div>
    );
}

export default Footer;