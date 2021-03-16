import React from 'react';
import useInput from '../../customhook/useInput'
import {addNote} from '../../store/actions/noteActions';
import {useDispatch} from 'react-redux';

const Form = () => {
    const [title, bindTitle, resetTitle] = useInput();
    const [content, bindContent, resetContent] = useInput();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote({title, content}));
        resetTitle();
        resetContent();
    }

    return (
        <div className="section">
            <form  className="white">
                <h5 className="grey-text text-darken-3">New Note</h5>
                <div className="input-field ">
                    <input id="first_name" type="text" className="validate" {...bindTitle}/>
                    <label > Note Title</label>
                </div>
                <div className="input-field">
                    <label >Note Content</label>
                    <textarea id="textarea1" className="materialize-textarea" {...bindContent}/>
                </div>
                <button className="btn green" onClick={handleSubmit}>Add</button>
            </form>
        </div>
    )
}

export default Form
