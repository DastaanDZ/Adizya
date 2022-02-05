import { auth, db } from "firebaseconfig/clientApp";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  query,
  getDocs,
  collection,
  doc,
  where,
  setDoc,
} from "firebase/firestore";

const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 6);

const signInWithGoogle = async (setName, setIsNewReg) => {
  try {
    const googleProvider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    localStorage.setItem("uid", user.uid);
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      const ref = doc(db, "users", user.uid);
      const customId = "AD-" + nanoid();
      await setDoc(ref, {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        customId: customId,
      });
      localStorage.setItem("customId", customId);
      setName(user.displayName);
      setIsNewReg(true);
    } else {
      localStorage.setItem("customId", docs.docs[0].data().customId);
      setName(docs.docs[0].data().name);
      setIsNewReg(false);
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export { signInWithGoogle };
