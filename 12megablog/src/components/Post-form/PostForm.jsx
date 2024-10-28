import React, {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button'
import Input from '../Input'
import RTE from '../RTE'
import Select from '../Select'
import appwriteService from '../../appwrite/blogConfig'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm(post) {
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues : {
            title : post?.title || '',
            slug : post?.slug || '',
            content : post?.content || '',
            status : post?.status || '',
        }
    })
    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)

    const submit = async(data) => {
        if (post) {
            const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) : null
            if (file) {
                appwriteService.deleteFile(post.featuredImage)
            }
            const dbPost = appwriteService.updatePost(
                post.$id, 
                {...data, 
                featuredImage : file ? file.$id : undefined,
            },
                )
            if(dbPost) {
                navigate(`/post/${dbPost.$id}`)
            } else {
                const file = appwriteService.updatePost(data.image[0])
                if(file) {
                    const fileId = file.$id
                    data.featuredImage = fileId
                    const dbPost = await appwriteService.updatePost({
                        ...data,
                        userId: userData.$id,
                    })
                    if(dbPost){
                        navigate(`/post/${dbPost.$id}`)
                    }
                }
            }
        }
    }

  return (
    <div>
      
    </div>
  )
}

export default PostForm
