import { Link } from "react-router-dom";
function Page()
{
    return(
        <div>
            
            <h1>404 page</h1>
            <p>This url is not present  </p>
            <Link to="/home"> Go to Home page </Link>

        </div>
    );
}
export default Page;