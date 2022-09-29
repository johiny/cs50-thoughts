import React from 'react';
import styled from 'styled-components';
import thumbIcon from '../media/thumbIcon.svg'
import useLikeAndDislikeController from './CustomHooks/useLikeAndDislikeController';
const LikeAndDislike = (props) => {
    const {likeAndDislikeHandler,  likesAndDislikes} = useLikeAndDislikeController(props)
  return (
    <LikeAndDislikeContainer>
        <LikesCounter>{likesAndDislikes.likes}</LikesCounter>
        <Like src={thumbIcon} onClick={() => likeAndDislikeHandler('likes', props.id)}/>
        <DislikesCounter >{likesAndDislikes.dislikes}</DislikesCounter>
        <DisLike src={thumbIcon} onClick={() => likeAndDislikeHandler('dislikes', props.id)}/>
    </LikeAndDislikeContainer>
  )
}

export default LikeAndDislike

const LikesCounter = styled.span`
grid-column: 1;
grid-row: 1;
text-align: center;
color:#17b852;
text-shadow: 0 0 0.6em #17b852;
font-family: 'Roboto', sans-serif;
font-weight: bolder;
`
const DislikesCounter = styled.span`
grid-column: 2;
grid-row: 1;
text-align: center;
color:#ac011b;
text-shadow: 0 0 0.6em #ac011b;
font-family: 'Roboto', sans-serif;
font-weight: bolder;
`
const LikeAndDislikeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1fr, 2);
    grid-template-rows: repeat(1fr, 2);
    grid-column-gap: 2vh;
    grid-row-gap: 0.8vh;
    width: 30%;
`
const Like = styled.img`
    grid-column: 1;
    grid-row: 2;
    width: 2vw;
    @media only screen and (max-width: 1200px){
        width: 4vw;
    }
    @media only screen and (max-width: 800px){
        width: 6vw;
    }
    @media only screen and (max-width: 650px){
        width: 10vw;
    }
    transition: all 0.1s ease-in-out;
    filter: invert(69%) sepia(90%) saturate(3825%) hue-rotate(101deg) brightness(95%) contrast(82%) drop-shadow(0 0 1.5px #fff) drop-shadow(0 0 0.6em #17b852);
    :hover{
        width: 2.5vw;
        @media only screen and (max-width: 1200px){
        width: 5vw;
    }
    @media only screen and (max-width: 800px){
        width: 7vw;
    }
    @media only screen and (max-width: 650px){
        width: 12vw;
    }
    }
    cursor: pointer;
`

const DisLike = styled.img`
    grid-column: 2;
    grid-row: 2;
    width: 2vw;
    @media only screen and (max-width: 1200px){
        width: 4vw;
    }
    @media only screen and (max-width: 800px){
        width: 6vw;
    }
    @media only screen and (max-width: 650px){
        width: 10vw;
    }
    filter: invert(11%) sepia(52%) saturate(6522%) hue-rotate(342deg) brightness(94%) contrast(110%) drop-shadow(0 0 0.5px #fff) drop-shadow(0 0 4px #FF0000);
    transform: rotate(-180deg);
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    :hover{
        width: 2.5vw;
        @media only screen and (max-width: 1200px){
        width: 5vw;
    }
    @media only screen and (max-width: 800px){
        width: 7vw;
    }
    @media only screen and (max-width: 650px){
        width: 12vw;
    }
    }
`