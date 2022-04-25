import Link from 'next/link'

function GetQuery({name = 'exiang'})
{
    return (
        <>
        <h1>Hello {name}</h1>
        <p><Link href={{ pathname: 'getQuery', query: { name: 'feei' }}}><a>Say Hello from Feei</a></Link></p>
        </>
    )
}

export default GetQuery;