import React from 'react'
import styles from './page.module.css'
import ConnectForm from '@/components/connectForm/connectForm'
import MeetingCalendar from '@/components/meetingCalendar/meetingCalendar'
import SocialIcons from '@/components/socialIcons/socialIcons'
import Link from 'next/link'

export default function ConnectPage() {
  return (
    <div className={styles.main}>
      <h1>Connect with Cal!</h1>
      <div className={styles.socialsContainer}>
        <SocialIcons />
        <Link
            href={'https://buy.stripe.com/28o9Dl8jhg5A8Uw145'}
            className={styles.purchaseButton}
            target='_blank'
            rel="noopener noreferrer"
            style={{marginTop:"5px"}}>
            Stripe &nbsp;
            <div style={{ width: '22px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </div>
          </Link>
      </div>
      <p>To connect with cal (via email, phone, or any other supported message) you must first submit something you find interesting.</p>
      <p>As the number of requests to connect increases, so will the bar for what is interesting enough. I absolutely love talking to new people, but I have the same 24 hours in my day you do and can't spend it all talking to people about things I don't find interesting.</p>
      <h2>Steps</h2>
      <p>Fill out the form below, no links please, and then explain in less than 2048 characters, something you find interesting.</p>
      <p>I review all submissions and if I find it interesting I will reach out to you via your provided method.</p>
      <ConnectForm />

      <div className='lowerPageSection'>
        <h1>Want to meet with Cal?</h1>
        <p>You can book a 30 minute video call for 200 USD or the current equivalent in bitcoin, maximum 2 / person / week.</p>
        <p>For many people $200 is a non-trivial amount to spend on 30 minutes of time, if you find yourself in that bucket, don't purchase this.</p>
        <p>That said, there are also many people who have a high time value and just want to quickly schedule a call, this product is for those people.</p>
        <MeetingCalendar />
        <div>
          <h2>Bitcoin Address</h2>
          <p>3Je3cPo6VEa8JNhH21twCxUwTGWF4SY8mC</p>
        </div>

        <div>
          <h2>Government Voucher Purchase Link</h2>
          <Link
            href={'https://buy.stripe.com/fZe4j18jhbPk4EgcMM'}
            className={styles.purchaseButton}
            target='_blank'
            rel="noopener noreferrer">
            Checkout &nbsp;
            <div style={{ width: '22px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      <div className='lowerPageSection'>
        <h1>Want to work with Cal?</h1>
        <p>I have never been the biggest fan of waged jobs, but if you think you can convince me otherwise, I'm all ears. Please use the connect form.</p>
        <p>If you need consultation on your direction in life, please purchase a meeting above.</p>
        <p>If you need consultation with your product / service / solution, please do the same.</p>
        <p>You can also connect with me on <Link href={'https://www.linkedin.com/in/caldayham/'} style={{ textDecoration: 'underline' }} target='_blank' rel="noopener noreferrer">LinkedIn</Link> and send me an interesting first message.</p>
      </div>
    </div>
  )
}
