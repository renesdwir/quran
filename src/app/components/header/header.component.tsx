import React from "react";

const Header = () => {
  return (
    <div className={`p-2 pb-10 sm:p-3 sm:pb-10  bg-yellow-300 relative`}>
      <span className={`absolute right-3`}>X</span>
      <h1 className={`text-lg font-bold`}>Berkah Quran</h1>
      <div className={`mt-3`}>
        <h1 className={`text-lg mt-0 font-medium`}>
          Aplikasi Al-Qur'an portable
        </h1>
        <p className={`text-sm`}>Akses Dengan Mudah Dimanapun & Kapanpun</p>
      </div>
      <div className={`text-xs text-center mt-3`}>
        <p>Rabu, 23 Agustus / 06 Ṣafar 1445 AH</p>
      </div>
      <div className={`bg-green-100 p-3 absolute left-5 right-5 -bottom-12`}>
        <p className={`text-sm`}>
          Barang siapa membaca satu huruf dari kitab Allah, maka dibalas satu
          kebaikan dan satu kebaikan dilipat gandakan menjadi sepuluh.
          <span className={`font-semibold`}>(H.R.At-Tirmidzi)</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
