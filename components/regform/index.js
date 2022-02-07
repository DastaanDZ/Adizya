import { useState, useEffect } from "react";
import { useUserContext } from "@/context/userContext";
import updateMe from "@/lib/updateMe";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Lec1 from "../../assets/images/lec2.jpg"

import styles from "../regform/regform.module.css";

const Index = () => {
  const { auth, name, setName, id } = useUserContext();
  const [gender, setGender] = useState();
  const router = useRouter();

  useEffect(() => {}, []);

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
            <input type="text" name="INST" />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label>State</label>
            <input type="text" name="state" />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label>Phone Number</label>
            <input type="text" name="phoneno" />
          </fieldset>
        </div>
        <div className={styles.part2}>
          <fieldset className={styles.fieldset}>
            <label>Adizya ID</label>
            <input type="text" name="id" value={id} disabled />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label>Year Of Study</label>
            <input type="text" name="yos" />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label>CA Referral ID</label>
            <input type="text" name="caid" />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <div className={styles.gen_btn_container}>
              <label className={styles.gender}>Gender</label>
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

export default Index;
