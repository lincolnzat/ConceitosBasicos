window.alert('alert');
window.confirm('confirm');
window.prompt('prompt');

var variavelUm = 'valor1';
variavelUm = 2;

let variavelDois = '2';

const idadeDoAluno = 10;
const novaidadeDoAluno = idadeDoAluno + 1;

window.alert(variavelUm);
const isConfirmed = window.confirm('Confirm');
const userResponse = window.prompt('Prompt');

const userNumber = Number(userResponse);
console.log (typeof userNumber);

if (userResponse == 10) {
    console.log("O valor é 10")
}
else {
    console.log("Valor não é 10")
}

const templateString = `
'Meu valor recebido é' ${userResponse}
'e isso é muito bom' ${userResponse.toFixed(0)}
`;

console.log (templateString);






