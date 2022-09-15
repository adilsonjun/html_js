const form = document.getElementById('form-comp');

function maior(numero){
    let numB = parseFloat(document.getElementById('campoB').value);
    return numero > numB;
}
 
form.addEventListener('submit', function(e){
    e.preventDefault();

const numA = parseFloat(document.getElementById('campoA').value);
if (maior(numA)) {
    alert("ERRO! O número B não é o maior");
} else {
    alert("CORRETO! O número B é o maior");
}
})

console.log(form);