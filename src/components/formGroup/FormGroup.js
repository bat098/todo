import React from 'react'
import styles from './FormGroup.module.scss'


const FormGroup = ({ label, type, value, handleChange }) => {
    return (
        <div className={styles.formControl}>
            <label className={styles.label} htmlFor={type}>{label}</label>
            <input className={styles.input} type={type} name={type} value={value} onChange={handleChange} />
        </div>
    )
}

export default FormGroup
