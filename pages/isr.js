function ISR({time}){
    return (
        <>
        <h1>Incremental Static Regeneration</h1>
        <p>The validity period is 30s. Use `/api/revalidateISR` to reset the cache. </p>
        <p>This example need to be run using `yarn next build` and `yearn start`. If run with `yarn run dev` will refresh upon every request as per development mode default nature.</p>
        <p>This page was built on: {time}</p>
        </>
    )
}

export default ISR;

export async function getStaticProps()
{
   const data = new Date().toISOString();

    console.log(`Generated on time: ${data}`)
    return {
        props:{
            time: data
        },
        revalidate: 30,
    }
}