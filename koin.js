function cekkoin(param){
    var koin = [25,10,5,1];
    banyak = 0;
    for (var i = 0; i<100; i++){
        for (var j = 5; j>i; j--){
            if(param >= koin[i]){
                param = param - koin[i]
                banyak++    
            }
        }
    }
    return banyak
    
}
console.log(cekkoin(50))