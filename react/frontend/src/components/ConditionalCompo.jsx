import Welcome from '../components/Welcome';
import Goodbye from '../components/Goodbye';
export default function ConditionalCompo({status})
{
   
    if(status == 'open')
    {   
       return <Welcome/>
    }   
    else 
    {
       return <Goodbye/>
    }
}