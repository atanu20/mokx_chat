import React from 'react'
import Message from './Message';
import { chatData } from '../data/fdata';
import { useHistory  } from 'react-router-dom';


const ChatDet = () => {
   const his= useHistory()
   const onSub=async(e)=>{
    e.preventDefault()
   }
 
  return (
    <>
    <div className="body_box">
    <div className="chat_Details">
        <div className="indi_chat_itemss">
        <i class="fa fa-long-arrow-left mr-4 cur" onClick={()=>his.push("/chat")} aria-hidden="true"></i>
<img src="../image/user.png" alt="" />
<div>
    <p className=''>Arya</p>   
    <small>Vedic Ai Bot</small>
</div>

        </div>

        <p className='texty m-0'><span>A</span>/<span>क</span> </p>
</div>
<div className="chat_section">
<div className="center-chat">
{
    chatData?.map((val,ind)=>{
        return(
            <>
            
            <Message own={val.own} text={val.text}/>
            </>
        )
    })
}
</div>
<form className="input_sec" onSubmit={onSub}>
    <input type="text"  required/>
    <button><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
</form>
</div>
    </div>
    
    
    
    
    </>
  )
}

export default ChatDet