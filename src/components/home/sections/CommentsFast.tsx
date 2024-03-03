import React from 'react'
import Marquee from 'react-fast-marquee'
import CardCommentFast from '../components/CardCommentFast';
import Container from '@/components/container/Container';
const urlCollaborations = [
    "/images/marquee1.png",
    "/images/marquee2.png",
    "/images/marquee3.png",
    "/images/marquee4.jpg",
    "/images/marquee5.jpg",
  ];
function CommentsFast() {
  return (
    <div className='my-44'>
    <Container>
      <div className="text-center">
        <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
          Comentarios recientes
          <br className="hidden md:inline-block" /> 
        </h2>
        <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl">
          Últimos 20 comentarios de alumnos dando su opinión sobre un profesor que les enseñó. Escribe un comentario y se mostrará aquí 
        </p>
      </div>
    </Container>
    <div className="mb-8" >
        
      <Marquee>
        {
            urlCollaborations.map((urlCollaboration) => {
                return (<CardCommentFast key={urlCollaboration}  />)
            })
        }
        
      </Marquee>
    </div>
    </div>
  )
}

export default CommentsFast
