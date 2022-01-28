/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/* Jawaban
- Type Error => error yang disebabkan karena menggunakan value diluar dari type yang diharapkan

- Reference Error => error yang disebabkan karena menggunakan variable  yang belum dideklarasikan

- Range Error => error yang disebabkan karena value yang diterapkan tidak dalam rentang value yang sudah ditetapkan

- Syntax Error => error yang disebabkan karena kesalahan dalam penulisan code */

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

/*Jawaban
1. console.log(salaryWithVar) akan menampilkan undefined dan console.log(salaryWithConst) akan menampilkan error
2. termasuk dalam kategori Reference Error
3. terjadi error karena variable yang ingin ditampilkan console.log(salaryWithConst) ditulis setelahnya */
