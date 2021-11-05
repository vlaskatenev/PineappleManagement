import React, {useContext, useState} from 'react'

const PopUpContext = React.createContext(null)

export const usePopUp = () => {
    return useContext(PopUpContext)
}

//@ts-ignore
const RenderPopUpContex = ({children}) => {
    const [modalActive, setModalActive] = useState(false)
    //@ts-ignore
    const toogle = (modalActive) => setModalActive(modalActive)

    return (
        <PopUpContext.Provider
        //@ts-ignore
            value={{
                visible: modalActive,
                toogle,
            }}
        >
            {children}
        </PopUpContext.Provider>
    )
}

export default RenderPopUpContex
