import Miniatasone from "./Miniatasone";
import Miniatastwo from "./Miniatastwo";
import Minibawah from "./Minibawah";

const Cardkelas = (props) => {
  const { sumber, childrenone } = props;
  return (
    
      <section className="card">
        <img className="img-judul" src={sumber} alt="" />
        <section className="card-content">
          <Miniatasone
            kls="card-isi"
            childrenone={childrenone}
            childrentwo="Mulai transformasi dengan instruktur Profesional, harga yang terjangkau, dan terpercaya"
          />
          <Miniatastwo sumber="/public/instruktur1.png" />
        </section>
        <section className="card-akhir">
        <Minibawah
          bintang1="/public/full-star.png"
          bintang2="/public/full-star.png"
          bintang3="/public/full-star.png"
          bintang4="/public/setengah-star.png"
          bintang5="/public/kosong-star.png"
          children1="4.5(86)"
          children2="Rp 300K"
        />
        </section>
      </section>
  );
};

export default Cardkelas;