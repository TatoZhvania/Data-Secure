import React from 'react'
import './ContactStyles.css'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="container">
                <div className="form-container">
                    
                    <form>
                            <h1>
                                <Link to="/"><FaArrowLeft className='arrow-icon'/></Link> 
                                <span>Contact</span> Us</h1>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder='Enter your name'/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='Enter your email'/>
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows='10' placeholder='Text us a message...'/>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact