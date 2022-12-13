import Head from "next/head";
import React from "react";
import styles from '../styles/Contact.module.css'

export default function Contact(){
    return(
        <>
        <Head>
        <title> Almesrah/Contact </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
       </Head>
        <div className={styles.container}>
            <h2 className={styles.title}>Contact Page</h2>
            <div className={styles.details}>
                <li className={styles.list}>
                <label className={styles.label}>Name:</label>
                <p className={styles.value}>Lorem</p>
                </li>
                <li className={styles.list}>
                <label className={styles.label}>Email:</label>
                <p className={styles.value}>lorem@example.com</p>
                </li>
            </div>
        </div>
        </>
    )
    }