import React from "react";
import { useState, useEffect } from "react";
import { useUserContext } from "@/context/userContext";
import updateMe from "@/lib/updateMe";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getMe from "@/lib/getMe";

import Lec1 from "../../assets/images/lec2.jpg"

import styles from "./regform.module.css";

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
      <div className={styles.user}> 
        <img src={Lec1.src} alt="" className={styles.user_image}/>
        <h2 className={styles.h2}>Fill Details</h2>
      </div>
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
              required
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label>School/College</label>
            <input
              type="text"
              name="INST"
              value={inst}
              onChange={(e) => {
                setInst(e.target.value);
              }}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label>State</label>
            <input
              type="text"
              name="state"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneno"
              value={phoneNo}
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
            />
          </fieldset>
        </div>
        <div className={styles.part2}>
          <fieldset className={styles.fieldset}>
            <label>Adizya ID</label>
            <input type="text" name="id" value={id} disabled />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label>Year Of Study</label>
            <input
              type="text"
              name="yos"
              value={yos}
              onChange={(e) => {
                setYos(e.target.value);
              }}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label>CA Referral ID</label>
            <input type="text" name="caid" />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <div className={styles.gen_btn_container}>
              <label className={styles.gender}>Gender</label>
              <button
                style={{ color: gender === "MALE" ? "#081832" : "", background: gender === "MALE" ? "#e8ebae" : "" }}
                className={styles.gen_button}
                onClick={(e) => {
                  e.preventDefault();
                  setGender("MALE");
                }}
              >
                MALE
              </button>
              <button
                style={{ color: gender === "FEMALE" ? "#081832" : "", background: gender === "FEMALE" ? "#e8ebae" : "" }}
                className={styles.gen_button}
                onClick={(e) => {
                  e.preventDefault();
                  setGender("FEMALE");
                }}
              >
                FEMALE
              </button>
              <button
                style={{ color: gender === "OTHER" ? "#081832" : "", background: gender === "OTHER" ? "#e8ebae" : "" }}
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
        </div>
      </form>
      <div className={styles.btn_container}>
            <button type="submit" className={styles.button}>
              REGISTER
            </button>
          </div>
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
