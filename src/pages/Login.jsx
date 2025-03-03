import Navbar from "../components/Molecules/Navbar"
import Cardlogin from "../components/Template/Cardlogin"
import './Login.css'
const Login = () => {
    return (
        <>
        <Navbar/>
        <div className='bodyLogin'>
            <Cardlogin/>
        </div>
        </>
    )
}

export default Login