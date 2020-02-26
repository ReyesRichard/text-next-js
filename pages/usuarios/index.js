import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import {Fragment} from 'react'
import '../../stylesheets/main.sass'

// import dotenv from 'dotenv'

const Users = ({users})=>{
    return (
        <Fragment>
            <h1>Usuarios:</h1>
            {/* {JSON.stringify(users)} */}
            {users.map(user =>(
                <div key={user.id}>
                    <span>{user.id} </span>
                    <span>{user.name}</span>
                    <span> Color: {process.env.COLOR}</span>
                </div>
            ))}
        </Fragment>
    )
}

Users.getInitialProps = async ({req}) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await res.json()
    console.log(users)
    return {users}
}

export default Users