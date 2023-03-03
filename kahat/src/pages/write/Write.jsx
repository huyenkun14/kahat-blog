import React from 'react'
import './Write.css'

const Write = () => {
    return (
        <div className='write'>
            <img src="https://www.travelassociates.com/sites/v2.travel-associates.com.au/files/fcl-blog/hanoi-hoankiem.jpg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="fa-solid fa-image"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Tell your story...' type='text' className='writeInput'></textarea>
                </div>
                <button className="writeSubmit">Submit</button>
            </form>
        </div>
    )
}

export default Write