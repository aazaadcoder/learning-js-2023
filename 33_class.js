class user{//just a sugar coatin gin the backgrounf function and prototype mathods going on 
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc123`
    }

    changePassword(){
        return `${this.username.toUpperCase()}`
    }
}

const harshit = new user("harshit", "harshit@gmail.com", "sadhsha")

console.log(harshit)
console.log(harshit.encryptPassword())
console.log(harshit.changePassword())