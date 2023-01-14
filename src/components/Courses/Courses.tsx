import './style.css';
import c1 from '../../images/course1.jpg';
import c2 from '../../images/course2.jpg';
import c3 from '../../images/course3.jpg';
import c4 from '../../images/course4.jpg';
import c5 from '../../images/course5.jpg';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
const Courses=()=>
{
    return(
        <>
       <div id="Head1"> <h1 >COURSE ANNOUNCEMENT 
        </h1></div>
        <div    className='Cards'>
            {/* ----------------- c1 */}    <br />
       <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{}}
       component="img"
        image={c1}
        alt="course1"
        >
        </CardMedia>
        <CardContent>
            <Typography variant='body1' >
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Repudiandae, magnam officiis odio necessitatibus voluptatum 
doloribus impedit error ex labore totam repellat perferendis 
voluptate esse nisi reiciendis molestias eum eius eos.
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant='outlined' color='success' size='large'> Apply </Button>
        </CardActions>
       </Card>
       <br /><br />
       {/* --------------------- c2 */}
       <Card sx={{ maxWidth: 345 }}>
        <CardMedia 
       component="img"
        image={c2}
        alt="course1"
        >
        </CardMedia>
        <CardContent>
            <Typography variant='body1' >
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Repudiandae, magnam officiis odio necessitatibus voluptatum 
doloribus impedit error ex labore totam repellat perferendis 
voluptate esse nisi reiciendis molestias eum eius eos.
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant='outlined' color='success' size='large'> Apply </Button>
        </CardActions>
       </Card>
       <br />
{/*------------------------------ c3 */}
       <Card sx={{ maxWidth: 345 }}>
        <CardMedia 
       component="img"
        image={c3}
        alt="course1"
        >
        </CardMedia>
        <CardContent>
            <Typography variant='body1' >
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Repudiandae, magnam officiis odio necessitatibus voluptatum 
doloribus impedit error ex labore totam repellat perferendis 
voluptate esse nisi reiciendis molestias eum eius eos.
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant='outlined' color='success' size='large'> Apply </Button>
        </CardActions>
       </Card>
       <br />
       {/* -------------------------------- c4 */}
       <Card sx={{ maxWidth: 345 }}>
        <CardMedia 
       component="img"
        image={c4}
        alt="course1"
        >
        </CardMedia>
        <CardContent>
            <Typography variant='body1' >
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Repudiandae, magnam officiis odio necessitatibus voluptatum 
doloribus impedit error ex labore totam repellat perferendis 
voluptate esse nisi reiciendis molestias eum eius eos.
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant='outlined' color='success' size='large'> Apply </Button>
        </CardActions>
       </Card>
       <br />
     {/* ---------------------------- c5 */}
       <Card sx={{ maxWidth: 345 }} id='car'>
        <CardMedia 
       component="img"   
        image={c5}
        alt="course1"
        >
        </CardMedia>
        <CardContent>
            <Typography variant='body1' >
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Repudiandae, magnam officiis odio necessitatibus voluptatum 
doloribus impedit error ex labore totam repellat perferendis 
voluptate esse nisi reiciendis molestias eum eius eos.
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant='outlined' color='success' size='large'> Apply </Button>
        </CardActions>
       </Card>
       </div>
       <br />
        </>
    )
}
export default Courses;