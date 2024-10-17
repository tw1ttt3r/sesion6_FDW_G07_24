const numeros = [];

numeros.push(5);

// [5]

// spread operator

// obtener el contenido de un arreglo o un objeto y agregarlo a un nuevo arreglo u objeto depeniendo la operacion

const numeros1 = [ ...numeros, 5 ];

// filter
// metodo funcional de los arreglos que me va a permitir obtener el mismos número de elementos
// o menos, filter busca encontrar registros que coincidan con la o las condiciones, estos resultados
// viven en un nuevo arreglo

// sintaxis

// const arreglo = [3,4,45,5,6,8];

// 0                   3        0      [3,4,45,5,6,8]
// arreglo.filter((elemento, posicion, arreglo) => {
//     return elemento > 3
// });

// 5
// for(let elemento of arreglo) {
    // elemento = 8
// }

// 2
//  for (let elemento in arreglo) {
    // elemento = 2
// }
// for(let inicio; condicion; incremental) {
    // 
// }
const arreglo = [3,4,45,5,6,8];

const nuevoarreglo = arreglo.filter((elemento, posicion, arreglo) => elemento > 3); // [4, 45, 5, 6, 8]

// iteracion 0
// elemento = 3
// 3 > 3
// false no regresa nada [x]
// true regresa el elemento

// iteracion 1
// elemento = 4
// 4 > 3
// false no regresa nada
// true regresa el elemento [x]

// iteracion 2
// elemento = 45
// 45 > 3
// false no regresa nada
// true regresa el elemento [x]

// iteracion 3
// elemento = 5
// 5 > 3
// false no regresa nada
// true regresa el elemento [x]

// iteracion 4
// elemento = 6
// 6 > 3
// false no regresa nada
// true regresa el elemento [x]

// iteracion 5
// elemento = 8
// 8 > 3
// false no regresa nada
// true regresa el elemento [x]

// tengo un arreglo de calificaciones 
// [8,7,9,5,7,6,8,10,10,10,6]

// requiero obtener el promedio del grupo
// requiero obtener las calificaciones reprobatorios (menores que 7)
// requiero obtener las calificacions aprobatorias menores que 10
// requiero obtener las calificaciones perfectas (10)


const calificaciones = [8,7,9,5,7,6,8,10,10,10,6];
const reprobados = calificaciones.filter((elemento) => elemento < 7);
const aprobados1 = calificaciones.filter((elemento) => elemento < 10);
const aprobados2 = calificaciones.filter((elemento) => elemento === 10);

let sum = 0;
for (let calificacion of calificaciones) {
    sum += calificacion;
}

const promedio = sum / calificaciones.length;

// requiero conocer las calificaciones que se encuentren en una posicion/indice par
const posicionespar = calificaciones.filter((elemento, posicion) => posicion%2 == 0 && posicion > 0);
console.log(posicionespar)


// map
// metodo funcional que me regresará un arreglo con el mismo número de elementos pero no con el mismo valor(posiblemente)

// sintaxis
// arreglo.map((elemento, posicion, arreglo) => );
const edades = [10,56, 34, 45, 18, 9, 32, 67, 101, 120];

// si la edad se encuentra en el rango de 0 a 17 -> menor de edad
// si la edad se encuentra en el rango de 18 a 25 -> adolescente
// si la edad se encuentra en el rango de 26 a 40 -> adulto
// si la edad se encuentra en el rango de 41 a 80 -> sabio
// si la edad se encuentra en el rango de 81 a 100 -> anciano
// si la edad supera los 101 -> leyenda

console.log(edades)

const resultado = edades.map((edad) => {
    if (edad >= 0 && edad <= 17) {
        return 'menor de edad';
    } else if (edad >= 18 && edad <= 25) {
        return 'adolescente'
    } else if (edad >= 26 && edad <= 40) {
        return 'adulto'
    } else if (edad >= 41 && edad <= 80) {
        return 'sabio'
    } else if (edad >= 81 && edad <= 100) {
        return 'anciano'
    } else {
        return 'leyenda'
    }
});

console.log(resultado)



// tengo un arreglo de nombre 
const nombres = ["Maria", "Antonio", "Jose", "Jaime", "Gabriela", "Ortencia", "Jose", "Manuel"]

