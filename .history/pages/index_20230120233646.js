import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '../data/employees.json'
import {useState} from 'react'
import Card from '../components/Card'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  console.log(data)
  const [information, setInformation] = useState([...data])
  console.log(information)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
          <Link href="about">About</Link>

          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <div>Business Degree</div>
          {information && information.map((info, index) => {
            if(info.firstName === "Business") {
              return(
              <Card key={index} degree={info.department} colour="red" font="20px"/>
            )
          }
        })}
                  <div>Computing Degree</div>
          {information && information.map((info, index) => {
            if(info.firstName === "Finance") {

             return(
              <Card key={index} degree={info.Firstname} colour="blue" font="20px"/>
             )
          }
          <div>Computing Degree</div>
          {information && information.map((info, index) => {
            if(info.firstName === "Finance") {

             return(
              <Card key={index} degree={info.Firstname} colour="blue" font="20px"/>
             )
          }
          <div>Computing Degree</div>
          {information && information.map((info, index) => {
            if(info.firstName === "Finance") {

             return(
              <Card key={index} degree={info.Firstname} colour="blue" font="20px"/>
             )
          }
        })}
        </div>
      </main>
    </>
  )
}
