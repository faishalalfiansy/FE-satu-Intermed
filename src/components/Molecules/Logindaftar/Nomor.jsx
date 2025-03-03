import Buttongo from "./Buttonimg"
import Label from "../../atom/label"
const Nomor = (props) => {
    const { } = props
    return (
    <>
      <Label htmlFor="nomor">Nomor Telepon</Label>
      <Buttongo typebutton="submit" kelastombol="ikode" sumber="/src/assets/logoIndonesia.png" kelasimg="idn"/>
    </>
    )
}