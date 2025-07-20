import { useSelector } from "react-redux"
import Header from "./Header"
import MainConatiner from "./MainConatiner"
import SecondConatiner from "./SecondConatiner"
import AiSearch from "./AiSearch"


function Browse() {

  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

  

  return (
    <div>
    <Header/>
{ showGptSearch ? (
   <AiSearch/>
 ) : (
   <>
     <MainConatiner/>
     <SecondConatiner/>
   </>
 )}
    </div>
  )
}

export default Browse