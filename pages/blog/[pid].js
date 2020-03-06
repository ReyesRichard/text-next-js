import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import React, {Fragment, useEffect, useState} from 'react'

import { useRouter } from 'next/router'

const Post = ({post}) => {
	const router = useRouter()
  	// const { pid } = router.query

  	// const [post, setPost] = useState(null)

	// useEffect(() => {
	// 	fetchPost()
	// }, [pid])

	// const fetchPost = async function() {
	// 	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${pid}` )
	// 	const post = await res.json();
	// 	setPost( post )
	// }

	return (
	  	<Fragment>
				<Head>
					<title>{post.title} | Blog </title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
			  { post  ? 
			  	post.id ?
					<Fragment>
						<p>id: {post.id}</p>
						<p>Title: {post.title}</p>
						<p>Body: {post.body}</p>
					</Fragment>
					: ('No hay registro')
	  			:
	  			('Cargando...')

	  		}
	  	</Fragment>
	)
}

Post.getInitialProps = async ({query}) => {
	const {pid} = query //(ctx.query)
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${pid}` )
	const post = await res.json();
	console.log(post)
	return {post} 
}

export default Post