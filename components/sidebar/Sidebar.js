import Link from "next/link"

import SidebarData from "../../data/SidebarData"
import Larr from "../../assets/Larr"
import SidebarLectureData from "data/SidebarLecturesData"

import styles from '../sidebar/sidebar.module.css'
import { useState } from "react"

const Sidebar = ({show, onClick, category}) => {

    console.log(category)

    function showContent(){
        switch(category){
            case 'events':
            return(
                <ul className={styles.ul}>
                {SidebarData.map((items, index) =>{
                    return(
                        <li key={index} className={styles.li} onClick={() => onClick(items)}>
                            <a className={styles.a}>
                            <h3 className={styles.sidebar_title}> 
                            {items.title}
                            </h3> 
                            </a>
                        </li>
                    )
                })}
            </ul>
            )
            case 'lectures':
            return(
                <ul className={styles.ul}>
                {SidebarLectureData.map((items, index) =>{
                    return(
                        <li key={index} className={styles.li} onClick={() => onClick(items)}>
                            <a className={styles.a}>
                            <h3 className={styles.sidebar_title}> 
                            {items.title}
                            </h3> 
                            </a>
                        </li>
                    )
                })}
            </ul>
            )
        }
    }

    function decideClass(){
        switch(category){
            case 'events':
                return(true)
            case 'lectures':
                return(false)
        }
    }

    return (
        <>
        <div> 
        <div className={decideClass()?(show ? styles.side_menu_active : styles.side_menu) : (show ? styles.side_menu_active_lectures : styles.side_menu_lectures) }>
        {/* <ul className={styles.ul}>
            {SidebarData.map((items, index) =>{
                return(
                    <li key={index} className={styles.li} onClick={() => onClick(items)}>
                        <a className={styles.a}>
                        <h3 className={styles.sidebar_title}> 
                        {items.title}
                        </h3> 
                        </a>
                    </li>
                )
            })}
        </ul> */}
            {showContent()}
        </div>
        <div className={decideClass()?(show ? styles.hidden_active : styles.hidden) : (show ? styles.hidden_active_lectures : styles.hidden_lectures) }>
            <p className={styles.hidden_p}>Heelo</p>
        </div>
        </div>
        
        {/* <div className={styles.open}> 
        <Larr onClick={showSidebar}/>
        </div> */}
        </>
    )
}

export default Sidebar
