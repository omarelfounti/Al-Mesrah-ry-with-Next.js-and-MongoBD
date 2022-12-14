import Head from "next/head";
import React from "react";
import styles from '../styles/Projects.module.css';
import Image from "next/image";

export default function Projects(){
    return(
        <>
        <Head>
        <title> Projects </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
       </Head>
        <div className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            <p className={styles.description}>
            Projektit:

<li className={styles.list}>2017: Suomen Kielen opetus laulun kautta </li> 
<li className={styles.list}> 2017: Teatteriryhmä maahanmuuttajalapsille</li> 
<li className={styles.list}> 2017: Ohjattu radio-ohjelma maahanmuuttajille. Almuhajir 30min ja ShakuMaku 60min,  jotka kuuluivat myös äänenä Helsingin Lähiradiossa. Almuhajir kuuluu myös netissä. (facebookissa ja youtubessa)</li> 
<li className={styles.list}> 2018: Teatteriryhmämme esitys Sipoon mahdollisuuksien torilla</li> 
<li className={styles.list}> 2018: Radio Espoo netti-TV</li> 
<li className={styles.list}> 2018 ja 2019: Espoon mahdollisuuksien tori järjestettiin muiden järjestöjen kanssa Matinkylässä. Ensimmäinen tapahtuma järjestettiin Ison Omenan edessä ja toinen tapahtuma järjestettiin kauppakeskuksen sisätiloissa</li> 
<li className={styles.list}> 2019: Nordic Asean Busineksen kanssa järjestettiin Asean Day tapahtuma Helsingin Kampin narikkatorilla</li> 
<li className={styles.list}> 2021: Radio Espoo netti-TV projekti jatkui Espoon kaupungin kanssa. Espoo netti-TV toimi viestinvälittäjänä Espoon kaupungin maahanmuuttajille</li> 
<li className={styles.list}> 2022: Sawasdee Thailand tapahtuma järjestettiin Helsingin Kampin narikkatorilla yhteistyössä The Finnish Thai Associationin sekä Thaimaan suurlähetystön kanssa</li> 
            </p>
        </div>
        </>
    )
}