// si el nombre comienza en vocal, necesito que lo conviertan a mayusculas
// si el nombre comienza en consonante, si la primera letra se encuentra entre la la a - m invertirlo
// si el nombre comienza en consonante, si la primera letra se encuentra entre la la n - z cambiar las vocales por numeros
// si el nombre tiene 4 letras, conviertelo a minusculas
// si el nombre esta repetido, cambialo por la palabra repetido

console.log(nombres)

const resultados = nombres.map((nombre, posicion, array) => {
    const vocales = ['a','e','i','o','u'];
    const consonantes1=['b','c','d','f','g','h','j','k','l','m'];
    const consonantes2=['n','p','q','r','s','t','v','w','x','y','z'];

    console.log("nombre", nombre);

    let cuenta = 0;
    for (let palabra of array) {
        if (palabra === nombre) {
            cuenta++;
        }
    }

    if (cuenta > 1) {
        return 'repetido'
    }

    if (nombre.length === 4) {
        return nombre.toLowerCase();
    }

    if (vocales.includes(nombre[0].toLowerCase())) {
        return nombre.toUpperCase();
    }

    if (consonantes1.includes(nombre[0].toLowerCase())) {
        let n = '';
        for(let i = (nombre.length-1); i >= 0; i--) {
            n += nombre[i]; 
        }
        return n
        // return nombre.split('').reverse().join('')
        // Maria
        // ['M','a','r','i','a']
        // ['a','i','r','a','M']
        // 'airaM'
    }

    if (consonantes2.includes(nombre[0].toLowerCase())) {
        return nombre.split('').map((letra) => {
            switch(letra.toLowerCase()) {
                case 'a':
                    return 1
                case 'e':
                    return 2
                case 'i':
                    return 3
                case 'o':
                    return 4
                case 'u':
                    return 5
                default:
                    return letra
            }
        }).join('');
    }

    return nombre
});

console.log(resultados)

// reduce
// me permite regresar cualquier tipo de dato soportado por javascript
// requiere obligatoriamente un retorno de valor
// 
// sintaxis
// arreglo.reduce((acumulado, elemento, posicion, arreglo) => {}, segundoparametro)
// recibe 2 parametros pero el segundo es opcional
// si reduce no recibe el segundo parametro, en la primera iteracion
// el acumulador tomara el valor de la posicion 0 y elemento tomara el valor de la posicion 1
// para las siguientes iteraciones, acumulador tomara el valor retornado en la iteracion anterior
// y elemento continuara obteniendo el valor de la iteracion actual

const calificaciones2 = [8,7,9,5,7,6,8,10,10,10,6];

const calif3 = calificaciones2.reduce((acumulador, elemento, posicion, array) => {
    return acumulador + elemento
});

// iteracion 0
// acumulador = 8
// elemento = 7
// regresar = 15

// iteracion 1
// acumulador = 15
// elemento = 9
// regresar = 24

// iteracion 2
// acumulador = 24
// elemento = 5
// regresar = 29


// si reduce recibe el segundo parametro, en la primera iteracion
// el acumulador tomara el valor del segundo parametro y elemento tomara el valor de la posicion 0
// para las siguientes iteraciones, acumulador tomara el valor retornado en la iteracion anterior
// y elemento continuara obteniendo el valor de la iteracion actual

const calif4 = calificaciones2.reduce((acumulador, elemento, posicion, array) => {
    return acumulador + elemento
}, ''); 

// iteracion 0
// acumulador = ''
// elemento = 8
// regresar = '8'

// iteracion 1
// acumulador = '8'
// elemento = 7
// regresar = '87'

// iteracion 2
// acumulador = 15
// elemento = 9
// regresar = 24


/*
    - Que el dato a operar sea un arreglo
    - Que tipo de operación voy a realizar
        - si necesito filtrar o obtener solo los elementos que cumplan ciertas condiciones
            filter
        - si necesito hacer operaciones o modificaciones en los datos del arreglo, pero necesito
            el mismo numero de elementos al final
            map
        - si necesito obtener cualquier tipo de dato no solamente un arreglo 
            reduce

    - los tres metodos ocupan un callback
        y el callback me ofrece los siguientes parametros (filter y map) en el siguiente orden
            elemento: valor de la posicion que recorro
            posicion: indice de la iteracion actual
            arreglo: el arreglo original que estoy recorriendo
        para reduce me ofrece los siguientes parametros:
            acumulador: valor que voy retornando en cada iteracion
            elemento: valor de la posicion que recorro
            posicion: indice de la iteracion actual
            arreglo: el arreglo original que estoy recorriendo

*/