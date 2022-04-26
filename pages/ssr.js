function SSR({time}){
    return (
        <>
        <h1>Server Side Rendering</h1>
        <p>This example need to be run using `yarn next build` and `yearn start`. If run with `yarn run dev` will refresh upon every request as per development mode default nature.</p>
        <p>This page was built on: {time}</p>
        </>
    )
}

export default SSR;

export async function getServerSideProps(context)
{
    const {params, req, res, query} = context
    const data = new Date().toISOString();

    console.log(query)
    console.log(req.headers.cookies)
    res.setHeader('Set-Cookie', [`time=${data}`])
    
    // const {param1} = params

    console.log(`Generated on time: ${data}`)
    return {
        props:{
            time: data
        }
    }
}