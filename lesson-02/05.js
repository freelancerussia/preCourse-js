let passport = {
   name: "Petr",
   surname: "Petrov",
};

let newPassport = {
   ...passport,
   name: "Ivan"
}

console.log(newPassport.name);
console.log(passport.name);