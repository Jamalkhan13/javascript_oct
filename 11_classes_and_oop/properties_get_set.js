function User (email,password){
  this._email = email;
  this._password = password;

    Object.defineProperty(this,'email',{
      
        get: function(){
          return this._email.toUpperCase();      
      },
      set:function(value){
        this._email = value
      }
    })
    Object.defineProperty(this,'password',{
      
      get: function(){
        return this._password.toUpperCase();      
    },
    set:function(value){
      this._password = value
    }
  })


} 

const jamal = new User("jamal@12","123")

console.log(jamal.email);
