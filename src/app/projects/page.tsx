import React from 'react'
import styles from './page.module.css'
import { projectPosts } from '@/app/projects/(posts)/projectPosts'
import Link from 'next/link'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'


export default async function ProjectsPage() {

const postDir = "src/posts";
const files = fs.readdirSync(path.join(postDir));
const posts = files.map((filename) => {
  const fileContent = fs.readFileSync(path.join(postDir, filename), "utf-8");
  const { data: frontMatter } = matter(fileContent); 
  return {
    meta: frontMatter, 
    slug: filename.replace(".mdx", ""),
  }
});

    return (
      <div>
        <h1>Projects</h1>
        <div className={styles.posts_wrapper}>
          {posts.map((post: any) => (
            <h4>hi</h4>
          ))}
        </div>


        {projectPosts.map((post: any) => (
          <Link href={`projects/${post.path}`} key={post.path} className='postWrapper'>
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
          </Link>
        ))}
      </div>
    )
  }
  