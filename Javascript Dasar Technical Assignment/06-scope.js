/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// Jawaban: Ada 3 variable scope pada Javascript, yaitu: Block Scope, Local Scope, dan Global Scope
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// Jawaban: Block Scope adalah variable yang dideklarasikan didalam curly bracket "{}" (blok), Local Scope adalah variable yang dideklarasikan didalam sebuah function dan hanya dapat diakses didalam function, Global Scope adalah variable yang dideklarasikan diluar dari sebuah function dan dapat diakses bebas
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript
/// Global Scope
let myDomicile = "Bitung";
/// Local and Block Scope
for (let i=1;i<=10;i++){
	let myAge = 22;
	}

/// WRITE YOUR ANALYSIS HERE

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// Mariah
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?
/// Jawaban: karena "name" yang di console merupakan parameter yang dimiliki fungsi printFirstName dan ada return method .split yang digunakan untuk mengubah string menjadi array.	

/// WRITE YOUR ANALYSIS HERE
///
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
