import React, { useContext } from 'react'
import Post from './Post'
import { PostList } from '../store/PostListstrore'

function CardList() {

   const { postlist} = useContext(PostList)
  return (
    <div className='card-conatiner2'>
    {postlist.map((post) => (<Post  post={post} key={post.id}  />))}  
      
    </div>
  )
}

export default CardList
