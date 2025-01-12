"use client"
import React, { useEffect, useState } from 'react'

const Commentbox = () => {

    const [comment, setComment] = useState('')
    const [comments, setComments] = useState<string[]>([])
   useEffect(()=> {
    const CommentSave = localStorage.getItem('comments')
    if(CommentSave){
        setComments(JSON.parse(CommentSave))}
   })


    const addComments = () => {
        if(comment.trim() !== '')
        {setComments([...comments, comment])
            setComment('')
            localStorage.setItem('comments', JSON.stringify([...comments, comment]))
        }}
  return (
    <div>
        <h1 className='text-2xl font-bold mt-4 text-blue-600'>
         Leave a Comment 
        </h1>
<input
type="text"
value={comment}
onChange={(e)=>setComment(e.target.value)}
placeholder='Enter your comment'
className='border border-blue-500 mt-3 rounded w-80 p-2'/>
   <br/>
   <button className='bg-blue-500 text-white p-2 rounded mt-2'
   onClick={addComments}>
    Add Comment
   </button>
   <div className='mt-4'>
    <h2 className="text-green-400">
        Comments:
    </h2>
    {comments.length === 0 ? (<p>No comments added!</p>):
    <ul>
    {comments.map((data, index)=>(
        <li key={index}> {data}</li>

    ))}</ul>
}
   </div>
    </div>
  )
}

export default Commentbox