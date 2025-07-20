import { useRef, useState } from "react"
import Header from "./Header"
import { checkFormvalid } from "../utilis/formValidation"
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { backgroundURL, photoURL } from "../utilis/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";

function Login() {

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const [isSignIn,setisSignIn]=useState(true)
   const [errorMessage,setErrorMessage]=useState('')
   
   
   const name= useRef(null)
   const email= useRef(null)
   const password= useRef(null)

    const toggleSignForm =()=>{
     setisSignIn(!isSignIn)   
    }
 
 

   const handleFormValid = () => {
      
      const message= (checkFormvalid(email.current.value, password.current.value))
       
      setErrorMessage(message)

      if(message) return

      if(!isSignIn){
       // Sign Up --creating a user
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)

               .then((userCredential) => {
                  const user = userCredential.user;
                  updateProfile(user, {
                      displayName: name.current.value, photoURL: {photoURL}
                          }).then(() => {
                          const {uid,email,displayName,photoURL} = auth.currentUser;
                            console.log(auth.currentUser);
                          
                           dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL,})) 
                          navigate('/browse')

                         }).catch((error) => {

                          });
                    navigate('/browse')
                })
             .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorMessage)

            });
      }
       else{
        // Sign In

          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                    navigate('/browse')
                 })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
              setErrorMessage(errorMessage)

                   });         
          }




    }



  return (
    <div>
      <Header/>

     <div className="absolute md:max-w-screen">
        <img src={backgroundURL} alt="background-logo" className="h-screen object-cover"/>
    </div>
     
    <form className="w-full mx-auto my-36 p-12 right-0 left-0 md:w-3/12 bg-black opacity-80 absolute" onSubmit={(e)=>{e.preventDefault()}}>

      <h1 className="font-bold text-white text-4xl m">{isSignIn?"Sign In ": "Sign Up "}</h1> 
      { !isSignIn &&
     <input className="p-3 my-8 w-full bg-gray-900 text-white placeholder-white" type="text" placeholder="Full Name" ref={name}/>

      }
     <input className="p-3 my-8 w-full bg-gray-900 text-white placeholder-white" type="text" placeholder="Email" ref={email}/>
     <input className="p-3 my-8 w-full  bg-gray-900  text-white placeholder-white " type="text" placeholder="Password" ref={password}/>
     <p className="text-white font-bold">{errorMessage}</p>
     <button className="p-3 my-8 w-full bg-red-700 rounded-lg text-white font-bold cursor-pointer" onClick={handleFormValid} >{isSignIn?"Sign In ": "Sign Up "}</button>

    <p className="text-white cursor-pointer" onClick={toggleSignForm}>{isSignIn?"New to Netflix?Sign up now. ": " Already registered.Sign In now "}</p>

    </form>
     
    </div>
  )
}

export default Login