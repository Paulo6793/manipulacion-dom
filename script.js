const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#numero1');
const input2 = document.querySelector('#numero2');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado');



form.addEventListener('submit', sumarInputsValues);

function sumarInputsValues(evento) {
    //console.log({evento});
    evento.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResultado.innerText = "Resultado: " + sumaInputs;
}

function btnOnClick() {
    let sumaInputs = input1.value + input2.value;
    pResultado.innerText = "Resultado: " + sumaInputs;
}

/* const p = document.querySelector('p');
const parrafo = document.getElementsByClassName('parrafo');
const pid = document.getElementById('pid'); */


/* console.log(input.value);

console.log({
    h1,
    p,
    parrafo,
    pid,
    input
});

h1.innerHTML = "Instituto Superior Tecnológico <br> Japón";
h1.innerText = "Instituto Superior Tecnológico <br> Japón";

console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'Movil');
h1.classList.add('Tablet');
h1.classList.add('Movil');
h1.classList.remove('Desktop');
h1.classList.toggle('YouTube');
h1.classList.contains('YouTube');
input.value = "Paulo Galarza";

const img = document.createElement('img');
img.setAttribute('src', 'https://itsjapon.edu.ec/wp-content/uploads/2022/07/CRONOGRAMA-IDIOMAS-2022-768x529.jpg');
console.log(img);
pid.innerHTML = "";
pid.appendChild(img);
pid.innerHTML = img; */