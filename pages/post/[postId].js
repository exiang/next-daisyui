/* 
 * use `yarn next build` to test generation on build time
 * also check `.next/server/pages/post` for generated files
 * refer to video: https://www.youtube.com/watch?v=j4nAZaPQzwc&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=27
*/

import {Router, useRouter} from 'next/router'

function Post({post})
{
    const router = useRouter();

    // disable this if you are using fallback: 'blocking'
    if(router.isFallback){
        return <h1>Loading...</h1>
    }

    return(
        <>
            <h1>{post.id} - {post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}

export default Post;

/*
// example 1: hardcode paths with limited items returned
// if fallback is false but page not found, it will throw 404 error
export async function getStaticPaths(){
    return {
        paths:[
            {params: {postId: '1'}},
            {params: {postId: '2'}},
            {params: {postId: '3'}},
        ], 
        fallback: false
    }
}*/

/*
// example 2: dynamic from api
// fallback set to false
export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    const paths = data.map(post => {
        return {
            params: {postId: `${post.id}`}
        }
    })

    return {paths, fallback:false}
}*/

/*
// example 3: 
// if fallback is true but page not found, next will generate one live on request
// this also the recommended one over option `blocking`
// developer can choose to pre-generate the popular pages, while keeping the rest to be generate upon request
export async function getStaticPaths(){
    return {
        paths:[
            {params: {postId: '1'}},
            {params: {postId: '2'}},
            {params: {postId: '3'}},
        ], 
        fallback: true
       
    }
}*/

// this wont show the loading message
// works for crawler that not supporting javascript
export async function getStaticPaths(){
    return {
        paths:[
            {params: {postId: '1'}},
            {params: {postId: '2'}},
            {params: {postId: '3'}},
        ], 
        fallback: 'blocking'
       
    }
}

export async function getStaticProps(context)
{
    const {params} = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();

    console.log(`Generating page for /post/${params.postId}`)

    return{
        props:{
            post: data
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
        // call `/api/revalidate` to reset the cache
    }
}