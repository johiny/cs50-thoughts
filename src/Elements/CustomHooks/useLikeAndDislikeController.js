import { useState } from "react";
import fakeAxiosPost from '../../media/fakePost'
import { toast } from "react-toastify";
const useLikeAndDislikeController = (props) => {

    const [likesAndDislikes, setLikesAndDislikes] = useState({likes: props.upVotes, dislikes: props.downVotes})
    const likeAndDislikeHandler = (feeling) => {
        const endpoint = feeling === 'likes' ? 'upVote' : 'DownVote'
        props.setIsLoading(true)
        toast.promise(fakeAxiosPost(),{
            pending: {
                render(){
                  return `Wait a little...`
                }
            },
            success: {
                render({data}){
                    console.log(likesAndDislikes)
                    setLikesAndDislikes(prev =>({...prev, [feeling]: prev[feeling] + 1}))
                    props.setIsLoading(false)
                  return `${data}`
                }
            },
            error: {
                render({data}){
                    props.setIsLoading(false)
                    return `${data} try again!`
                    }
            }
        })
    }
    return {likeAndDislikeHandler, likesAndDislikes}
}

export default useLikeAndDislikeController