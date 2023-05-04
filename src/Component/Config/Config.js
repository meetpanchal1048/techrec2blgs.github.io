import React from 'react'
import './ConfigApp.css'

const Config = () => {

    function generateLink() {
        const option = document.getElementById("option").value;
        const option1 = document.getElementById("option1").value;
        const option2 = document.getElementById("option2").value;
        const option3 = document.getElementById("option3").value;

        if (option && option1 && option2 && option3) {
            const link = `#${option}+${option1}+${option2}+${option3}`;
            document.getElementById("result").innerHTML = `<a href="${link} "  className="result1">Click Me</a>`;
        } else {
            alert("Please Select All Options")
            // document.getElementById("result").innerHTML = "Please select all options.";
        }
    }
    return (
        <>

            <div className="config-main" id='config'>
                <h3>Configure.</h3>
                <div className="config-items">
                    <div className="config-item">
                        <h2>Whats Budget</h2>
                        <select id="option" className="optionss">
                            <option value="">Select Budget</option>
                            <option value="Budget">Budget (10k-30k)</option>
                            <option value=" Premium">Premium (35k+)</option>
                        </select>
                    </div>
                    <div className="config-item">
                        <h2>What's Priority</h2>
                        <select id="option1" className="optionss">
                            <option value="">Select Usage</option>
                            <option value="Budget">Budget</option>
                            <option value="Photography">Photography</option>
                            <option value="Gaming">Gaming</option>
                        </select>
                    </div>
                    <div className="config-item">
                        <h2>Connectivity</h2>
                        <select id="option2" className="optionss">
                            <option value="">5G/4G</option>
                            <option value="5G">5G</option>
                            <option value="4G">4G</option>
                        </select>
                    </div>
                    <div className="config-item">
                        <h2>Brand Prefernce</h2>
                        <select id="option3" className="optionss">
                            <option value="">Select Brand</option>
                            <option value="AnyBrand">Any Brands</option>
                            <option value="NonChinese">Non-chineseBrands</option>
                        </select>
                    </div>
                </div>
                    <div className="config-finish">
                        <div className="finish">
                            <button onClick={generateLink} className="bottom-button">Generate Link</button>
                            <p id="result"></p>
                        </div>
                    </div>
            </div>

        </>
    )
}

export default Config