let valores = [8,1,7,4,2,9]
console.log(`velores são ${valores}`)
/*for (pos = 0; pos < valores.length; pos++){
        console.log(`posição ${pos} é igual a ${valores[pos]}`)
}*/
for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
