import React from 'react'
import Marquee from 'react-fast-marquee'
import CardCommentFast from '../components/CardCommentFast';
import Container from '@/components/container/Container';
import { getCommentsRecent } from '@/actions/comment/get-comments-recent';
import Line from '../../ui/line/Line';
import SwiperComments from '../components/SwiperComments';

async function CommentsFast() {
  const commentsRecent = await getCommentsRecent()
  return (
    <div className='my-64'>
    <Container>
      <div className="text-center">
        <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
          Comentarios recientes
          <br className="hidden md:inline-block" /> 
        </h2>
        
        <Line/>
        <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl">
          Últimos 15 comentarios de alumnos dando su opinión sobre un profesor que les enseñó. Escribe un comentario y se mostrará aquí 
        </p>
      </div>
    </Container>
    <div className="mb-8  from-zinc-950 to-zinc-700 bg-gradient-to-r mt-24 py-6 px-4 rounded-lg" >
        <SwiperComments commentsRecent={commentsRecent}/>
      {/* <Marquee>
        {
            commentsRecent.map((comment) => {
                return (<CardCommentFast key={comment.id} comment={comment} />)
            })
        }
        
      </Marquee> */}
    </div>
    </div>
  )
}

export default CommentsFast
