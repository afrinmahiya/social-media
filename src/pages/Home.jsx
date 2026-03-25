import React from 'react'
import Photo from '../components/Photo'
import Profileheader from '../components/Profileheader'
import About from '../components/About'
import Video from '../components/video'
import PostCard from '../components/common/PostCard'

const Home = () => {
  return (
    <div>
      <Profileheader />
      <div className="flex gap-3.75 items-start">
        <div>

          <About />
          <Photo />
          <Video />
        </div>
        <PostCard />
      </div>
    </div>
  )
}

export default Home
