import React from 'react'

const Message = ({own,text}) => {
  return (
    <>
    <div className={own ? "message own" : "message right_rad"}>
           <div className="messageTop">
           <img src="../image/user.png" alt="" />
          <div>
          <p className={own ? "messageText left_rad" : "messageText right_rad"}>{text}</p>
          <div className="messageBottom"> 09.25 AM </div>
          </div>
            </div>
            
           

            
           </div>
    
    </>
  )
}

export default Message