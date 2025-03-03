import Inputan from "../Molecules/Logindaftar/Inputan";
import Inputanpass from "../Molecules/Logindaftar/Inputanpass";
import Buttonvsatu from "../Molecules/Logindaftar/Buttonvsatu";
import Lupapass from "../Molecules/Logindaftar/Lupapass";
import Atau from "../Molecules/Logindaftar/Atau";
import Buttongo from "../Molecules/Logindaftar/Buttonimg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Formlogin = () => {
  const navigate = useNavigate();
  const klik = (path) => {
    navigate(path);
  };
  return (
    <div className="body-input">
      <div className="box-input">
        <Inputan namaLabel="email" kelasinput="input-field" namaId="email" title="E-mail">
          <span>*</span>
        </Inputan>
        <Inputanpass namaLabel="password" kelasinput="input-field" namaId="password" title="Kata Sandi">
          <span>*</span>
        </Inputanpass>
      </div>
      <Lupapass children="Lupa Password?" />
      <div className="box-submit">
        <Buttonvsatu kelasdiv="input-box masuk" kelastombol="masuk" typebutton="submit" klik={() => klik("/beranda")}>
          Masuk
        </Buttonvsatu>
        <Buttonvsatu kelasdiv="input-box daftar" kelastombol="daftar" typebutton="submit" klik={() => klik("/register")}>
          <Link to="/register">Daftar</Link>
        </Buttonvsatu>
      </div>
      <Atau children="atau" />
      <div className="social">
        <Buttongo typebutton="submit" kelastombol="google" sumber="/src/assets/logoGoogle.png " kelasimg="logoG">
          <p>Masuk dengan Google</p>
        </Buttongo>
      </div>
    </div>
  );
};

export default Formlogin;
