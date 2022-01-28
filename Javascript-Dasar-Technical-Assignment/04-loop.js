/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let i=1;i<=100;i++){
	let divideFactor=0;
	for (let j=1;j<=i;j++){
		if (i%j==0){
			divideFactor+=1;
		}
	}
	if (divideFactor==2){
		console.log(i);
	}
}


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE
let divideFactor;
let i=1;
while (i<=500) {
	divideFactor=0;
	let j=1;
	while (j<=i){
		if (i%j==0) {
			divideFactor+=1;
		}
		j++;
	}
	if (divideFactor==2) {
		primeCounter+=1;
		if (primeCounter==50){
	    fiftiethPrime = console.log(i);
		}
	}
	i++;
}


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
let i=1
do {
    if (i%2==1){
        oddCounter+=1;
        if (oddCounter==50){
            fiftiethOdd = console.log(i);
        }
    }
    i++;
} while (i<=100);


/*Expected Result

1.    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
2.    fiftiethPrime should be 229
3.    fiftiethOdd should be 99*/

