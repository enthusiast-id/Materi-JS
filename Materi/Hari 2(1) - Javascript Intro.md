# __Hari 2 – Javascript Intro__
 
Javascript merupakan salah satu bahasa pemrograman yang terpopuler di dunia. Javascript membuat aplikasi web menjadi interaktif tanpa reload halaman. Hampir semua browser modern yang kita ketahui dapat menjalankan javascript agar website yang ditampilkan lebih menarik.

Menjalankan Javascript 
Ada bermacam cara untuk menjalankan kode javascript yang kita buat, di antaranya:

* Menjalankan javascript di console browser
* Menjalankan javascript di tools online seperti repl.it
* Menjalankan javascript dengan nodejs
  
Pada materi ini kita akan mencoba untuk menjalankan script dengan nodejs.

Nodejs adalah software berbasis pemrograman javascript yang dijalankan di sisi server. Jika biasanya javascript kita kenal erat kaitannya dengan client/browser tapi dengan nodejs ini kita bisa membangun server menggunakan bahasa javascript.

Install Nodejs
Pertama-tama tentu kita harus menginstall terlebih dahulu nodejs di komputer kita. Berikut ini link untuk download nodejs (disarankan memilih versi LTS 32 Bit). Untuk OS Windows dan macOs tinggal diikuti saja instalasinya sampai selesai, sedangkan untuk Ubuntu 18.04 kamu bisa install mengikuti tutorial dari digitalocean.

Untuk mengecek apakah instalasi nodejs sudah berhasil kita bisa jalankan script di terminal kita:

```js
$ node -v 
v10.16.1
$ npm -v 
6.9.0
```

dengan perintah tersebut, diketahui saat ini terinstall node dengan versi 10 dan npm versi 6.

# __Hello World__

Untuk menjalankan javascript dengan nodejs mari kita coba dengan menuliskan script di sebuah file index.js.

Buatlah file dengan nama index.js kemudian tulis code di dalam file tersebut seperti berikut:

```js
var sayHello = "Hello World!" 
console.log(sayHello)
```

kemudian simpan file tersebut (save). Setelah itu kita bisa menjalankan script pada index.js tersebut dengan memberikan perintah seperti berikut pada terminal:

```js
$ node index.js
secara otomatis pada terminal kita akan muncul “Hello World!” . (Selamat Anda telah berhasil menjalankan program pertama Anda 😁)
```

Demikian cara untuk menjalankan Javascript dengan nodejs.

# __Data Type__

Data Type atau dalam bahasa indonesia Tipe Data adalah sekumpulan informasi yang memiliki nilai dan karakteristik tertentu. Beberapa contoh tipe data pada javascript di antaranya:

* Number : tipe data angka
* String : tipe data berupa text atau kumpulan karakter, biasanya string dibungkus dalam tanda petik ganda (double quote) atau tanda petik tunggal (single quote).
* Boolean: tipe data dengan nilai true atau false
* Float : tipe data pecahan
* Object : Objek adalah sebuah variabel yang menyimpan nilai (properti) dan fungsi (method)

Sekarang Bagaimana kita mengetahui tipe data dari sebuah Variable?

```js
console.log(typeof(true))   //Boolean
console.log(typeof(2.14))   //Float
console.log(typeof("2"))    //String 
console.log(typeof(2))      //Number 
console.log(typeof({}))     //Object
```

# __Variable__

Variable adalah suatu blok data untuk menampung sekumpulan data dengan berbagai tipe data apapun. Dengan variable kita bisa menyimpan suatu nilai untuk kemudian kita olah kembali pada program kita. Untuk deklarasi variable dalam javascript kita bisa gunakan sintaks var, let atau const lalu diikuti nama variablenya.

Perbedaan yang paling mendasar adalah bahwa let dan var dapat ubah isinya kembali sementara const tidak bisa. Ini menjadikan const pilihan terbaik untuk variabel yang tidak perlu diubah, dan itu akan mencegah kesalahan seperti merubah data yang tidak disengaja.

<img src="https://i.postimg.cc/Jn9zH5Gb/const-vs-let-vs-var.png" alt="Your image title" width="450"/>

```js
var name = "John"           //String
let angka = 12              //Number
const todayIsFriday = false //Boolean
var car = {                 //Object 
    type:"Fiat", 
    model:"500", 
    color:"white"
};

console.log(name) // "John"
console.log(angka) // 12
console.log(todayIsFriday) // false
console.log(car.type) // Fiat

Waspadai pendeklarasian variable yang tidak bernilai !

var items
console.log(items) // Undefined
```


# __Operator__

Operator adalah karakter khusus yang merepresentasikan sebuah tindakan. Operator terbagi ke dalam beberapa jenis:

#### 1. Operator Aritmatika Operator yang melibatkan operasi matematika seperti tambah, kurang, kali, bagi.
* Tambah (+)
* Kurang (–)
* Kali (*)
* Bagi (/)
* Modulus (%)
Modulus adalah sisa bagi. Contohnya 5%3 hasilnya adalah 2, 100%5 hasilnya 0.

#### 2. Operator Assignment (=), Operator untuk mendaftarkan atau meng-assign suatu nilai ke dalam suatu variable
```js
var angka 
angka = 10 // Contoh assignment variable angka dengan nilai 10
```
#### 3. Operator Perbandingan, Operator yang membandingkan suatu nilai dengan nilai yang lain. Hasil dari perbandingan ini akan dikembalikan dalam tipe data boolean **true** atau **false**.
   
* Equal Operator (==)
```js
var angka = 100
console.log(angka == 100) // true
console.log(angka == 20) // false
```

* Not Equal ( != )
```js
var sifat = "rajin"
console.log(sifat != "malas") // true
console.log(sifat != "bandel") //true 
```

* Strict Equal ( === ) Selain membandingkan dua nilai nya, strict equal juga membandingkan tipe datanya apakah sama atau tidak
```js  
var angka = 8
console.log(angka == "8") // true, padahal "8" adalah string.
console.log(angka === "8") // false, karena tipe data nya berbeda
console.log(angka === 8) // true 
```

* Strict not Equal ( !== ) Kebalikan dari strict equal.
```js
var angka = 11
console.log(angka != "11") // false, padahal "11" adalah string
console.log(angka !== "11") // true, karena tipe datanya berbeda
console.log(angka !== 11) // false
```

* Kurang dari & Lebih Dari ( <, >, <=, >=)
```js
var number = 17
console.log( number < 20 ) // true
console.log( number > 17 ) // false
console.log( number >= 17 ) // true, karena terdapat sama dengan
console.log( number <= 20 ) // true
```

#### 4. Operator Kondisional, Operator yang mengkombinasikan dua nilai kebenaran . Terdapat operator AND (&&) dan OR (||)
   
* OR ( || )
```js
console.log(true || true); // true
console.log(true || false); // true
console.log(true || false || false); // true
console.log(false || false); // false
```

* AND ( && )
```js
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true && true); // false
console.log(true && true && true); // true 
```