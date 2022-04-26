import Link from 'next/link'

function PostList({posts})
{
    return(
        <>
            <h1>List of Posts</h1>
            <p>This demo SSG using data fetch from API.</p>
            <p>This example need to be run using `yarn next build` and `yearn start`. If run with `yarn run dev` will refresh upon every request as per development mode default nature.</p>
            {posts.map((post) => {
                return(
                    <div key={post.id}>
                        <Link href={`post/${post.id}`}>
                        <a><h2>{post.id} - {post.title}</h2></a>
                        </Link>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}

export default PostList;

export async function getStaticProps()
{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();

    return {
        props:{
            posts: data
        }
    }
}