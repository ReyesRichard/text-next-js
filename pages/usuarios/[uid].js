import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import React, {Fragment} from 'react'


const User = ({user}) => {
    return(
        <Fragment>
            <Head>
                <title>{user.name} | Usuario </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <h1>Usuario</h1>
            {   user 
                ?   
                    <div>
                        <p>Nombre: {user.name}</p>
                        <p>Correo Eléctronico: {user.email}</p>
                        <p>Teléfono: {user.phone}</p>
                        <h2>Dirección:</h2>
                        <p>Calle:{user.address.street}</p>
                        <p>Número:{user.address.suite}</p>
                        <p>Ciudad:{user.address.street}</p>
                        <p>Ciudad:{user.address.zipcode}</p>
                    </div>
                : 'Cargando...'}
        </Fragment>
    )
}

User.getInitialProps = async ({query}) => {
	const {uid} = query //(ctx.query)
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${uid}` )
	const user = await res.json();
	console.log(user)
	return {user} 
}

export default User