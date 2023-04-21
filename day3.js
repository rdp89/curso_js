//Level 1
//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Rafael'
let lastName = 'Delgado Peña'
let country = 'Spain'
let city = 'Córdoba'
let age = 33
let isMarried = false
let year = 1989
console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

//2. Check if type of '10' is equal to 10
console.log(typeof('10') == typeof(10))

//3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)

//4. Boolean value is either true or false.
  //I. Write three JavaScript statement which provide truthy value.
  let statement1 = true
  let statement2 = 1
  let statement3 = 'Hola'
  //II. Write three JavaScript statement which provide falsy value.
  let statement4 = false
  let statement5 = 0
  let statement6 = ''

//5. Figure out the result of the following comparison expression first without using console.log().
//After you decide the result confirm it using console.log()
    console.log(4 > 3) //true
    console.log(4 >= 3) //true
    console.log(4 < 3) //false
    console.log(4 <= 3) //false
    console.log(4 == 4) //true
    console.log(4 === 4) //true
    console.log(4 != 4) //false
    console.log(4 !== 4) //false
    console.log(4 !== '4') //true
    console.log(4 == '4') //true
    console.log(4 === '4') //false
    //Find the length of python and jargon and make a falsy comparison statement.
    console.log('python'.length != 'jargon'.length) //Las dos miden 5

//6. Figure out the result of the following expressions first without using console.log().
//After you decide the result confirm it by using console.log()
    console.log(4 > 3 && 10 < 12) //true
    console.log(4 > 3 && 10 > 12) //false
    console.log(4 > 3 || 10 < 12) //true
    console.log(4 > 3 || 10 > 12) //true
    console.log(!(4 > 3)) //false
    console.log(!(4 < 3)) //true
    console.log(!(false)) //true
    console.log(!(4 > 3 && 10 < 12)) //false
    console.log(!(4 > 3 && 10 > 12)) //true
    console.log(!(4 === '4')) //true
    //There is no 'on' in both dragon and python
    console.log(!('dragon'.match('on') && 'dragon'.match('on'))) //false

//7. Use the Date object to do the following activities
    //What is the year today?
    const time = new Date()
    console.log(time.getFullYear())
    //What is the month today as a number?
    console.log(time.getMonth()+1)
    //What is the date today?
    console.log(`${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()}`)
    //What is the day today as a number?
    console.log(time.getDate())
    //What is the hours now?
    console.log(time.getHours())
    //What is the minutes now?
    console.log(time.getMinutes())
    //Find out the numbers of seconds elapsed from January 1, 1970 to now.
    console.log(time.getTime())

//Level 2
//1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = parseInt(prompt('Mete la base:'))
let height = parseInt(prompt('Mete la altura:'))
console.log(`area = 0.5 x ${base} x ${height} = ${0.5*base*height}`)

//2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = parseInt(prompt('Mete el lado a:'))
let b = parseInt(prompt('Mete el lado b:'))
let c = parseInt(prompt('Mete el lado c:'))
console.log(`Perímetro = ${a} + ${b} + ${c} = ${a+b+c}`)

//3 Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let longitud = +prompt('Dame la longitud:')
let altura = +prompt('Dame la altura:')
console.log(`area = ${longitud} x ${altura} = ${longitud*altura} and the perimeter of rectangle = 2x(${longitud} + ${altura})=${2*(longitud+altura)}`)

//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let r = +prompt('Mete el radio:')
console.log(`area = ${Math.PI} x ${r} x ${r} = ${Math.PI*r**2}`)

//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2 (xIntercept = mx + yIntercept)
const m = 2 // slope
const yIntercept = -2 // y-intercept
//x-intercept occurs when y = 0
const xIntercept = -yIntercept/m

console.log(`Slope: ${m}`)
console.log(`X-Intercept: ${xIntercept}`)
console.log(`Y-Intercept: ${yIntercept}`)

//6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
console.log((10-2)/(6-2)) //2

//7. Compare the slope of above two questions.
//ok

//8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = parseInt(prompt("Introduce el valor de X: "))
let ecua = x
let ecub = 6
let ecuc = 9
let formulaPositiva = (-ecub+Math.sqrt(ecub**2-4*ecua*ecuc)/(2*ecua))
let formulaNegativa = (-ecub-Math.sqrt(ecub**2-4*ecua*ecuc)/(2*ecua))
console.log(`El resultado positivo de la ecuación de segundo grado es: ${formulaPositiva}`)
console.log(`El resultado negativo de la ecuación de segundo grado es: ${formulaNegativa}`)

//9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = parseInt(prompt("Introduce las horas que trabajas a la semana: "))
let rate = parseFloat(prompt("Cuánto ganas por hora?: "))
console.log(`Tus ganancias semanales son: ${hours*rate}`)

//10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName = prompt("Introduce tu nombre: ")
let longitudNombre = myName.length
longitudNombre > 7
  ? console.log("Your name is long")
  : console.log("Your name is short")

//11. Compare your first name length and your family name length and you should get this output.
let namee = "Rafael".length
let surname = "Peña".length

let isLonger = namee > surname
isLonger
  ? console.log("Your first name, Rafael is longer than your family name, Peña")
  : console.log("Aquí nunca va a llegar")

//12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25
console.log(`I am ${myAge-yourAge} years older than you`)

//13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let fechaActual = new Date()
let anio = parseInt(prompt("Introduce tu año de nacimiento: "))
let checker = parseInt(fechaActual.getFullYear())-anio
checker >= 18
  ? console.log(`You are ${checker}. You are old enough to drive.`)
  : console.log(`You are ${checker}. You will be allowed to drive after ${18-checker} years.`)

//14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let nyears = parseInt(prompt("Introduce el número de años que vas a vivir supuestamente (¿un poco turbio ésto no?): "))
console.log(`Viviste ${nyears*31536000} segundos`) //Se multiplica por los segundos que tiene un año entero, que son 31536000

//15. Create a human readable time format using the Date time object
const fechita = new Date()
let YYYY = fechita.getFullYear()
let MM = fechita.getMonth()+1
let DD = fechita.getDate()
let HH = fechita.getHours()
let mm = fechita.getMinutes()
// YYYY-MM-DD HH:mm
console.log(`${YYYY}-${MM}-${DD} ${HH}:${mm}`)
// DD-MM-YYYY HH:mm
console.log(`${DD}-${MM}-${YYYY} ${HH}:${mm}`)
// DD/MM/YYYY HH:mm
console.log(`${DD}/${MM}/${YYYY} ${HH}:${mm}`)

//Level 3
//1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
MM <= 9 ? MM = '0'+MM : MM = MM
DD <= 9 ? DD = '0'+DD : DD = DD
//YYYY-MM-DD HH:mm
console.log(`${YYYY}-${MM}-${DD} ${HH}:${mm}`)


