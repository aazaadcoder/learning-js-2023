function setUserName (userName){
    this.userName = userName;
}

function createUser1(userName, email, password){

    setUserName(userName);//will not save username as once the function is excuted the excution conetxt will be deleted and refernce to the username varibale will be lost, so to tackel this we use call

    this.email = email;
    this.password = password;
}

const harshit1 = new createUser1("harshit123","harshit@harshit.com", "!2234")
console.log("without using call: ",harshit1)

function createUser2(userName, email, password){

    setUserName.call(this, userName);//aap apne thsi ka use mat karo bcz wo lost ho jayega and rather you use this provided by me of my execution context 

    this.email = email;
    this.password = password;
}

const harshit2 = new createUser2("harshit123","harshit@harshit.com", "!2234")
console.log("Using call: ",harshit2)