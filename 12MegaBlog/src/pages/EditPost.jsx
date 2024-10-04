import React from 'react'
import { useState, useEffect } from 'react'
import Container from '../components/container/Container'
import PostForm from '../components/post-form/PostForm'
import  service from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post,setPost]=useState(null);
    //to edit post, will click on the post and take it in the page
    //so to get url we use useParams
    const {slug}=useParams();
    const navigate= useNavigate();

    useEffect(()=>{
        if (slug) {
            service.getPost(slug).then((post)=>{
                if (post) {
                    setPost(post)
                }
        })
        } else {
            navigate('/')
        }
    },[slug,navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ):null
}

export default EditPost
