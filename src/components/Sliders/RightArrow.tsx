
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React,{ useState } from 'react';
import image1 from '../../images/degreeDistribution.jpg';
import image2 from '../../images/computerLab.jpg';
import image3 from '../../images/orien.jpg';
import image4 from '../../images/entryExam.jpg';
 
 const RightArrow= ()=>
{
 
    let [count,upcount] = useState(0);
    const [allimage,setAllimage]= useState([image1,image2,image3,image4]);
    

return(
    <div>
                 <ArrowForwardIosIcon  onClick={()=>{
                    if(count < allimage.length-1)

                    upcount(count+1)
              
                    }} color='info' style={{fontSize:'3rem'}} id='A2' />
<h1>{count}</h1>
<br />
<button onClick={()=>{if(count>0)upcount(count-1)}}>Decreased value</button>
<br />
        <img src={allimage[count]} alt="images" />


    </div>
    );
}

export default RightArrow;