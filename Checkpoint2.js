var rania='mon nom est wajdi'

function reversing (nom){
  var reversed = ''
  for (var i = nom.length - 1; i >= 0; i--) {
    reversed = reversed + nom[i]
  }
  return reversed
}

console.log(reversing(rania))
var char="go my code learn by making"
function counting(a){
  var compt = 0
  for (var i = 0; i < a.length; i++) {
    compt++
  }
  return compt
}

console.log(counting(char))


// Capitalize Words: 
//toUpper
var b = "hello"
var x = "WAJDI"
console.log(b.toUpperCase())
console.log(x.toLowerCase())

var char ="go my code learn by making"

var a ="go my code learn by making rani. yesser"
function uppering (char){
  var uppered = ""
  for (var i = 0; i < char.length; i++) {
    if (i == 0 || char[i - 1] == ' ') {
      uppered = uppered + char[i].toUpperCase()
    }
    else {
      uppered = uppered + char[i]
    }

  }
  return uppered
}

console.log(uppering(a))


function minMax(t) {

    var min = t[0]
    var max = t[0]
    
    for(var i = 0; i < t.length; i++){
      if(t[i] < min) {
        min = t[i]
      }
    
      if(t[i]>max){
        max = t[i]
      }
    }
    
    return [min,max]
    }


    var rania = [1,5, 5,6]
function summing (a){
  var sum = 0
  for (var i = 0; i < a.length; i++) {
    sum = sum + a[i]
  }
  return sum
}

console.log(summing (rania))
//Filter Array
var t=[1,5,6,"rania", 8, "aa"]
function filtering (t){
  var t2 = []
  for (var i = 0; i < t.length; i++) {
    if (typeof (t[i]) == 'number') {
      t2.push(t[i])
    }
  }
  return t2
}

console.log(filtering(t))


var d = [1, 2, 8, "Rania", 8, "Rahma"]



function yessine (t){
  var t2 = []
  for (var i = 0; i < t.length; i++) {
    if (typeof (t[i]) == 'string') {
      t2.push(t[i])
    }
  }
  return t2
}


console.log(yessine(d))


// Factorial: Write a function to calculate the factorial of a given number.
var num = 5
function facto (num){
  var fact = 1
  for (var i = 1; i <= num; i++) {
    fact = fact * i
  }
  return fact
}

console.log(facto (num))


// Prime Number Check
var num = 9
function primenum (num) {
  var compt = 0
  for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
      compt++
    }
  }
  if (compt == 2) {
    return 'prime'

  }
  else {
    return 'not prime'
  }
}

console.log(primenum(num))