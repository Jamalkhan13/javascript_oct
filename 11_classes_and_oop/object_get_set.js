const User = {
  _email: 'j@jm.com',
  _password: "123",


   get email(){
    return this._email.toUpperCase()
   },

   set email(value){
    this._email = value
   }
} 

const tea = Object.create(User) // factory funcion 
console.log(tea.email);
