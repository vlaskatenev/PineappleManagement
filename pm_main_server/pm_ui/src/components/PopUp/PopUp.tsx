import React from 'react'
import './PopUp.css'
import {usePopUp} from './PopUpContex'

//@ts-ignore
const RenderPopUp = (props) => {
    //@ts-ignore
    const {visible, toogle} = usePopUp()

    if (!visible) return null

    return (
        <div className="modal" onClick={() => toogle(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}

export default RenderPopUp
