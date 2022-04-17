import React, {useState} from 'react'

const CommentList = ({comments}) => {

    const comlist = comments.map((c) => 
    <div>
        {c.userName == "" ? <span>Anonymous:</span> : <span>{c.userName}:</span> }<span style={{margin:"15px"}}>{c.comment}</span>
    </div> )
   
  return (
  <div>
      {comlist}
  </div>
  )
}

export default CommentList