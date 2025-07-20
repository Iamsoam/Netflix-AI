 import {onAuthStateChanged,signOut } from "firebase/auth";
 import { auth } from '../utilis/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from "react"
import { addUser, removeUser } from "../utilis/userSlice";
import { logo } from "../utilis/constants";
import { toggleGptSearchView } from "../utilis/gptSlice";
import { setlang } from "../utilis/langSlice";

function Header() {

const navigate = useNavigate()
const dispatch = useDispatch();

const user = useSelector((store)=>store.user)
     console.log(user);


const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

  
    const handleclick=()=>{

           signOut(auth).then(() =>{
            }).catch((error) => 
             {
              });

    }

useEffect(()=>{

 onAuthStateChanged(auth, (user) => {
   if (user) {
     const {uid,email,displayName,photoURL} = user;
     console.log(user);
      dispatch(addUser({uid:uid,email:email,displayName:displayName || 'USER',photoURL:photoURL||"https://occ-0-3241-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaSDR-kTPhPYcVVGSsV0jC3D-Q5HZSFE6fjzAM-4cMpltx1Gw9AV7OTnL8sYnC6CBxOBZQEAJLjStt822uD2lctOvNR05qM.png?r=962"
 }))
      navigate('/browse')
   
  } else {
    dispatch(removeUser())
    navigate('/')


   }
  });

},[])


const handleAiSearch =()=>{
  dispatch(toggleGptSearchView())

}

const handlelangchange=(e)=>{
  dispatch(setlang(e.target.value))
}



  return (
    <div className='w-screen absolute px-4 py-3 md:bg-gradient-to-b from-black z-5 flex flex-col md:flex-row justify-between '>
    <img className='w-40 mx-auto md:mx-0 ' 
    src={logo} alt='logo'/>

  {user && <div>
  <div className="flex ml-10 md:m-0">
     {showGptSearch && <select className="text-white " onChange={handlelangchange}>
        <option value="en">English</option>
        <option value="hindi">Hindi</option>
        <option value="japanese">Japanese</option>
      </select> }
      <button className="px-2 m-3 rounded bg-red-600 font-bold text-white cursor-pointer" onClick={handleAiSearch}>{showGptSearch?"Home":"AI Search"}</button>
      <img className="w-10 h-10 m-2" alt=' ' src={user?.photoURL}/> 
     <p className='text-white font-bold p-3 mt-1'>{user?.displayName}</p>
     <button className="text-red-500 font-bold cursor-pointer" onClick={handleclick}>Sign Out</button>


    </div>
    </div>

  }
    </div>
)
}

export default Header