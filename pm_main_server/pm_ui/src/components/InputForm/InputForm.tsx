import React from 'react'
import {Button} from 'react-bootstrap'
import './InputForm.css'

//@ts-ignore
const InputForm = (props) => {
    const refInputForm = React.createRef()

    return (
        <div className="inputForm">
            <form
                onSubmit={(event) => {
                    event.preventDefault()
                    //@ts-ignore
                    return props.handleClickButton(refInputForm.current.value.trim())
                }}
            >
                <div className="block__input">
                    <Input {...props} ref={refInputForm} />
                </div>
                {button}
            </form>
        </div>
    )
}

export default InputForm

const Input = React.forwardRef((props, ref) => {
    //@ts-ignore
    return <input type={props.type} className="input" ref={ref} />
})

const button = <Button type="submit">Button</Button>
