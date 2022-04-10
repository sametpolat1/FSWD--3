let degerler = [ 30, 4, 9,15 ]

const cekimlimiti = 10;

console.log(degerler)


function getFinalOrder(gelen1, gelen2) {
    let array = []
    const siralama = []
    function srlma(x) {
        x = x * gelen2
        for (let i = 0; i < gelen1.length + 2; i++) {
            if (gelen1[0] <= x) {
                
                array.push(gelen1[0])
                gelen1.shift()
               // console.log(gelen1)
            } else {
              gelen1.push(gelen1[0])
              gelen1.shift()
               // console.log(gelen1)
            }
        }
    }
    for (let gelen2 = 1; gelen2 < degerler.length + 10; gelen2++) {

        srlma(gelen2)
    }
    gelen1 = array
    return gelen1
}

console.log(getFinalOrder(degerler, cekimlimiti))