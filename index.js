/**
 * Odevde bizden node js kullanarak bir dort islem modulu yapilmasi istendi
 * Bu odevde dort islem icin birer fonksiyon ve yazdirma icin ayri birer fonksiyon yazacagimiz
 * bu fonksiyonlarimizi uygulamamizin ana dosyasina require ve module.exports kullanarak cekecegiz
 * /*  */


//Import ettigimiz fonksiyonlari bir objeye atiyoruz
const calCulate = require("./functions")


calCulate.bolme(8, 4)
calCulate.carpma(9, 2)
calCulate.cikarma(1952, 25)
calCulate.toplama(25, 6)