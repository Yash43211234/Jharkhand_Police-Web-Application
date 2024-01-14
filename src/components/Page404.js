
import { Link } from "react-router-dom";
function Page()
{
    return(
        <div>
            
            <h1>404 page</h1>
            <p >This url is not present  </p>
            
        <span > <Link to="/home" > Go to Home page </Link></span>
        <div className='page'></div>
        </div>
    );
}
export default Page;