# __Day 1 - Command Line__

Mengenal perintah-perintah dasar pada CLI (Command Line Interface)

## __Apa itu command line interface__ ?


*Command line interface* atau yang biasa kita kenal cmd atau *command prompt* atau *terminal* adalah *software* atau antar muka untuk memberikan perintah-perintah dasar pada komputer kita. Biasanya kita mengoperasikan komputer seperti *browsing media*, mencari *file*, membuat *file* atau *folder*, dan lain-lain dengan GUI (*Graphical User Interface*) yang sudah disediakan pengembang Sistem Operasi seperti *Windows*, *Linux*, atau *OSX*. Namun pada dasarnya kita juga bisa melakukan operasi-operasi tersebut dalam suatu perintah yang kita kirimkan melalui cmd/*terminal*. Berikut ini beberapa contohnya:



### __Menuju folder/direktori tertentu__
Untuk menuju folder atau direktori tertentu bisa gunakan perintah *__cd__* atau kepanjangan dari *__Change Directory__*

```js
    // Menuju Desktop
    $ cd Desktop

    // Menuju ke direktori parent (sebelumnya)
    $ cd ..
```

### __Mengetahui alamat dari direktori yang sedang dibuka__
Terkadang kita butuh tahu sedang dimana posisi terminal kita berjalan. Perintah untuk fungsi ini yaitu *__pwd__* atau kependekan dari *__path of working directory__*

```js
    $ pwd
    /home/users
    // sedang berada di folder home/users
```

### __Mengetahui daftar isi dari sebuah direktori/folder__
Kamu bisa gunakan perintah *__ls__* atau *__dir__* . contohnya sebagai berikut :

```js
    $ ls 
    Document Desktop Image index.html

    $ dir
    Document Desktop Image index.html 
```

### __Membuat folder baru__
Perintahnya adalah *__mkdir__* atau singkatan dari *__make directory__*. contohnya sebagai berikut :

```js
    // membuat folder baru bernama new-folder
    $ mkdir new-folder

    // mengecek apakah sudah berhasil buat folder baru
    $ ls
    new-folder ... ...  
```

### __Membuat *file* baru__
Gunakan perintah *__touch__* untuk membuat file baru

```js
    // membuat file index.html
    $ touch index.html

    // mengecek apakah sudah berhasil buat file baru
    $ ls 
    index.html ... ... 
```

## __Software terminal / command line yang direkomendasikan__
Untuk OS Windows, terminal bawaannya adalah command prompt atau cmd yang relatif kurang nyaman untuk dipakai dalam tahap development. Oleh karena itu direkomendasikan untuk install terminal di bawah ini agar lebih optimal dalam mengerjakan project.

- Cmder, link download: https://cmder.net/cmder
- Git bash,link download: https://git-scm.com/downloads, Git bash biasanya ter-install jika kita meng-install git di pc/laptop kita.
