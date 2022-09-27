import { useState } from "react";
import fakeAxiosPost from '../../media/fakePost'
import { toast } from "react-toastify";
import axios from 'axios';

const useLikeAndDislikeController = (props) => {
    const [likesAndDislikes, setLikesAndDislikes] = useState({likes: props.upVotes, dislikes: props.downVotes})
    const api = import.meta.env.VITE_API
    const likeAndDislikeHandler = (feeling, id) => {
        const endpoint = feeling === 'likes' ? 'upVote' : 'DownVote'
        props.setIsLoading(true)
        toast.promise(axios.patch(`${api}thoughts/${id}/${endpoint}`),{
            pending: {
                render(){
                  return `Wait a little...`
                }
            },
            success: {
                render({data}){
                    console.log(data)
                    setLikesAndDislikes(prev =>({...prev, [feeling]: prev[feeling] + 1}))
                    props.setIsLoading(false)
                  return `${data.data.message}`
                }
            },
            error: {
                render({data}){
                    console.log(data)
                    props.setIsLoading(false)
                    return `${data.response.data.message}`
                    }
            }
        })
    }
    return {likeAndDislikeHandler, likesAndDislikes}
}

export default useLikeAndDislikeController