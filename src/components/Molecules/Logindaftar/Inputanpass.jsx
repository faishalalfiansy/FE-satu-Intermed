import Input from "../../atom/input"
import Label from "../../atom/label"

const InputanPass = (props) => {
    const { namalabel, namaId, title, kelasinput,children } = props
    return (
        <div className="input-box">
            <Label namaLabel={namalabel}> {title} {children}</Label>
            <Input typeInput="password" kelasinput={kelasinput} namaId={namaId} required />
            <img className='eye' src="./src/assets/eye.png"/>
        </div>
    )
}

export default InputanPass