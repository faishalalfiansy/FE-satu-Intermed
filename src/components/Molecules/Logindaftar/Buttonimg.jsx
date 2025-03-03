import Buttons from "../../Atom/buttons"
const Buttongo = (props) => {
    const { typebutton, kelastombol, sumber,kelasimg, children } = props
    return (
        <Buttons typebutton={typebutton} kelastombol={kelastombol}>
            <img src={sumber} alt="" className={kelasimg}/>
            {children}
        </Buttons>
    )
}

export default Buttongo