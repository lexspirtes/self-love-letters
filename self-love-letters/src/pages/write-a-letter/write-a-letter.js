import SubmitButton from "./submit-button";
import TextInput from "./text-input";
import DateInput from "./date-input";

import './write-a-letter.module.scss'


export const WriteLetter = () => {
    return (
        <>
            <div className='hi'>hi</div>
            <DateInput/>
            <TextInput/>
            <SubmitButton text='submit'/>
        </>
    );
}

