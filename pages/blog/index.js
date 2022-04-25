
import Link from 'next/link'

function Blog() {
    return (
        <>
            <h1>Blog</h1>
            <p>This demo the nested page route</p>
            <ol>
                <li><Link href="/blog/first"><a>First blog page</a></Link></li>
                <li><Link href="/blog/second"><a>Second blog page</a></Link></li>
            </ol>
        </>
    )
}

export default Blog;