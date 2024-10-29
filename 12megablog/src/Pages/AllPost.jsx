import React, {useState, useCallback, useEffect} from 'react'
import { Container } from '../components'
import PostCard from '../components/PostCard'
import appwriteService from '../appwrite/blogConfig'

function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        appwriteService.getPost([]).then((post)=>{
            if(post){
                setPosts(post.documents)
            }
        })
    },[])
    
  return (
    <div className='w-full py-8'>
       <Container>
        <div className='flex flex-wrap'>
            {posts.map((post)=>(
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
       </Container>
    </div>
  )
}

export default AllPost
