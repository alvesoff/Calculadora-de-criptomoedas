var valorEmDolar = 22;
var valorEmEthereum = 1579.89;
var valorEmBitcoin = 23084.0;

var valorA = valorEmDolar * valorEmEthereum;

var valorX = valorEmDolar * valorEmBitcoin;

valorA = valorA.toFixed(2);
valorX = valorX.toFixed(2);

alert(
  "O Valor convertido será de $ em Ethereum = " +
    valorA +
    "  //  " +
    " O Valor convertido será de $ em Bitcoin = " +
    valorX
);