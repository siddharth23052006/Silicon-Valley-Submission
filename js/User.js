class User{
    constructor(){
        this.index = null;
        this.name = null;
        this.email = null;
        this.gender = null;
        this.age = null;
    }

    update(Name){
        var userIndex = "users/" + Name;
        database.ref(userIndex).set({
            name: this.name,
            email: this.email,
            gender: this.gender,
            age: this.age
        });
    }
}