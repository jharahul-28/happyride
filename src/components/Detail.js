import React from 'react'
import './Detail.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Detail = () => {
    return (
        <div className='details'>
            <div className="emailID fields">
                {/* <MdOutlineMailOutline className='detailIcon'/> */}
                <input type="text" placeholder='Email' />
            </div>
            <div className="phoneNo fields">
                {/* <FiPhone className='detailIcon'/> */}
                <input type="text" placeholder='Phone Number' />
            </div>
        </div>
    )
}

export default Detail