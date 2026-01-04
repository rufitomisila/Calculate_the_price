  
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


