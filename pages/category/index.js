import Link from 'next/link'

function Category()
{
    let items = [];
    for(let i = 1; i <= 10; i++){
        items.push(<li><p><Link href={`/category/${i}`}><a>Category {i}</a></Link></p></li>);
    }

    return(
        <>
            <h1>Categories</h1>
            <ol>
                {items}
                <Link href={`/category/${encodeURIComponent('computer')}`}><a>Computer</a></Link>
            </ol>
        </>
    );
}

export default Category;