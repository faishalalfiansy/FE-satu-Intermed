import Cardkelas from "/src/components/Molecules/Minicard/Cardkelas";
import Hero from "/src/components/Molecules/Minicard/Hero";
import Buttons from "/src/components/Atom/Buttons";
const Isiberanda = () => {
  return (
    <div className="container">
      <section className="hero-image">
        <Hero
          klshero="hero-text"
          isisatu="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
          isidua="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
        >
          <Buttons>Temukan Video Course untuk Dipelajari!</Buttons>
        </Hero>
      </section>

      <section className="sec-1">
        <section className="sub-judul">
          <h3>Koleksi Video Pembelajaran Unggulan</h3>
          <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        </section>
      </section>

      <section className="sec-2">
        <a href="" id="pil" className="sec-pilihan">
          Semua Kelas
        </a>
        <a href=""className="sec-pilihan">Pemasaran</a>
        <a href=""className="sec-pilihan">Desain</a>
        <a href=""className="sec-pilihan">Pengembangan Diri</a>
        <a href=""className="sec-pilihan">Bisnis</a>
      </section>
      <div className="cardbatas">
      <Cardkelas
          sumber="/src/assets/card1.jpg"
          childrenone="IT Fullstack Developer"
        />
        <Cardkelas
          sumber="/src/assets/card2.jpg"
          childrenone="UI/UX Designer"
        />
        <Cardkelas
          sumber="/src/assets/card3.jpg"
          childrenone="Pemasaran Digital"
        />
        <Cardkelas
          sumber="/src/assets/card4.jpg"
          childrenone="Pengembangan Diri"
        />
        <Cardkelas
          sumber="/src/assets/card5.jpg"
          childrenone="Bisnis Digital"
        />
        <Cardkelas
          sumber="/src/assets/card6.jpg"
          childrenone="Pemasaran Digital"
        />
        <Cardkelas
          sumber="/src/assets/card7.jpg"
          childrenone="Pengembangan Diri"
        />
        <Cardkelas
          sumber="/src/assets/card8.jpg"
          childrenone="Bisnis Digital"
        />
        <Cardkelas
          sumber="/src/assets/card9.jpg"
          childrenone="Pemasaran Digital"
        />
      </div>
      
      <section className="news-image">
        <Hero
          klshero="isi-news"
          idisisatu="newsletter"
          idp="pnews"
          isisatu="NEWSLETTER"
          isidua="Mau Belajar Lebih Banyak?"
        >
          <p>
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik di VBelajar.id
          </p>
          <section className="news-email">
            <input type="text" placeholder="Masukan Emailmu" />
            <Buttons>Subscribe</Buttons>
          </section>
        </Hero>
      </section>
    </div>
  );
};

export default Isiberanda;
