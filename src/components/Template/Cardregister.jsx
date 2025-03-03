import Judul from '../Molecules/Logindaftar/Judul'
import Formregister from '../Organisme/Formregister'

const Cardregister = () => {
    return (
        <div className="cardss">
                <Judul kelasjudul="login-header" titleHeader="Pendaftaran Akun" titleSubjudul="Yuk, daftarkan akunmu sekarang juga!"/>
                <Formregister/>
        </div>
    )
}
export default Cardregister