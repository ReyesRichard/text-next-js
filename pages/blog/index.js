import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import React, {Fragment} from 'react'
import Router from 'next/router'
import Link from 'next/link'

const Blog = ({ posts, users })=> {
  return(
  	<Fragment>
  		<h1>Blog</h1>
  		{posts.map((post) => (
  			
	 		<div>
	 			<span> {post.id} .- </span>
	 			<span>Titulo: {post.title}</span>
	 			// <span> {post.body}</span>
	 			<div> 
	 				<span>User: {post.userId}</span>
	 				<span> User: {users.filter(user => user.id === post.userId)[0].name }</span>
 				</div>
 				<Link href={`/blog/[id]`} as={`/blog/${post.id}`}>
	 				<a> Ver más {post.id}</a>
 				</Link>
 			</div>
		))}	
	 </Fragment>
 )
}

Blog.getInitialProps = async ({ req }) => {
  const resPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await resPosts.json();
  console.log('Blog posts');

  const resUsers = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await resUsers.json();

  return { posts, users }
}

export default Blog