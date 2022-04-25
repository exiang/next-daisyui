import {useRouter} from  'next/router'

function CategoryDetail()
{
    const router = useRouter();
    const categoryId = router.query.categoryId;

    return(
        <>
            <h1>Category detail for #{categoryId}</h1>
        </>
    );
}

export default CategoryDetail;