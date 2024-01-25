export interface ResponseListSurah {
  code: number;
  message: string;
  data: DataListSurah[];
}
export interface DataListSurah {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: { [key: string]: string };
}

export interface ResponseDetailSurah {
  code: number;
  message: string;
  data: DataDetailSurah;
}
export interface DataDetailSurah {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: { [key: string]: string };
  ayat: Ayat[];
  suratSelanjutnya: NextPrevSurah | boolean;
  suratSebelumnya: NextPrevSurah | boolean;
}
export interface Ayat {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: { [key: string]: string };
}
export interface NextPrevSurah {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
}
