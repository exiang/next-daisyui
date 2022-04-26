import {useRouter} from 'next/router';
import Link from 'next/link';

function Docx()
{
    const router = useRouter();
    const {params = []} = router.query;
    console.log(params);

    if(params.length === 2)
    {
        return (
            <>
                <h1>View Chapter {params[0]} \ Page {params[1]}</h1>
            </>
        );
    }
    else if(params.length === 1)
    {
        return (
            <>
                <h1>View Chapter {params[0]}</h1>
            </>
        );
    }

    return(
        <>
            <h1>Docx</h1>
            <div className="prose">
            <ol>
                <li>
                    <Link href="/docx/ChapterA"><a>Chapter A</a></Link>
                    <ol>
                        <li><Link href="/docx/ChapterA/Page1"><a>Page 1</a></Link></li>
                        <li><Link href="/docx/ChapterA/Page2"><a>Page 2</a></Link></li>
                    </ol>
                </li>
            </ol>
            </div>
        </>
    )
}
export default Docx;