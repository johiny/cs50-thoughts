import { useState, useEffect} from "react";
import { createContext, useContext} from "react";
import axios from "axios";
import fakeAxios from "../media/fakequery";
import usePaginationManager from "./usePaginationManager";
const ThoughtsContext = createContext()

const ThoughtsProviderAndController = ({children}) => {
    const apiEndpoint = import.meta.env.VITE_API
    const [thoughts, setThoughts] = useState([])
    const numberOfThoughtsPerCall = 120
    const [newThoghtsComing, setNewThoughtsComing] = useState(false)
    const [filters, setFilters] = useState({feeling: null, createdDate: 'desc', upVotes: 'desc', downVotes: null })
    const [apiCallIsLoading, setApiCallIsLoading] = useState(false)
    const [skip, setSkip] = useState(0)
    const [limits, setLimits] = useState({right: false, left: true})
    const [startIndex, setStartIndex] = useState(0)
    const {currentPage, frontPageChanger, noMoreLeft, noMoreRight} = usePaginationManager({thoughts, startIndex, setStartIndex, newThoghtsComing, setNewThoughtsComing})

    const axiosQuery = `thoughts?${ filters.feeling ? `feeling=${filters.feeling}&` : '' }${filters.createdDate ? `createdDate=${filters.createdDate}&` : ''}${ filters.upVotes ? `upVotes=${filters.upVotes}&` : ''}${filters.downVotes ? `DownVotes=${filters.downVotes}&`: ''}`
    //make first query to api
    useEffect(() => {
        const apiCall = async () => {
            setApiCallIsLoading(true)
            try{
                const apidata = await axios.get(`${apiEndpoint}${axiosQuery}`)
                setThoughts(apidata.data)
                setApiCallIsLoading(false)
            }
            catch(err){
                console.log(err)
                setThoughts([])
            }
        }
        apiCall()
    },[filters])

    //see if there is more thought
    const checkForMore = async (direction) => {
        if(direction === 'right' && limits.right != true){
            setApiCallIsLoading(true)
            try{
                const newThoughts = await axios.get(`${apiEndpoint}${axiosQuery}${`&skip=${skip + numberOfThoughtsPerCall}`}`)
                if(newThoughts.data.length){
                    setNewThoughtsComing(true)
                    setStartIndex(0)
                    setThoughts(newThoughts.data)
                    setSkip(prev => (prev + numberOfThoughtsPerCall))
                    setApiCallIsLoading(false)
                    setLimits(prev => ({...prev, left: false}))
                    return true
                }
                else{
                    setLimits(prev => ({...prev, right: true}))
                    setApiCallIsLoading(false)
                    return false
                }
            }
            catch(err){
                console.log(err)
                setApiCallIsLoading(false)
                return false
            }
        }
        else if(direction === 'left' && limits.left != true){
            setApiCallIsLoading(true)
            try{
                const newThoughts = await axios.get(`${apiEndpoint}${axiosQuery}${ skip > numberOfThoughtsPerCall ? `&skip=${skip - numberOfThoughtsPerCall}` : ''}`)
                setNewThoughtsComing(true)
                setStartIndex(108)
                setThoughts(newThoughts.data)
                setSkip(prev => (prev - numberOfThoughtsPerCall))
                setApiCallIsLoading(false)
                setLimits(prev => ({...prev, right: false}))
                if(skip - numberOfThoughtsPerCall  <= 0){
                    setLimits(prev => ({...prev, left: true}))
                }
                    return true
                }
            catch(err){
                console.log(err)
                setApiCallIsLoading(false)
                return false
            }
        }
        return false     
    }
    return(
        <ThoughtsContext.Provider value={{thoughts, filters, setFilters, setApiCallIsLoading, apiCallIsLoading, setThoughts, currentPage, frontPageChanger, noMoreLeft, noMoreRight, checkForMore, newThoghtsComing, setNewThoughtsComing}}>
            {children}
        </ThoughtsContext.Provider>
    )
}

const useThoughtsProviderAndController = () => {
    const context = useContext(ThoughtsContext)
    return context
}

export {ThoughtsProviderAndController, useThoughtsProviderAndController}