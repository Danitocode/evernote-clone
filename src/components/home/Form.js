import React from 'react'

const Form = () => {

    return (
        <div className="section">
            <form className="white">
                <h5 className="grey-text text-darken-3">New Note</h5>
                <div className="input-field ">
                    <input id="first_name" type="text" className="validate"/>
                    <label htmlFor="note_title">Note Title</label>
                </div>
                <div className="input-field">
                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                    <label htmlFor="textarea1">Note Content</label>
                </div>
                <button className="btn green">Add</button>
            </form>
        </div>
    )
}

export default Form
