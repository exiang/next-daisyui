import {useRouter} from  'next/router'
import Link from 'next/link'

function ProductDetail()
{
    const router = useRouter();
    const productId = router.query.productId;

    const items = [];
    for(let i=1; i<=3; i++)
    {
        items.push(<li><Link href={`/product/${productId}/review/${i}`}><a>Review {encodeURIComponent(i)}</a></Link></li>);
    }
    return(
        <>
            <h1>Product detail #{productId}</h1>
            <ol>
                {items}
            </ol>
        </>
    );
}

export default ProductDetail;