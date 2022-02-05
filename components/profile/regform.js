import React from "react";
import { useState, useEffect } from "react";
import { useUserContext } from "@/context/userContext";
import styles from "./regform.module.css";
import updateMe from "@/lib/updateMe";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getMe from "@/lib/getMe";

const ProfileReg = () => {
  const { auth, name, setName, id, setId } = useUserContext();
  const [inst, setInst] = useState();
  const [state, setState] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [yos, setYos] = useState();
  const [gender, setGender] = useState();
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("uid")) {
      getMe(localStorage.getItem("uid")).then((res) => {
        setName(res.name);
        setInst(res.inst);
        setState(res.State);
        setPhoneNo(res.phoneno);
        setYos(res.yos);
        setGender(res.gender);
        setId(res.customId);
      });
    } else router.push("/");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: name,
      inst: e.target.INST.value,
      State: e.target.state.value,
      phoneno: e.target.phoneno.value,
      yos: e.target.yos.value,
      gender: gender,
    };
    updateMe(auth.user.uid, data);
    toast.success("Profile Updated", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }

  return (
    <>
      <div className={styles.form_title}>
        <h2 className={styles.h2}>Fill Details</h2>
        <hr className={styles.hr} />
      </div>
      <form
        className={styles.register_form}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className={styles.part1}>
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              required
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label>School/College</label>
            <input type="text" name="INST" value={inst} />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label>State</label>
            <input type="text" name="state" value={state} />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label>Phone Number</label>
            <input type="text" name="phoneno" value={phoneNo} />
          </fieldset>
        </div>
        <div className={styles.part2}>
          <fieldset className={styles.fieldset}>
            <label>Adizya ID</label>
            <input type="text" name="id" value={id} disabled />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label>Year Of Study</label>
            <input type="text" name="yos" value={yos} />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <div className={styles.gen_btn_container}>
              <label>Gender</label>
              <button
                className={styles.gen_button}
                onClick={(e) => {
                  e.preventDefault();
                  setGender("MALE");
                }}
              >
                MALE
              </button>
              <button
                className={styles.gen_button}
                onClick={(e) => {
                  e.preventDefault();
                  setGender("FEMALE");
                }}
              >
                FEMALE
              </button>
              <button
                className={styles.gen_button}
                onClick={(e) => {
                  e.preventDefault();
                  setGender("OTHER");
                }}
              >
                OTHER
              </button>
            </div>
          </fieldset>

          <div className={styles.btn_container}>
            <button type="submit" className={styles.button}>
              REGISTER
            </button>
          </div>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ProfileReg;
