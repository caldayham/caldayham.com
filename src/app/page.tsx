import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import SimpleLink from '@/components/SimpleLink'

export default function LandingPage() {
  return (
    <>
      <div className={styles.openingContent}>
        <div className={styles.item}>
          <h1 className={styles.introTitle}>Hello,&nbsp;<span className={styles.break}> </span>my name is Cal.</h1>
          <h1 className={styles.welcomeTitle}>Welcome! ヽ(‘ ∇‘ )ノ</h1>
          <div className={styles.openingText}>
            <p>The purpose of this site is to organize and distribute information about myself. Thanks for stopping by!</p>
            <p>
              Posts are both for my personal reference and record keeping, and for anyone who is curious about how I think and spend my hours. The two primary categories 
              are <SimpleLink>projects</SimpleLink> and <SimpleLink>reflections</SimpleLink>.
            </p>
            <p>
              Projects encapsulate my creative endeavors, and reflections are attempts to summarize my understanding of various topics and experiences.
            </p>
            <p>If you're interested in <SimpleLink href='connect'>connecting</SimpleLink> you can check out my public social accounts or spark up a conversation directly with me via the connect page form. </p>
          </div>
        </div>
        <div className={styles.imgItem}>
          <Image src='/images/2022-snapper-zoom.jpg' alt='cal x snapping turtle' width={200} height={320} className={styles.img} />
        </div>
      </div>

      <div className={styles.mainContent}> 

        <div className='lowerPageSection'>
          <h1 className={styles.title}>About Cal</h1>
          <p>I absolutely love problem solving. To me, that seems to be a big component of purpose. I am 22, Canadian by birth, California by choice (with many visits to home to Canada :), straight male.</p>
          <p>Some other things that I really enjoy are family / friends, being outside, weight lifting, animals, coding, building solutions, and finding new ways to organize various aspects of my being.</p>
          <p>I think a lot about entropy, ultimate purpose in existence, personal agency, and the severity of existence. I am very grateful to be.</p>
          <p>I am quite fortunate to have a wonderful family, great friends, healthy body, and clear mind. I have had my struggles, I am and will continue to have more, I am grateful for existence.</p>
          <p>I subscribe heavily to the 'my-fault' ideology, because even if the situation I find myself in isn't entirely my fault, I would rather take it into my own hands than let someone or something else dictate my boundary conditions.</p>
          <p>Sometimes people seem to forget that we are flying through space on a semi-molten rock, it's time to set bigger goals and take massive action, because why tf not?</p>
        </div>

        <div className='lowerPageSection'>
          <h1 className={styles.title}>About my reflections</h1>
          <p>Take every opinion and statement you read on this site for what it is, text describing the inclinations of a 22 year old male.</p>
          <p>In many areas, I am severely under-exposed, and I'm sure there are many amazing thinkers why have navigated the same or similar questions, possibly with greater clarity and fruitfulness.</p>
          <p>My only goal in organizing and sharing my publicly acceptable reflections is firstly for myself, to centralize them, and secondly to seed the inquisitions of curious minds who may not have asked themselves these questions.</p>
        </div>

        <div className='lowerPageSection'>
          <h1 className={styles.title}>About my Projects</h1>
          <p>I love doing stuff, and I often turn the dials up pretty far, it is quite enjoyable to create things, especially new ones.</p>
          <p>If you have any projects you'd like to share with me, I'd love to see them, visit my connect page to learn more.</p>
        </div>

        <div className='lowerPageSection'>
          <h1 className={styles.title}>About my Lessons</h1>
          <p>I have learned a number of things during my exposure to various aspects of life, many of the lessons I plan to create are / will be taken directly from my folder of lessons I have been assembling for my future children.</p>
          <p>Just as with my reflections, take these lessons for what they are, likely non-perfect attempts by a 22 year old to share their understanding of the world.</p>
        </div>

        <div className='lowerPageSection'>
          <h1 className={styles.title}>How to Connect</h1>
          <p>I am still unknown enough to simply provide my email or even phone number and not be inundated with constant messages. That said, I have devised a method of acquiring my contact information that inspires conversation and filters most bad actors.</p>
          <p>Visit my connect page to learn more.</p>
        </div>
      </div>
    </>
  )
}
