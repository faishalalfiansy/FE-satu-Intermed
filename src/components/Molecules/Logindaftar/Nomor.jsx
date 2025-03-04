import Buttongo from "/src/components/Molecules/Logindaftar/Buttonimg"
import Label from "/src/components/atom/Label"
const Nomor = (props) => {
    const { } = props
    return (
    <>
      <Label htmlFor="nomor">Nomor Telepon</Label>
      <Buttongo typebutton="submit" kelastombol="ikode" sumber="/src/assets/logoIndonesia.png" kelasimg="idn"/>
    </>
    )
}