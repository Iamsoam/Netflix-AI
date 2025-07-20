 
 
 
 export const checkFormvalid=(email,password)=>{
   const Email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
   const Password =/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password)
   
   if(!Email)return "Email not valid"
   if(!Password) return "Password not valid"

   return null
 }