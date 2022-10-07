var frase;
frase = "Qual a maior palavra ?";
var result;
console.log(MaiorPalavra(frase));
console.log(SepararMaiorPalavra(MaiorPalavra(frase)));
function MaiorPalavra(frase) {
    result = frase.split(" ");
    return result;
}
function SepararMaiorPalavra(resultParametro) {
    var maiorPalavra;
    maiorPalavra = "";
    resultParametro.forEach(function (x) {
        if (x.length > maiorPalavra.length) {
            maiorPalavra = x;
        }
    });
    return maiorPalavra;
}
