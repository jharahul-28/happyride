import React, { useState } from 'react'
import { CiUser } from "react-icons/ci";
import { FaMinus } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { IoBag } from "react-icons/io5";
import './Load.css'

const Load = () => {
    const [pasValue, setPasValue] = useState(1);
    const [bagValue, setBagValue] = useState(0);

    const onPasDec = () => {
        if (pasValue === 1) setPasValue(1);
        else
            setPasValue(pasValue - 1);
    }
    const onPasInc = () => {
        setPasValue(pasValue + 1);
    }

    const onBagDec = () => {
        if (bagValue === 0) setBagValue(0);
        else
            setBagValue(bagValue - 1);
    }
    const onBagInc = () => {
        setBagValue(bagValue + 1);
    }

    return (
        <div className='loadContainer'>
            <div className="containerDetail">
                <p>PASSENGER</p>
                <div className="indContainer">
                    <CiUser />
                    <div className="value">
                        <FaMinus onClick={onPasDec} />
                        {pasValue}
                        <MdAdd onClick={onPasInc} />
                    </div>
                </div>
            </div>
            <div className="containerDetail">
                <p>BAGGAGE</p>
                <div className="indContainer">
                    <IoBag />
                    <div className="value">
                        <FaMinus onClick={onBagDec} />
                        {bagValue}
                        <MdAdd onClick={onBagInc} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Load