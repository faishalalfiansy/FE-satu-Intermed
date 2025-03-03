import React, { useState } from 'react';
import Navbar from '../Molecules/Navbar';

const Navberanda = () => {
    // State untuk mengatur apakah menu dropdown terbuka atau tertutup
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    // Fungsi untuk toggle menu dropdown
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
        <>
      <div>
        <Navbar>
          <div className='pilmenu'>
            <ul>
              <li><a href="/beranda">Kategori</a></li>
            </ul>
  
            {/* Gambar Avatar, klik untuk toggle dropdown */}
            <img
              src="/src/assets/Avatar.png"
              alt="Avatar"
              onClick={toggleMenu}
              className="avatar-img"
            />
          </div>
  
          {/* Gambar menu burger */}
          <img src="/src/assets/burgerIcon.png" alt="burger" className='burger'/>
  
          {/* Menu dropdown, hanya tampil ketika isMenuOpen true */}
          {isMenuOpen && (
            <div className='sub-menu-wrap'>
              <div className='subdiv'>
                <a href="">Profil Saya</a>
              </div>
              <hr />
              <div className='subdiv'>
                <a href="">Kelas Saya</a>
              </div>
              <hr />
              <div className='subdiv'>
                <a href="">Pesanan Saya</a>
              </div>
              <hr />
              <div className='exit'>
                <a href="">Keluar</a>
                <img src="/src/assets/exit.png" alt="Exit" />
              </div>
            </div>
          )}
        </Navbar>
      </div>
      </>
    );
  }
  
  export default Navberanda;