import React,{useEffect, useState} from 'react'
import { Container } from '../components'
import PostForm from '../components/Post-form/PostForm'
import appwriteService from '../appwrite/blogConfig'
import { useNavigate, useParams } from 'react-router-dom'
function EditPost() {
    const [post, setPosts] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if (slug) {
            appwriteService.getPost(slug).then((post)=>{
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    },[slug, navigate])
  return post ? (
    <PostForm post={post} />
  ) : null
}

export default EditPost
