import Navbar from "../components/Molecules/Navbar"
import Cardregister from "../components/Template/Cardregister"
import './Register.css'
const Register = () => {
    return (
        <>
        <Navbar/>
        <div className='bodyLogin'>
            <Cardregister/>
        </div>
        </>
    )
}

export default Register