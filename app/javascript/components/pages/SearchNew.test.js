// Write the test for a function that returns "drink coffee" if you are
// tired and "keep working" if you are not tired. Write the function that // will make the test pass
describe ("needCoffee", () => {
  test("take an argument and determine if the person needs coffee", () => {
    expect(needCoffee("tired")).toEqual("drink coffee")
    expect(needCoffee("not tired")).toEqual("keep working")
  })
})

const needCoffee = (condition) => {
  if (condition === "tired") {
    return "drink coffee"
  } else if (condition === "not tired") {
    return "keep working"
  } else {
    return "incorrect input"
  }
}

const { TestScheduler } = require("jest")

// Write the test for a function that returns "relax" if you are stressed // and "keep going" if you are not stressed. Write the function that
// will make the test pass.
describe ("areStressed", () => {
   test("take an argument and determine if the person needs rest", () => {
     expect(areStressed("stressed")).toEqual("relax")
     expect(areStressed("not stressed")).toEqual("keep going")
   })
 })

 const areStressed = (condition) => {
   if (condition === "stressed") {
     return "relax"
   } else if (condition === "not stressed") {
     return "keep going"
   } else {
     return "incorrect input"
   }
 }

//Write the test for a function that returns "in budget" if a price is lower than $300
//Write the function that will make the test pass.
describe ("withinBudget", () => {
    test("taken in argument to see if dollar value of item is less $300", () => {
        let itemPrice = 200
        expect(withinBudget(itemPrice)).toEqual("in budget")
        expect(withinBudget(itemPrice + 200)).toEqual("outside of budget")
    })
})

const withinBudget = (cost) => {
    if (cost <= 300) {
        return "in budget"
    } else if (cost > 300) {
        return "outside of budget"
    } else {
        return "error"
    }
}

//Write the test for a function that takes in two arguments(numbers)
//and returns the smaller number
//Write the function that will make the test pass.
describe ("smallNum", () => {
    test ("compares two numbers and returns the smaller number", () => {
        let num1 = 10
        let num2 = 20
        expect(smallNum(num1, num2)).toEqual(10)
        expect(smallNum(num1 + 20, num2)).toEqual(20)
        expect(smallNum(num1, num2 - 10)).toEqual("they are the same")
    })
})

const smallNum = (num1, num2) => {
    if (num1 > num2) {
        return num2
    } else if (num1 < num2) {
        return num1
    } else {
        return "they are the same"
    }
}

//Write the test for a function that takes in one argument(number)
//returns whether the number is odd
//Write the function that will make the test pass.
describe ("isOdd", () => {
    test("determines if the number is odd", () => {
        expect(isOdd(5)).toEqual("odd")
        expect(isOdd(6)).toEqual("even")
        expect(isOdd("eleven")).toEqual("Invalid. Please input a number.")
    })
})

const isOdd = (number) => {
    if(number % 2 === 0) {
        return "even"
    } else if (number % 2 === 1) {
        return "odd"
    } else {
        return "Invalid. Please input a number."
    }
}

// Write the test for a function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape. Write the function that will make the test pass.
describe ("fruitColor", () => {
  test("find the color of the fruit parameter", () => {
    expect(fruitColor("banana")).toEqual("yellow")
    expect(fruitColor("apple")).toEqual("red")
    expect(fruitColor("grape")).toEqual("purple")
    expect(fruitColor("watermelon")).toEqual("I don't know!")
  })
})

const fruitColor = (fruit) => {
  if (fruit === "banana") {
    return "yellow"
  } else if (fruit === "apple") {
    return "red"
  } else if (fruit === "grape") {
    return "purple"
  } else {
    return "I don't know!"
  }
}

// Write the test for a function called Rick that returns "Morty". Write the function that will make the test pass.
describe ("Rick", () => {
  test("when function is called return Morty", () => {
    expect(Rick()).toEqual("Morty")
    expect(Rick(1000)).toEqual("Morty")
  })
})

const Rick = () => {
  return "Morty"
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen. Write the function that will make the test pass.
describe ("greeter", () => {
  test("take a parameter return a greeting with that name", () => {
    expect(greeter("Bach")).toEqual("Hello, Bach")
  })
})

const greeter = (name) => {
  return `Hello, ${name}`
}

//Write the test for a function called oddOrEven that takes an number as an argument
//logs whether the number is odd or even
//Write the function that will make the test pass.
describe ("oddOrEven", () => {
    test ("takes a number argument and checks if it is odd or even", () => {
        expect(oddOrEven(7)).toEqual("odd")
        expect(oddOrEven(8)).toEqual("even")
        expect(oddOrEven("incorrect")).toEqual("Error.")
    })
})

const oddOrEven = (number) => {
    if(number % 2 === 0) {
        return "even"
    } else if (number % 2 === 1) {
        return "odd"
    } else {
        return "Error."
    }
}

//Write the test for a function called doubler that takes an number
//returns the result of the number multiplied by 2
//Write the function that will make the test pass.
describe ("doubler", () => {
    test("takes a number argument and multiplies it by 2", () => {
        expect(doubler(4)).toEqual(8)
        expect(doubler(-2)).toEqual(-4)
        expect(doubler("word")).toEqual("Error.")
    })
})

const doubler = (number) => {
    if (typeof number === "number") {
        return number * 2
    } else {
        return "Error."
    }
}

// Write the test for a function called multiply that takes two numbers as arguments
//logs the result of one of the numbers multiplied by the other
//Write the function that will make the test pass.
describe ("multiply", () => {
    test("takes two parameters and multiply them together", () =>{
        expect(multiply(2,-2)).toEqual(-4)
        expect(multiply(2,2)).toEqual(4)
        expect(multiply(2,"dog")).toEqual("Error.")
    })
})

const multiply = (num1, num2) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 * num2
    } else {
        return "Error."
    }
}

//Write the test for a function called divisibleBy that takes two numbers as arguments
//returns whether the first number is evenly divisible by the second
//so that divisibleBy(10, 5) logs "10 is evenly divisible by 5"
//Write the function that will make the test pass.
describe ("divisibleBy", () => {
  test("takes 2 parameters and see if the first number is evenly divisible by the second", () => {
    expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5")
    expect(divisibleBy(10, 3)).toEqual("10 is not evenly divisible by 3")
    expect(divisibleBy(10, "dog")).toEqual("Error.")
  })
})

const divisibleBy = (num1, num2) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
      if (num1 % num2 === 0) {
        return `${num1} is evenly divisible by ${num2}`
      } else {
        return `${num1} is not evenly divisible by ${num2}`
      }
  } else {
      return "Error."
  }
}

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'. Write the function that will make the test pass.
describe ("fizzbuzz", () => {
  test("if number/3 then fizz, if number/5 then buzz, if both then fizzbuzz", () => {
    expect(fizzbuzz(9)).toEqual("fizz")
    expect(fizzbuzz(10)).toEqual("buzz")
    expect(fizzbuzz(15)).toEqual("fizzbuzz")
    expect(fizzbuzz(2)).toEqual(2)
  })
})

const fizzbuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return "fizzbuzz"
  } else if (number % 5 === 0) {
    return "buzz"
  } else if (number % 3 === 0) {
    return "fizz"
  } else {
    return number
  }  
}
