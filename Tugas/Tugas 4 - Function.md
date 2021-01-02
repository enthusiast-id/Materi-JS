# __Tugas 4 – Function__

Pada tugas kali ini buatlah folder baru (Tugas 4 – Function) yang berisikan file dengan nama function.js . Simpan folder tugas ini di dalam folder repository project yang dikerjakan pada Folder yang telah di buat kemarin LatihanJS.

**No. 1** 

Tulislah sebuah function dengan nama teriak() yang mengembalikan nilai “Halo Enthusiast” yang kemudian dapat ditampilkan di console.

```js
/*
    Tulis code function di sini
*/
 
console.log(teriak()) // "Halo Enthusiast" 

```
**No. 2**

Tulislah sebuah function dengan nama kalikan() yang mengembalikan hasil perkalian dua parameter yang di kirim.

```js
/*
    Tulis code function di sini
*/
 
var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48
```


**No. 3** 

Tulislah sebuah function dengan nama introduce() yang memproses paramater yang dikirim menjadi sebuah kalimat perkenalan seperti berikut: “Nama saya [name], umur saya [age] tahun, alamat saya di [address], dan saya punya hobby yaitu [hobby]!”

```js
/* 
    Tulis kode function di sini
*/
 
var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!" 
```
Clue : Gunakan String Literal untuk mencetak variable :)


**No.4**

Diberikan sebuah function reverseWord(kata) yang menerima satu parameter berupa string. Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

```js
function reverseWord(kata) {
  // you can only write your code here!
}

// TEST CASES
console.log(reverseWord('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(reverseWord('John Doe')); // eoD nhoJ
console.log(reverseWord('I am a bookworm')); // mrowkoob a ma I
console.log(reverseWord('Coding is my hobby')); // ybboh ym si gnidoC
console.log(reverseWord('Super')); // repuS
```

**No.5**

Diberikan sebuah function reverseWord(kata) yang menerima satu parameter berupa string. Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ" dan
Jika hanya parameter atau 1 arguments yang disi maka function akan me-return "Kedua Parameter harus di isi"

```js
function joinWord(kata1,kata2) {
  // you can only write your code here!
}

// TEST CASES
console.log(joinWord('Udin', 'Sedunia')); // Udin Sedunia
console.log(joinWord('John','Doe')); // John Doe
console.log(joinWord('JavaScript', 'EZ')); // JavaScript EZ
console.log(joinWord('Code for', 'Living')); // Code for Living
console.log(joinWord('Super')); // Kedua Parameter Harus di isi
```

**No.6**

Diberikan sebuah function isPalindrome(kata) yang menerima satu parameter berupa string. Function akan mengecek apakah kata tersebut palindrome? Jika iya return true, jika tidak return false

```js
function isPalindrome(kata){

}

console.log(joinWord('level')); // true
console.log(joinWord('Civic')); // true
console.log(joinWord('JavaScript')); // false
console.log(joinWord('Living')); // false
console.log(joinWord('Madam')); // true
```

Jika sudah selesai dikerjakan, silahkan push hasil pekerjaan Anda ke repository Github masing-masing (gunakan repository project LatihanJS).
