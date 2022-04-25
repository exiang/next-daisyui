import Link from 'next/link'

function Product()
{
    let items = [];
    for(let i = 1; i <= 10; i++){
        items.push(<li><p><Link href={`/product/${i}`}><a>Product {i}</a></Link></p></li>);
    }

    return(
        <>
            <h1>Products</h1>
            <ol>
                {items}
                <Link href={`/product/${encodeURIComponent('macbook')}`}><a>Macbook</a></Link>
            </ol>
        </>
    );
}

export default Product;