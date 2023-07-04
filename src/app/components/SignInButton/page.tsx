'use client'

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, useSession } from 'next-auth/react'

import styles from './styles.module.scss'

export function SignInButton() {
    const {data: session, status} = useSession()
    
    console.log(session)

    if(status === 'authenticated'){
    return   (
        <button 
        type="button"
        className={styles.signInButton}
        >
           <FaGithub color='#04d361' />
           Antmendes
           <FiX color='#737380' className={styles.closeIcon}/>
        </button>

    )} return (
        <button 
        type="button"
        className={styles.signInButton}
        onClick={() => signIn("github")}
        >
           <FaGithub color='#eba417' />
           Sign in with Github
        </button>
    )
       
    

}