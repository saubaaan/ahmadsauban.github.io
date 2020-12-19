/*----------------------------------------------------*/
/*	Author   : Al Muhdil Karim
    Site     : https://almudhilkarim.com
    github   : https://github.com/jasonvortech/
    telegram : @rocknroot
    this template is used for learning purposes on basic web development on karims library 
    https://almuhdilkarim.com
------------------------------------------------------ */

//=============================
// Algoritma fungsi utama
//=============================

// Proses-1. Menetapkan konstanta menu navigasi dengan menggunakan nama kelas
const menunav =  document.getElementsByClassName("menunav");

// Proses-2. Menunggu event, jika element yang mempunyai class menunav di click lalu m,engeksekusi fungction 'transit'
for (var i = 0; i < menunav.length; i++) {
    menunav[i].addEventListener('click', transit, false);
}

//=============================
// Algoritma function transit
//=============================
function transit() {
    // Proses-1. menetapkan variable dengan setiap elemen yang mempunyai class css 'list'
    let getclass =  document.getElementsByClassName("list");

    // Proses-2. Memanipulasi setiap element class 'list'
    for (var i = 0; i < getclass.length; i++) {
        // 2.1 Menghapus seluruh class 'list-show' yang tedapat didalam semua tag yang mempunyai class 'list' 
        getclass[i].classList.remove("list-show");
        // 2.1 menambahkan class 'list-show' pada semua element yang mempunyai class 'list''
        getclass[i].classList.add("list-hide");
    }

    // Proses-3. Mengambil attribut data menu untuk mendapatkan id class yang ingin dimanipulasi
    let getid = this.getAttribute("data-menu");
    // Proses-4. Menghapus class 'last-hide' dari id yang didapatkan dalam proses ke 3
    document.getElementById(getid).classList.remove("list-hide");
    // Proses-5. Menambahkan class 'last-show' dari id yang didapatkan dalam proses ke 3
    document.getElementById(getid).classList.add("list-show");
}


  


