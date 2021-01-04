# __Hari 2 – Javascript – String and Conditional__

## A. String Method

Mengenal lebih dalam tentang tipe data string pada javascript

String adalah tipe data yang berisi karakter-karakter dibungkus dalam tanda petik ("" atau '' ). Karakter-karakter pada suatu string dapat diakses dengan menggunakan indeks atau posisi karakter berada. Indeks pada string selalu mulai dari 0.
```js
var sentences = "Javascript" 
console.log(sentences[0]) // "J"
console.log(sentences[2]) // "v"
```
String pada javascript juga memiliki property dan methods tertentu. Property dan methods tersebut bisa kita gunakan dalam memanipulasi data agar sesuai dengan program yang kita inginkan.

String Properties 
**.length**
mengembalikan panjang atau jumlah karakter pada suatu string.
```js
var word = "Javascript is awesome"
console.log(word.length) // 21 
String Methods
.charAt([indeks])
```
Mengembalikan karakter pada indeks yang diinginkan
```js
console.log('i am a string'.charAt(3)); // 'm'
```

**.concat([string])**

Menggabungkan beberapa string dan mengembalikannya menjadi string baru.
```js
var string1 = 'good';
var string2 = 'luck';
console.log(string1.concat(string2)); // goodluck
.indexOf([string/karakter])
```
Mengembalikan indeks dari string/karakter yang dicari, yang pertama kali ditemukan, atau -1 apabila tidak ditemukan.
```js
var text = 'dung dung ces!';
console.log(text.indexOf('dung'));  // 0
console.log(text.indexOf('u'));     // 1
console.log(text.indexOf('jreng')); // -1
```

**.substring([indeks awal], [indeks akhir (optional)])**

Mengembalikan potongan string mulai dari indeks pada parameter pertama (indeks awal) sampai dengan indeks pada parameter kedua (indeks akhir). Bila parameter kedua tidak ditentukan, maka secara otomatis berakhir pada karakter terakhir. Karakter pada indeks yang ditentukan pada parameter kedua tidak diikutkan sebagai output.
```js
var car1 = 'Lykan Hypersport';
var car2 = car1.substr(6);
console.log(car2); // Hypersport
.substr([indeks awal], [jumlah karakter yang diambil (optional)])
```

Mendapatkan potongan string mulai dari indeks pada parameter pertama (indeks awal) dengan jumlah indeks pada parameter kedua (jumlah karakter). Bila parameter kedua tidak ditentukan, maka secara otomatis berakhir pada karakter terakhir. Karakter pada indeks yang ditentukan pada parameter kedua tidak diikutkan sebagai output.

```js
var motor1 = 'zelda motor';
var motor2 = motor1.substr(2, 2);
console.log(motor2); // ld
```

**.toUpperCase()**

Mengembalikan string baru dengan semua karakter yang diubah menjadi huruf kapital.
```js
var letter = 'This Letter Is For You';
var upper  = letter.toUpperCase();
console.log(upper); // THIS LETTER IS FOR YOU
```

**.toLowerCase()**

Mengembalikan string baru dengan semua karakter yang diubah menjadi huruf kecil
```js
var letter = 'This Letter Is For You';
var lower  = letter.toLowerCase();
console.log(lower); // this letter is for you
```

**.trim()**

Mengembalikan string baru yang sudah dihapus karakter whitespace (” “) pada awal dan akhir string tersebut.
```js
var username    = ' administrator ';
var newUsername = username.trim(); 
console.log(newUsername) // 'administrator'
```
Mengubah tipe data dari dan ke String
Di Javascript terkadang kita ingin mengubah sebuah data string menjadi tipe data lain atau sebaliknya. Contoh diperoleh data angka tapi dalam tipe data String maka kita dapat mengubah string tersebut menjadi tipe data angka.

**String([angka/array])**

Fungsi global String() dapat dipanggil kapan saja pada program JavaScript dan akan mengembalikan data dalam tipe data String dari parameter yang diberikan.

```js
var int  = 12;
var real = 3.45;
var arr  = [6, 7, 8];

var strInt  = String(int);
var strReal = String(real);
var strArr  = String(arr);

console.log(strInt);  // '12'
console.log(strReal); // '3.45'
console.log(strArr);  // '6,7,8'
```

**.toString()**

Mengonversi tipe data lain menjadi string. Bila data tersebut adalah array, setiap nilai akan dituliskan dan dipisah dengan karakter koma.
```js
var number = 21;
console.log(number.toString()); // '21'
var array = [1,2];
console.log(array.toString());  // '1,2'
```

**Number([String])**

Fungsi global Number() mengonversi tipe data string menjadi angka. Data yang diberikan pada parameter harus berupa karakter angka saja, dengan titik (separator) bila angka adalah bilangan desimal. Bila parameter berisi karakter selain angka dan/atau titik, Number() akan mengembalikan NaN (Not a Number).

```js
var number1 = Number("90");   // number1 = 90
var number2 = Number("1.23"); // number2 = 1.23
var number3 = Number("4 5");  // number3 = NaN
```

**parseInt([String]) dan parseFloat([String])**

