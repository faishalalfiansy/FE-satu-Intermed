import Logo from "/src/assets/logoUtama.png"
const Navbar = (props) => {
    const { children } = props
    return (
    <div className='navbar'>
        <img src={Logo} alt="" />
        {children}
    </div>
    )
}

export default Navbar