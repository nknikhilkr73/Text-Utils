import React, { useState } from 'react';



function TextForm(props) {
    const [text, setText] = useState('')
    const [original, setOriginal] = useState('')

    const handleUpClick = () => {

        let newText = text.toUpperCase()
        setText(newText)
        text !== '' && props.showAlert("Converted to Uppercase", "success")
    }
    const handleOnChange = (e) => {
        setOriginal(e.target.value)
        setText(e.target.value)

    }

    const handleLowClick = () => {

        let newText = text.toLowerCase()
        setText(newText)
        text !== '' && props.showAlert("Converted to lowerCase", "success")
    }

    const handleUpClickOriginal = () => {
        setText(original)
        text !== '' && props.showAlert("Converted to Original Text", "success")
    }

    const handleCopy = () => {

        var text = document.getElementById("mybox")
        text.select();

        navigator.clipboard.writeText(text.value)
        // document.getSelection().removeAllRanges();
        text !== '' && props.showAlert("Text copied", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        text !== '' && props.showAlert("Extra Spaces Removed", "success")
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea style={{
                        border: "2px solid black", backgroundColor: props.mode === 'light' ? '#343a40' : 'white', color: props.mode === 'light' ? 'white' : 'black'
                    }} className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClickOriginal}>Original Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>LowerCase Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>

            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                <p>{text.length} Characters and {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length <= 1 ? "Word" : "Words"}</p>
                <p>{(0.008 * (text.split(/\s+/).filter((element) => { return element.length !== 0 }).length)).toFixed(2)} Minutes to read </p>
            </div>
        </>
    )
}

export default TextForm