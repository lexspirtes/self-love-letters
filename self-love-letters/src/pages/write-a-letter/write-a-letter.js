import SubmitButton from "./submit-button";
import TextInput from "./text-input";
import DateInput from "./date-input";

import styles from './write-a-letter.module.scss'


export const WriteLetter = () => {
    return (
        <div className={styles.writeLetter}>
            <div className={styles.hi}>hi</div>
            <DateInput/>
            <TextInput/>
            <TextInput/>
            <SubmitButton text='submit'/>
        </div>
    );
}

