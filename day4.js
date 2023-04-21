//Level 1

//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let years = parseInt(prompt("Introduce tu edad: "))
if (years >= 18) {
    console.log("You are old enough to drive.")
} else {
    console.log(`You are left with ${18-years} years to drive.`)
}

//2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let yourAge = parseInt(prompt("Dime tu edad para compararla: "))
let myAge = 33
if(yourAge > myAge) {
    console.log(`Eres ${yourAge-myAge} años mayor que yo`)
} else if (yourAge == myAge) {
    console.log("Tienes la misma edad que yo")
} else {
    console.log(`Eres ${myAge-yourAge} años menor que yo`)
}

//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
let a = 4
let b = 3
//Using if else
if (a > b) {
    console.log("a is greater than b")
} else {
    console.log("a is less than b")
}

//Ternary operators
a > b 
? console.log("a is greater than b") 
: console.log("a is less than b")

//4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = parseInt(prompt("Introduce un número para comprobar si es par o impar: "))
if (number % 2 == 0) {
    console.log(`${number} is an even number`)
} else {
    console.log(`${number} is an odd number`)
}

//Level 2
//1. Write a code which can give grades to students according to theirs scores:
let score = parseInt(prompt("Introduce tu nota: "))
switch (true) {
    case (score >= 80 && score <= 100):
    console.log("A")
    break
    case (score >= 70 && score <= 89):
    console.log("B")
    break
    case (score >= 60 && score <= 69):
    console.log("C")
    break
    case (score >= 50 && score <= 59):
    console.log("D")
    break
    case (score < 50):
    console.log("F")
    break
    default:
    console.log("La nota introducida no es evaluable... Introduce una nota entre 0 y 100 para poder evaluarla, gracias.")
}

//2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is: 
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring.
// June, July or August, the season is Summer.
let month = prompt("Introduce el mes en el que estamos: ").toLowerCase()
switch (month) {
    case 'diciembre':
    case 'enero':
    case 'febrero':
    console.log("Estamos en invierno")
    break
    case 'marzo':
    case "abril":
    case 'mayo':
    console.log("Estamos en primavera")
    break
    case 'junio':
    case 'julio':
    case 'agosto':
    console.log("Estamos en verano")
    break
    case 'septiembre':
    case 'octubre':
    case 'noviembre':
    console.log("Estamos en otoño")
    break
    default:
    console.log("Dato mal introducido, asegúrate de que escribes el mes en castellano")
}

//3. Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt("¿Qué día de la semana es hoy?").toLowerCase()
switch (day) {
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
    console.log("Hoy es día laboral")
    break
    case 'sabado':
    case 'domingo':
    console.log("Hoy es fin de semana")
    break
    default:
    console.log("Dato mal introducido, asegúrate de quitar las tildes")
}

//Level 3
//1. Write a program which tells the number of days in a month.
let mes = prompt("Introduce el mes y te digo los días que tiene: ").toLowerCase()
switch (mes) {
    case 'enero':
    case 'marzo':
    case 'mayo':
    case 'julio':
    case 'agosto':
    case 'octubre':
    case 'diciembre':
    mes = mes.charAt(0).toUpperCase() + mes.slice(1)
    console.log(`${mes} tiene 31 días`)
    break
    case 'febrero':
    mes = mes.charAt(0).toUpperCase() + mes.slice(1)
    console.log(`${mes} tiene 28 días`)
    break
    case 'abril':
    case 'junio':
    case 'septiembre':
    case 'noviembre':
    mes = mes.charAt(0).toUpperCase() + mes.slice(1)
    console.log(`${mes} tiene 30 días`)
    break
    default:
    console.log("Dato erroneo introducido...")
}
