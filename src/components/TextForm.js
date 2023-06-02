import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    // text = "Enter new text" => Wrong way to change the state
    // setText("Enter new text") => Correct way to change the state    

    const uppercase = () => {
        setText(text.toUpperCase());
        props.showAlert('Converted to uppercase');
    }
    const lowercase = () => {
        setText(text.toLowerCase());
        props.showAlert('Converted to lowercase');
    }
    const clear = () => {
        setText('');
        props.showAlert('Text cleared');
    }
    const copy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Text copied to clipboard');
    }
    const removeExtraSpaces = () => {
        setText(text.split(/[ ]+/).join(" "));
        props.showAlert('Extra spaces removed');
    }

    const onchange = (event) => setText(event.target.value);

    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="my-4">
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} value={text} onChange={onchange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-secondary" onClick={uppercase}>Convert To Uppercase</button>
                <button className="btn btn-secondary mx-3" onClick={lowercase}>Convert To Lowercase</button>
                <button className="btn btn-secondary" onClick={clear}>Clear Text</button>
                <button className="btn btn-secondary mx-3" onClick={copy}>Copy Text</button>
                <button className="btn btn-secondary" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-4">
                <h3>Your text summary</h3>
                <p><b>{text.split(' ').filter((num) => num !== '').length}</b> words and <b>{text.length}</b> characters</p>
                <p><b>{(0.008 * text.split(' ').filter((num) => num !== '').length).toFixed(2)}</b> minutes read</p>
                <h3>Preview</h3>
                <p>{text === '' ? 'Enter text to preview here' : text}</p>
            </div>
        </>
    )
}
