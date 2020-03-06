import React from 'react'
import Head from 'next/head'
import withRedux from "next-redux-wrapper";
import makeStore from '../store'
import {connect} from 'react-redux';


const Contact = ({foo, custom})=> (
<div>
	<h1>Contacto</h1>
	<div>Prop from Redux {foo}</div>
    <div>Prop from getInitialProps {custom}</div>
</div>
)

Contact.getInitialProps = ({store, isServer, pathname, query}) => {
	// component will read from store's state when rendered
	// store.dispatch({type: 'FOO', payload: 'foo'});
	// pass some custom props to component from here
	return {custom: 'custom'}; 
	// return action.payload.then((payload) => {
    //     // you can do something with payload now
    //     return {custom: 'custom'};
    // });
};

export default connect(null, null)(Contact)
// export default withRedux(makeStore)(Contact);
// export default Contact