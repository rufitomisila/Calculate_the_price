        let number = 123;
        const boolean = true;

        const srtNumber = String(number);
        const strBoolean = boolean.toString(boolean);

        console.log(number);
        console.log(srtNumber);
        console.log(boolean);
        console.log(strBoolean);

        number = 12222
        console.log(number);

        

        // Gemini 1
        let umur = 17;
        umur += 1;
        console.log(umur);
        const umurString = String(umur)
        console.log(umurString)

        // Gemini 2 Array
        const hobi = ["Makan", "Tidur", "Mandi"];
        console.log(hobi);
        hobi.push("Ngoding")
        console.log("My hobi gweh adalah", hobi[3]);

        //Gemini 3 Looping
        for(let i = 0; i < hobi.length; i++) {
                console.log("Hobi gweh adalah", hobi[i])
        }

        //Gemini 4 If Else
        const kumpulanAngka = [10, 8, 12, 26, 4, 11];
        for(let i = 0; i < kumpulanAngka.length; i++) {
                if(kumpulanAngka[i] > 10) {
                        console.log(`Angka ${kumpulanAngka[i]} terlalu besar`)
                }
        }

        // Gemini 4 Object
        const dataDiri = {
                nama : "Rufi Tomisila",
                umur : 17,
                sekolah : "m3m",
                skill : ["HTML", "CSS", "JS DASAR"]
        }

        console.log(dataDiri.nama);


        // Gemini 5 study case
        const stokBuah = [11, 0, 12, 21, 0, 0, 0, 0];
        for(let i = 0; i < stokBuah.length; i++) {
                if(stokBuah[i] > 0) {
                        console.log('stok buah tersedia')
                } else {
                        console.log('stok buah habis')
                }
        }

        // Gemini 6 study case
        const durasiParkir = [1, 3, 0.5, 4, 0.3, 2];
        for(let i = 0; i < durasiParkir.length; i++) {
                if(durasiParkir[i] > 1) {
                        console.log(`Mobil ke ${[i]} bayar Rp.10.000`)
                } else {
                        console.log(`Mobil ke ${[i]} Bayar Rp.5000`)
                }
        }

        // Gemini 7 study case
        const tabunganHarian = [10000, 20000, 15000, 5000];
        let totalSaldo = 0;
        for(let i = 0; i < tabunganHarian.length ; i++ ) {
                totalSaldo = totalSaldo + tabunganHarian[i] 
        }
        console.log(totalSaldo)

        // Gemini 8 study case
        const hargaPesanan = [1000, 3000, 15000, 12000, 11500];
        let totalPendapatan = 0;

        for( let i = 0; i < hargaPesanan.length; i++) {
                if(hargaPesanan[i] > 10000) {
                        console.log(`pesanan dengan harga ${hargaPesanan[i]}, pesanan mahal`)
                } else {
                        console.log(`pesanan dengan harga ${hargaPesanan[i]}, pesanan murah`)
                }

                totalPendapatan = totalPendapatan + hargaPesanan[i];
        }
        console.log(`Total pendapatan ${totalPendapatan}`);


        //Gemini 9 Document Object Model 
        const inputHarga = document.getElementById("inputNumber");
        const tombol = document.querySelector("button");
        const list = document.getElementById("list");

        const daftarHarga = [];

        tombol.addEventListener("click", function(){
                const harga = Number(inputHarga.value);

                if(harga > 0) {
                        daftarHarga.push(harga)
                }
                list.innerHTML = "";

                let total = 0;

                for(let i = 0; i < daftarHarga.length; i++) {
                        total = total + daftarHarga[i];
                        list.innerHTML += `<p>Pesanan ${i+1}: Rp.${daftarHarga[i]} </p>`
                }

                list.innerHTML += `Total harga keseluruhan adalah Rp.${total}`;
                inputHarga.value = "";
        })