Fungsi global parseInt([String]) dan parseFloat([String]) mengembalikan angka dari string. Bila angka adalah bilangan desimal maka gunakan parseFloat(), bila tidak bilangan dibelakang koma akan diabaikan.
```js
var int  = '89';
var real = '56.7';
var strInt_1 = parseInt(int);  // strInt_1 = 89
var strInt_2 = parseInt(real); // strInt_2 = 56
var strReal_1 = parseFloat(int); // strReal_1 = 89
var strReal_2 = parseFloat(int); // strReal_2 = 56.7
```
Referensi Tambahan : 
String by Mozilla Developer Network
JavaScript String Reference by W3School
JavaScript Type Conversion

sumber: github hacktiv8 phase 0 materials


## B. Conditional

Kondisional dengan if / else if / else 

Kondisional adalah sebuah metode yang melakukan pengecekan terhadap suatu pernyataan atau premis apakah bernilai benar atau tidak, jika benar maka akan menjalankan sebuah block code tertentu.

**Contoh 1 menjalankan kode jika premis bernilai true**
```js
if ( true ) {
    console.log("jalankan code")
}
```
**Contoh 2 kode tidak dijalankan jika premis bernilai false**
```js
if ( false ) {
    console.log("code tidak dijalankan")
}
```

**Contoh 3 Premis dengan perbandingan suatu nilai**
```js
var mood = "happy"
if ( mood == "happy" ) {
    console.log("hari ini aku bahagia!")
}
```

Di dalam kondisional dikenal juga dengan istilah branching atau percabangan. Dengan percabangan kita bisa mengecek nilai kebenaran dari berbagai premis yang kita sediakan. cara menambahkan kondisi atau premis lain dari premis pertamanya adalah dengan sintaks else . Contohnya ketika kita diminta untuk membeli telur dan buah ke minimarket oleh ibu kita maka akan banyak sekali kondisi atau kemungkinan yang terjadi dalam perjalanan kita membeli barang-barang tersebut di supermarket.

**Contoh 4 Branching sederhana**
```js
var minimarketStatus = "open"
if ( minimarketStatus == "open" ) {
    console.log("saya akan membeli telur dan buah")
} else {
    console.log("minimarketnya tutup")
}
```
Kondisi else di atas adalah kondisi selain minimarketStatus == "open" .

**Contoh 5 Branching dengan kondisi**
```js
var minimarketStatus = "close"
var minuteRemainingToOpen = 5
if ( minimarketStatus == "open" ) {
    console.log("saya akan membeli telur dan buah")
} else if ( minuteRemainingToOpen <= 5 ) {
    console.log("minimarket buka sebentar lagi, saya tungguin")
} else {
    console.log("minimarket tutup, saya pulang lagi")
}
```
contoh di atas kita memberikan kondisi tambahan yaitu jika minimarket akan buka kurang atau sama dengan 5 menit lagi maka saya akan menunggu.

Selain Branching atau percabangan, kondisional juga dapat memiliki sarang atau tumpukan yaitu terdapat kondisional di dalam sebuah kondisional.

**Contoh 6 Kondisional bersarang**
```js
var minimarketStatus = "open"
var telur = "soldout"
var buah = "soldout" 
if ( minimarketStatus == "open" ) {
    console.log("saya akan membeli telur dan buah")
    if(telur == "soldout" || buah == "soldout" ) {
        console.log("belanjaan saya tidak lengkap")    
    } else if( telur == "soldout") {
        console.log("telur habis")
    } else if ( buah == "soldout" ) {
        console.log("buah habis")
    }
} else {
    console.log("minimarket tutup, saya pulang lagi")
}
```
pada kondisi di atas minimarketnya sudah buka lalu cek kondisi selanjutnya cek apakah telur atau buah habis. Karena kondisinya adalah jika telur ATAU buah salah satunya ada yang soldout maka belanjaan saya lengkap. Demikian seterusnya akan mengecek kondisi-kondisi yang disediakan dalam logika program yang dibuat.

Kondisional dengan Switch Case 
Cara lain untuk melakukan pengecekan kondisi atau conditional adalah dengan switch case. Penggunaan switch case mirip seperti kita menyalakan tombol switch pada remote. Jika kondisi tombol yang dipijit adalah tombol dengan nomer tertentu maka akan menjalankan prorgram tertentu.

**Contoh 7 Kondisional dengan switch case**
```js
var buttonPushed = 1;
switch(buttonPushed) {
  case 1:   { console.log('matikan TV!'); break; }
  case 2:   { console.log('turunkan volume TV!'); break; }
  case 3:   { console.log('tingkatkan volume TV!'); break; }
  case 4:   { console.log('matikan suara TV!'); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }}
```
Pada kode di atas, switch akan mengevaluasi nilai buttonPushed jika case yang ditemui cocok dengan nilai yang diberikan maka kode pada case tersebut akan dijalankan sehingga pada console akan dimunculkan “matikan TV!“. Pada setiap case terdapat break yang berfungsi untuk menghentikan proses switch agar tidak menjalankan case yang lain. Juga terdapat default yaitu kondisi dimana tidak ditemukan case yang sesuai.