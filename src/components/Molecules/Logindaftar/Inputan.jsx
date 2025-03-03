import Input from "../../atom/input";
import Label from "../../atom/label";

const Inputan = (props) => {
    const { namaLabel, namaId, title, kelasinput,children} = props;
    return (
        <div className="input-box">
            <Label namaLabel={namaLabel}> {title} {children}</Label>
            <Input typeInput="text" kelasinput={kelasinput} namaId={namaId} required />
        </div>
    )
}

export default Inputan