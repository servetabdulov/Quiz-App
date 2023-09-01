function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabikontrolet = function (cevap) {
  return cevap == this.dogruCevap;
};

sorular = [
  new Soru(
    "Hangisi dört tekerleklidir?",
    { a: "bisiklet", b: "araba", c: "motor" },
    "b"
  ),
  new Soru(
    "Hangisi iki tekerleklidir?",
    { a: "bisiklet", b: "araba", c: "traktör" },
    "a"
  ),
  new Soru(
    "Hangisi mevsim değildir?",
    { a: "yaz", b: "yağmur", c: "kış" },
    "b"
  ),
  new Soru(
    "Hangisi iki tekerleklidir?",
    { a: "bisiklet", b: "uçak", c: "gemi" },
    "a"
  ),
];
