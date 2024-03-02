import React from 'react'

interface Props{
    params: {id: string}
}

function TeacherPageId({params}: Props) {
  return (
    <div className='text-2xl'>
      {params.id}
    </div>
  )
}

export default TeacherPageId
