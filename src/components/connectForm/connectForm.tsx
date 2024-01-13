'use client';

import React, { ChangeEvent, useState, FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/lib/sendEmail';
import styles from './connectForm.module.css';

export type FormData = {
  name: string;
  email: string;
  message: string;
};



export default function ConnectForm() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [checked, setChecked] = useState(false); // initialize state

    const charCount = message.length;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked); // set state
    }

    const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const charCount = event.target.value.length;
        if (charCount <= 2048) {
            setMessage(event.target.value);
        }
    }

    return (
        <form className={styles.form}>
            <label htmlFor="name" className={styles.formLabel}>Name</label>
            <input type="text" id="name" name="name" placeholder="John Doe" className={styles.formInput} />

            <label htmlFor="message" className={styles.formLabel}>Explain your interest</label>
            <label className={styles.subLabel}>Please no links, if you want me to see an external resource simply explain how I can get there with a search engine. I will not click links.</label>
            <textarea
                id="message"
                name="message"
                placeholder="I really enjoy [] because..."
                className={styles.formTextArea}
                value={message}
                onChange={handleTextareaChange}
            />
            <p className={`${charCount > 2048 ? styles.red : ''} ${styles.subLabel}`}>
                {charCount}/2048 characters
            </p>
            <label htmlFor="email" className={styles.formLabel}>Email</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" className={styles.formInput} />

            <label htmlFor="email" className={styles.formLabel}>Should I tell you when I post?</label>
            <label>
                <input
                    type="checkbox"
                    checked={checked} // the checkbox reflects this state
                    onChange={handleChange} // when it changes, run handleChange
                />
            </label>

            <button type="submit" className={styles.submitButton}>Submit (currently non-functional, check back soon)</button>
        </form>
    );
};