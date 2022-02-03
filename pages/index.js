import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Contact from "./Contact";
import adiImage from "./../public/adizya.svg";
export default function Home() {
  return (
    <div>
      <Contact />
      <adiImage />
    </div>
  );
}
