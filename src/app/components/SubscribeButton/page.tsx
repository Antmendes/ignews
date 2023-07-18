'use client'

import { signIn, useSession } from 'next-auth/react'
import styles from './styles.module.scss'
import React from 'react'
import { Checkout_sessions } from '@/app/api/checkout_sessions'







interface SubscribeButtonProps {
    priceId: number
}



export async function SubscribeButton({ priceId }: SubscribeButtonProps) {
  
  
   

   return (
        <button
          type="button"
          className={styles.subscribebutton}
          onClick={(() => {
            Checkout_sessions({
              lineItems:[{price:'price_1NO6FgGl9kA9zGAJPLMmJ15W', quantity: 1}]
            })
          })}
        >
          Subscribe now
        </button>
    )
}