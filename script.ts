let frase: string
frase = "Qual a maior palavra ?"
let result: string[] 

console.log(MaiorPalavra(frase))
console.log(SepararMaiorPalavra(MaiorPalavra(frase)))

function MaiorPalavra(frase: string) {
  result = frase.split(" ")
  return result
}
function SepararMaiorPalavra(resultParametro : string[]):string{
  let maiorPalavra: string
  maiorPalavra = ""
  resultParametro.forEach(x => {
    if (x.length > maiorPalavra.length){
      maiorPalavra = x
    }
  })
  return maiorPalavra
}