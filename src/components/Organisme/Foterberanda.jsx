import Logol from "/src/assets/logoUtama.png"
import Panah from "/src/assets/icon-panah.png"
const Footerberanda = () => {
  return (
    <>
        <div className="footer">
          <div className="container-footer">
            <section className="isi-footer">
              <section className="isi1-footer">
                <img src={Logol} alt="" />
                <p>
                  <span>
                    Gali Potensi Anda Melalui Pembelajaran Video di Vbelajar.id
                  </span>
                </p>
                <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                <p>+62 878-8873-5133</p>
              </section>
              <section className="isi2-footer">
                <section className="pilihan-footer">
                  <li>
                    <span>Kategori</span>
                  </li>
                  <li>
                    <a href="">Digital & Teknologi</a>
                  </li>
                  <li>
                    <a href="">Pemasaran</a>
                  </li>
                  <li>
                    <a href="">Manajemen Bisnis</a>
                  </li>
                  <li>
                    <a href="">Pengembangan Diri</a>
                  </li>
                  <li>
                    <a href="">Desain</a>
                  </li>
                </section>
                <section className="pilihan-footer">
                  <li>
                    <span>Perusahaan</span>
                  </li>
                  <li>
                    <a href="">Tentang Kami</a>
                  </li>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                  <li>
                    <a href="">Kebijakan Privasi</a>
                  </li>
                  <li>
                    <a href="">Ketentuan Layanan</a>
                  </li>
                  <li>
                    <a href="">Bantuan</a>
                  </li>
                </section>
                <section className="pilihan-footer">
                  <li>
                    <span>Komunitas</span>
                  </li>
                  <li>
                    <a href="">Tips Sukses</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                </section>
                <section className="panah">
                  <img src={Panah} alt="" />
                  <img src={Panah} alt="" />
                  <img src={Panah} alt="" />
                </section>
              </section>
            </section>
            <hr />
            <section className="akhir-footer">
              <section>
                <p>&copy;2024 PT Noriba Goberkah Jaya Tbk</p>
              </section>
              <section className="icon-footer">
                <img src="/public/icon1.png" alt="" />
                <img src="/public/icon2.png" alt="" />
                <img src="/public/icon3.png" alt="" />
                <img src="/public/icon4.png" alt="" />
              </section>
            </section>
          </div>
        </div>
    </>
  );
};

export default Footerberanda;