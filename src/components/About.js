import React, { useState } from 'react'

export default function About() {
    const [dm, setDM] = useState({
        backgroundColor: 'white',
        color: 'black'
    });

    const [btnText, setBtnText] = useState('Enable Dark Mode');

    const toggleMode = () => {
        if (dm.color === 'white') {
            setDM({
                backgroundColor: 'white',
                color: 'black'
            })
            setBtnText('Enable Dark Mode');
        } else {
            setDM({
                backgroundColor: '#28242c',
                color: 'white'
            });
            setBtnText('Enable Light Mode');
        }
    }

    return (
        <div className='container p-5 rounded' style={dm}>
            <h2 className='my-3'>About Us</h2>
            <div className="accordion" id="accordionExample" style={dm}>
                <div className="accordion-item" style={dm}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={dm} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={dm}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={dm} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={dm}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={dm} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={toggleMode} className="btn btn-secondary my-4">{btnText}</button>
        </div>
    )
}