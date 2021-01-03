# __Hari 1 – Git__
Mengenal version control Git dan version control platform Github


## __Menginstalasi Git__
Sebelum menggunakan git tentunya anda diharuskan menginstall git terlebih dahulu
[Klik disini](https://git-scm.com/downloads)

Setelah selesai menginstall lakukan konfigurasi menggunakan terminal/cmd 

```js
Set username:
git config --global user.name "FIRST_NAME LAST_NAME"

Set email address:
git config --global user.email "MY_NAME@example.com"
```

[![contoh-perubahan-git.png](https://i.postimg.cc/YCC8CCNn/contoh-perubahan-git.png)](https://postimg.cc/PP016hRY)

Menu Git di VSCode

## __Membuat project Git dan mengelolanya__
Pastikan sudah install git di komputer anda. Jika belum terinstall silakan ikuti langkah-langkahnya di sini: https://www.digitalocean.com/community/tutorials/how-to-contribute-to-open-source-getting-started-with-git

### __Membuat Repository Baru__
Repository atau repo di Github biasa disebut dengan project. Berikut langkah-langkah untuk membuat repository baru:

- Setelah login anda akan masuk ke halaman dashboard, disana anda akan berisi beberapa list repository yang anda miliki dan beberapa hal lainnya, jika anda pengguna baru maka tidak akan ada list repositorynya. Di halaman tersebut anda akan melihat tombol new berwarna hijau disebelah kiri page. Klik tombol tersebut

![Github After Login](https://i.postimg.cc/RZ9f4KsV/Screen-Shot-2021-01-02-at-10-24-52.png)
[](https://postimg.cc/ykQWTgCw)

- Pada halaman create Repository, isi kolom *__Repository Name__* dengan nama yang anda inginkan contoh : __Latihan-JS__
- Pada kolom yang berisikan *__Public__* dan *__Private__* itu disebut sebagai *Visibility*, "Public" yang berarti repo Anda akan terlihat oleh orang dari mana saja walaupun dia tidak memiliki akun github, sedangkan "Private" artinya repo yang akan kita buat bersifat rahasia, hanya Anda dan orang yang Anda beri akses saja yang bisa membukanya.
- Untuk sekarang itu dulu, dan langsung klik tombol *__Create Repository__*  berwana hijau dibawah


[![Create New Repo](https://i.postimg.cc/nc1rK52p/Screen-Shot-2021-01-02-at-10-39-49.png)](https://postimg.cc/GHHbdX65)

- Jika berhasil maka akan diarahkan ke halaman repository yang sudah kita buat tadi, tapui ini masih kosong,
- selanjutnya dihalaman ini di bagian atas terdapat 2 pilihan SSH atau HTTPS, pilih saja yang HTTPS. Selanjutnya klik tombol copy yang disebelah kanan

[![SS-WEEK-1-GIT.png](https://i.postimg.cc/D0jDn7F7/SS-WEEK-1-GIT.png)](https://postimg.cc/zHhpkZVQ)

- Setelah itu menuju ke terminal atau cmd. Arahkan menuju folder dimana anda ingin menyimpan repository yang sudah Anda buat. Berikan perintah git clone <link_anda_yang_barusan_dicopy> (tanda <> hanyalah sebagai penanda template tidak usah ditulis di perintah cmd)

```cmd
    $ git clone <your_repository_link_url>
```

- Jika sudah berhasil diclone maka akan ditemukan folder dengan nama repository di Github. Cara mengeceknya dengan perintah “ls” atau “dir”.

```cmd
    $ ls
    Latihan-JS
```

### __Mengupload perubahan project dengan git push__
Ketika kita sudah berhasil clone repository kita di Github maka tentu kita ingin melakukan update atau penambahan code pada project kita. Agar perbaruan yang kita simpan di local (komputer) kita dapat kita perbaharui juga di repository Github maka kita bisa lakukan dengan git push. Berikut langkah-langkahnya:

- Ketika kita sudah memberikan perubahan terhadap suatu file atau membuat folder-folder baru pada folder project kita maka cara mengecek status perbaruan adalah dengan *__git status__*

```cmd
    $ git status
    On branch master
    Your branch is up to date with 'origin/master'.
    
    Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)
    
    modified:   README.md
    
    no changes added to commit (use "git add" and/or "git commit -a") 
```

- Setelah git status maka akan ditampilkan list file yang “modified” atau “untracked”. “modified” artinya adalah kita mengubah file yang sebelumnya ada sedangkan “untracked” artinya file tersebut sama sekali baru di repository. Dalam contoh di atas terdapat perubahan pada file “README.md”.
- Untuk menaikkan perubahan (stage) yang kita buat maka berikan perintah git add

```cmd
    $ git add README.md

    // Jika ada terdapat banyak file dan kita ingin naikkan semuanya maka perintahnya: 
    $ git add .  
```

- Sekarang perubahan tadi sudah pada tahap “staged”. jika kita cek status nya lagi maka akan didapati hal yang berbeda:

```cmd
    $ git status 
    On branch master
    Your branch is up to date with 'origin/master'.
    
    Changes to be committed:
    (use "git reset HEAD <file>..." to unstage)
    
    modified:   README.md 
```

- Selanjutnya adalah memberikan laporan atau commit terhadap perubahan yang kita buat dengan git commit.

```cmd
    $ git commit -m "Pesan saya: Mengubah README.md"
```

- tanda “-m” pada perintah commit artinya kita ingin memberikan pesan atau laporan terhadap perubahan yang sudah dibuat. Dalam hal ini laporannya adalah “Pesan saya: mengubah README.md”
- Selanjutnya adalah push untuk mengirim /upload perubahan yang ada di local computer kita menuju repository yang ada di Github. Jika kita berada di branch bernama master maka perintahnya adalah:

```cmd
    $ git push origin master 
```

Jika branch yang sedang kita miliki di local adalah branch lain selain master maka cara push nya adalah

```cmd
    $ git push origin <nama_branch>
```

Jika langkah tersebut sudah maka kita sudah berhasil mengupload perubahan yang kita buat di repository kita. 🥂

## __Git branch (optional)__
Membuat branch baru dan melakukan merge request

### __Clone repository__
Terlebih dahulu lakukan clone terhadap repository project.

```cmd
    $ git clone https://github.com/some-project 
    $ cd some-project
```

Catatan: 

Link https di atas hanyalah contoh link dari sebuah repository. Link https tersebut bisa diperoleh di halaman github pada bagian clone.

### __Buat branch baru__
Setelah di-clone dan masuk ke folder project nya, buatlah branch baru . (myname hanyalah contoh nama branch, kita bisa mengubah sesuai nama yang diinginkan)

```cmd
    $ git branch myname
    $ git checkout myname 
```

maka sekarang kita sudah berada di branch baru dan dapat mulai melakukan pekerjaan kita.

Catatan:

*__myname__* hanya contoh , silakan sesuaikan sendiri nama branch masing-masing.

### __Push ke branch__
Setelah pekerjaan selesai, kita akan melakukan upload atau push ke branch kita sendiri.

```cmd
$ git add . 
$ git commit -m "some message"// push ke branch 
$ git push origin myname
```



### __Menghapus Branch__
Ketika ingin menghapus branch yang tidak digunakan 

```cmd
// menghapus branch lokal
$ git branch -d <nama_branch> 

// menghapus branch yang sudah ada di repo
git push origin --delete <remoteBranchName>

``` 





### __Git pull__
Mengambil commit yang terupdate remotely

```cmd
// remote updated repo
$ git pull

``` 

Catatan:

*__"some message"__* hanyalah contoh pesan atau komentar pada sebuah commit. Silahkan isi dengan jenis update yang dikerjakan.

