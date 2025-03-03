const Navbar = (props) => {
    const { children } = props
    return (
    <div className='navbar'>
        <img src="/src/assets/logoUtama.png" alt="" />
        {children}
    </div>
    )
}

export default Navbar