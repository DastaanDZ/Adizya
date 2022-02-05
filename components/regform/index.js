import React from "react";
import { useState } from "react";

import styles from "../regform/regform.module.css";

const Index = () => {
  const [form, setForm] = useState({
    name: "",
    inst: "",
    state: "",
    phone: "",
    id: "",
    yof: "",
  });

  const handleChange = (e) => {
    // setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e)
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className={styles.form_title}>
        <h2 className={styles.h2}>Register</h2>
        <hr className={styles.hr} />
      </div>
      <form className={styles.register_form} onSubmit={handleSubmit}>
        <div className={styles.part1}>
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset className={styles.fieldset}>
            <label>School/College</label>
            <input
              type="text"
              name="college"
              value={form.inst}
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset className={styles.fieldset}>
            <label>State</label>
            <input
              type="text"
              name="email"
              value={form.state}
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset className={styles.fieldset}>
            <label>Phone Number</label>
            <input
              type="text"
              name="email"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </fieldset>
        </div>
        <div className={styles.part2}>
          <fieldset className={styles.fieldset}>
            <label>Adizya ID</label>
            <input
              type="text"
              name="email"
              value={form.id}
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset className={styles.fieldset}>
            <label>Year Of Study</label>
            <input
              type="text"
              name="email"
              value={form.yof}
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset className={styles.fieldset}>
            <div className={styles.gen_btn_container}>
              <label>Gender</label>
              <button className={styles.gen_button}>MALE</button>
              <button className={styles.gen_button}>FEMALE</button>
              <button className={styles.gen_button}>OTHER</button>
            </div>
          </fieldset>
          <div className={styles.btn_container}>
            <button className={styles.button}>REGISTER</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Index;
