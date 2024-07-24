import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

    return (
        <div className='main'>
            <div className="nav">
                <p>Google Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">

                {!showResult
                ? <>
                <div className="greet">
                    <p><span>Hey, Ali Zulfiqar</span></p>
                    <p>How can i assist you?</p>
                </div>
                <div onClick={()=>alert("Sorry, the random question feature is not available yet. I'm working on it. Thanks for your patience! - Ali Zulfiqar")} className="cards">
                    <div className="card">
                        <p>Suggest some beautiful places to see on my upcoming roadtrips</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Breifly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstrom team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card excep">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                </>
                :<div className='result'>
                    <div className="result-title">
                        <img  src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img  src={assets.gemini_icon} alt="" />
                        {loading
                        ?
                    <>
                    <div className="loader">
                            <hr />
                            <hr />
                            <hr />
                    </div>
                    </>: ( <p dangerouslySetInnerHTML={{__html:resultData}}></p> )
                    }
                       
                    </div>
                </div>
                }

                
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter your prompt...' />
                        <div>
                            <img onClick={()=>alert("Sorry, the video and audio features are not available yet. I'm working on making on it. Thanks for your patience! - Ali Zulfiqar")} src={assets.gallery_icon} alt="" />
                            <img onClick={()=>alert("Sorry, the video and audio features are not available yet. I'm working on making on it. Thanks for your patience! - Ali Zulfiqar")} src={assets.mic_icon} alt="" />
                           {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null} 
                        </div>
                    </div>
                <p className="bottom-info">Google Gemini may provide incorrect info, including about people so double-check its responses.Your privacy and Gemini Apps</p>
                </div>
            </div>
        </div>
    )
}

export default Main








