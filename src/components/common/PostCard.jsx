import React from 'react'
import Creator from './Creator'
import Content from './Content'

const PostCard = () => {
  return (
    <div className='pl-5 pt-4.25 pr-10.25 bg-white rounded-[15px] w-[585px] h-[317px] '>
      <Creator/>
      <Content/>

    </div>
  )
}

export default PostCard
