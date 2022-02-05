import { useState } from "react"

import styles from '../registerform/registerform.module.css'

const Index = () => {
    
    const [form, setForm] = useState({ name: '', inst: '',phone: '' })

    const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

    function handleSubmit(e) {
		e.preventDefault()};

  return (
    <>
    <div className={styles.form_title}> 
       <h2 className={styles.h2}>Register</h2>
       <hr className={styles.hr}/>
    </div>
      <form className={styles.register_form} onSubmit={handleSubmit}>
				<fieldset >
					<label >Name*</label>
					<input type='text' name='name' value={form.name} onChange={handleChange} required />
				</fieldset>
				<fieldset className={styles.fieldset}>
					<label>Institute Name*</label>
					<input type='text' name='college' value={form.inst} onChange={handleChange} required />
				</fieldset>
				<fieldset className={styles.fieldset}>
					<label>Phone Number*</label>
					<input type='text' name='email' value={form.phone} onChange={handleChange} required />
				</fieldset>
                <div className={styles.button}> 
				<button className={styles.button}>CONTINUE &gt;</button>
                </div>
                <div className={styles.space}></div>
			</form>
    </>
  )
}

export default Index
