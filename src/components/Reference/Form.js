import { forwardRef, useImperativeHandle, useState } from "react"

const Form = (props, ref) => {
    const [inputField, setInputField] = useState('')
    
    const handleOnChange = (e) => {
        setInputField(e.target.value)
    }
    const restForm = ()=> {
        setInputField('')
    }
    // The useImperativeHandle hook in React allows a child component to expose certain functions or 
    // properties to its parent component, giving the parent component more control over the child component. 
    useImperativeHandle(ref, () => ({
        restForm
    }))
    return <>
        <h4>Form</h4>
        <p>Name</p>
        <input value={inputField} onChange={handleOnChange}></input>
    </>
}
// It is a method that lets React forward the React refs to the child component
export default forwardRef(Form)