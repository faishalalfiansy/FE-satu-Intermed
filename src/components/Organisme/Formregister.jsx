import Inputan from '../Molecules/Logindaftar/Inputan'
import Inputanpass from '../Molecules/Logindaftar/Inputanpass'
import Buttonvsatu from '../Molecules/Logindaftar/Buttonvsatu'
import Lupapass from '../Molecules/Logindaftar/Lupapass'
import Atau from '../Molecules/Logindaftar/Atau'
import Buttongo from '../Molecules/Logindaftar/Buttonimg'
import Inputnomor from '../Molecules/Logindaftar/Inputnomor'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Formregister = () => {
  const navigate = useNavigate();
  const klik = (path) => {
    navigate(path)
  }
    return (
      <div className='body-input'>
      <div className='box-input'>
        <Inputan namaLabel="email" kelasinput="input-field" namaId="nama" title="Nama Lengkap"><span>*</span></Inputan>
        <Inputan namaLabel="email" kelasinput="input-field" namaId="email" title="E-mail"><span>*</span></Inputan>
        <Inputnomor sumber="/src/assets/logoIndonesia.png" kelasimg="idn" nama="kode" idselect="kode"/>
        <Inputanpass namaLabel="password" kelasinput="input-field" namaId="password" title="Kata Sandi"><span>*</span></Inputanpass>
        <Inputanpass namaLabel="password" kelasinput="input-field" namaId="passwordre" title="Konfirmasi Kata Sandi"><span>*</span></Inputanpass>
      </div>
      <Lupapass children="Lupa Password?"/>
      <div className='box-submit'>
        <Buttonvsatu kelasdiv="input-box" kelastombol="masuk" typebutton="submit" klik={() => klik('/login')}> <Link to="/login">Daftar</Link></Buttonvsatu>
        <Buttonvsatu kelasdiv="input-box" kelastombol="daftar" typebutton="submit" klik={() => klik('/login')}><Link to="/login">Masuk</Link></Buttonvsatu>
      </div>
      <Atau children="atau" />
      <div className='social'>
        <Buttongo typebutton="submit" kelastombol="google" sumber="/src/assets/logoGoogle.png " kelasimg="logoG">
          <p>Daftar dengan Google</p>
        </Buttongo>
      </div>
    </div>
    )
}

export default Formregister