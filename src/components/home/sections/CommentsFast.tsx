import React from 'react'
import Marquee from 'react-fast-marquee'
import CardCommentFast from '../components/CardCommentFast';
const urlCollaborations = [
    "/images/marquee1.png",
    "/images/marquee2.png",
    "/images/marquee3.png",
    "/images/marquee4.jpg",
    "/images/marquee5.jpg",
  ];
function CommentsFast() {
  return (
    <div className="mb-8">
        
      <Marquee>
        {
            urlCollaborations.map((urlCollaboration) => {
                return (<CardCommentFast key={urlCollaboration}  />)
            })
        }
        
      </Marquee>
    </div>
  )
}

export default CommentsFast
