import {useRouter} from  'next/router'

function ProductDetail()
{
    const router = useRouter();
    const {productId, reviewId} = router.query;

    return(
        <>
            <h1>Review detail #{reviewId} for product #{productId}</h1>
        </>
    );
}

export default ProductDetail;