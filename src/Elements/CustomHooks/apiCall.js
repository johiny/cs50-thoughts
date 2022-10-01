import { toast } from 'react-toastify';
import axios from "axios";
const apiCall = async (route, attempsLeft, setApiCallIsLoading, setThoughts) => {
    setApiCallIsLoading(true)
            try{
                const apidata = await axios.get(route)
                setThoughts(apidata.data)
                setApiCallIsLoading(false)
            }
            catch(err){
                if(attempsLeft > 0){
                    apiCall(route, attempsLeft - 1, setApiCallIsLoading, setThoughts)
                }
                else{
                    console.log(err)
                    setThoughts([])
                     toast.error('Something went wrong please refresh the page and try again!')
                }
            }
}

export default apiCall