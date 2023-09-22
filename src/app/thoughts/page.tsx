import React from 'react'
import styles from './page.module.css'
import { thoughtPosts } from '@/app/thoughts/(posts)/thoughtPosts';
import Link from 'next/link';

export default function ThoughtsPage() {
  return (
    <>
      {thoughtPosts.map((post: any) => (
        <Link href={`thoughts/${post.path}`} key={post.path} className='postWrapper'>
          <h2>{post.title}</h2>
          <p>{post.desc}</p>
        </Link>
      ))}
    </>
  )
}
