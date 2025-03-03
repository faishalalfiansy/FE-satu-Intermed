import Buttongo from "./Buttonimg";
import Option from "../../atom/Option";
import Input from "../../atom/input";
import Label from "../../atom/label";
const Inputnomor = (props) => {
    const { sumber,kelasimg, nama, idselect } = props;
    return (
        <>
        <div className="konten-input1">
            <Label htmlFor="nomor">No. Hp<span>*</span></Label>
        <div className="box-nomor">
            <div className="subone">
                <Buttongo typebutton="submit" kelastombol="lkode" sumber={sumber} kelasimg={kelasimg} />
            </div>
            <div className="subtwo">
                <Option nama={nama} idselect={idselect}>
                <option value="1">+62</option>
                <option value="2">+33</option>
                <option value="3">+44</option>
                </Option>
            </div>
            <div className="subtree">
                <Input typeInput="text" kelasinput="input-nomor" namaId="telfon"/>
            </div>
        </div>
        </div>
        </>
    )
}

export default Inputnomor