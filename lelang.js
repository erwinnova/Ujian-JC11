function lelang (menit){
    var output = 0;
    hargaBarang = 10000;
    for (var i = 1; i<=menit; i++){
        if(i % 4 === 0){
            output += Math.ceil(hargaBarang + (10000 * 10/100))
            hargaBarang = output;
        }else{
            output += Math.ceil(hargaBarang + (10000 * 20/100))
            hargaBarang = output;
        }
    }
    
    if (output < 30000000){
        console.log(`Menit ke ${i-1}, harga barang ${output}`)
    }else{
        console.log("Barang sudah terjual")
    }
}
console.log(lelang(49))