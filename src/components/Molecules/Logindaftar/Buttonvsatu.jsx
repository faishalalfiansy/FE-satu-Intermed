import Buttons from "../../atom/Buttons";

const Buttonvsatu = (props) => {
    const { typebutton, children, kelastombol, kelasdiv, klik} = props
    return (

        <div className={kelasdiv}>
            <Buttons typebutton={typebutton} kelastombol={kelastombol} klik={klik}>{children}</Buttons>
        </div>

    )
}

export default Buttonvsatu
