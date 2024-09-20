function mutiplyBy5(num) {
    // this.num = num
    return num * 5

}

mutiplyBy5.power = 2

// console.log(mutiplyBy5(5));
// console.log(mutiplyBy5.power);
// console.log(mutiplyBy5.prototype);//?
// console.log(mutiplyBy5.constructor);//?

/*everything is a object in js*/

function createUser(userName, score) {
    this.userName = userName
    this.score = score
}

// adding a function inside a function just like objects 

createUser.prototype.increment = function () {
    this.score++
}

createUser.prototype.decrement = function(){
    this.score--
}

createUser.prototype.printMe = function () {
    console.log(`score of ${this.userName} is ${this.score}`)
}

const harshit = new createUser('harshit', 25)
const sakshi = new createUser('sakshi', 250)

// new keyword ke bina jo prototype add kiya hai usko pata nahi hoga


// sakshi.printMe()
// sakshi.increment()
// sakshi.printMe()
// sakshi.decrement()
// sakshi.printMe()


/*prototype*///////////////////////////////////////////////////////////////////////////////////////


let myName = 'harshit          '

// console.log(myName.length);

/* making a true length function by adding a property to Object*/

String.prototype.trueLength = function () {
    // console.log('hello');

    return this.trim().length
}

let myName2 = new String('sakshi          ')

// console.log(myName2.trueLength());


const heros = ['spiderman', 'thor']

const heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderManPower: function () {
        console.log(`SpiderMan's Powers are ${this.spiderman}`);
    }
}

Object.prototype.harshit = function () {
    console.log('harshit is present in all objects');
}

heroPower.harshit()

heros.harshit()

Array.prototype.happy = function () {
    console.log("happy says hello")
}


heros.happy()
// heroPower.happy()
// heroPower.happy()
/* object does not has properties of array but viceversa is true */


//inheritence  (samjh nahi aya mujhe)

user = {
    name : 'harshit',
    email : 'harshit@gmail.com'

}
const teacher = {
    makeVideo: true,

}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,

    __proto__ : teachingSupport
}

teacher.__proto__ = user

// __proto__ is outdated

// mordern syntax 

Object.setPrototypeOf(teachingSupport, teacher)

// console.log("ice tea        ".trueLength());