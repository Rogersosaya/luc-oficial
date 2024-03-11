import React from 'react'
import Marquee from 'react-fast-marquee'
import CardCommentFast from '../components/CardCommentFast';
import Container from '@/components/container/Container';
import { getCommentsRecent } from '@/actions/comment/get-comments-recent';
const urlCollaborations = [
    "/images/marquee1.png",
    "/images/marquee2.png",
    "/images/marquee3.png",
    "/images/marquee4.jpg",
    "/images/marquee5.jpg",
  ];
async function CommentsFast() {
  const commentsRecent = await getCommentsRecent()
  return (
    <div className='my-44'>
    <Container>
      <div className="text-center">
        <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
          Comentarios recientes
          <br className="hidden md:inline-block" /> 
        </h2>
        <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl">
          Últimos 15 comentarios de alumnos dando su opinión sobre un profesor que les enseñó. Escribe un comentario y se mostrará aquí 
        </p>
      </div>
    </Container>
    <div className="mb-8" >
        
      <Marquee>
        {
            commentsRecent.map((comment) => {
                return (<CardCommentFast key={comment.id} comment={comment} />)
            })
        }
        
      </Marquee>
    </div>
    </div>
  )
}

export default CommentsFast
