import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

import { useRouter } from 'next/router'

const Login = () => {
		<h1>Login</h1>
	const router = useRouter()
	  const { pid } = router.query

	  return <p>Post: {pid}</p>
}

export default Login