import User from '../components/molecules/user'

function SSG({users}){
    return (
        <>
        <h1>Static Site Generation</h1>
        <p>Fetch data on build time once and generate static file to display for subsequent requests</p>
        <p>`getStaticProps` only run on the server side once, it should return an object with `props` which also return another object as child.</p>
        <p>Best to use to access file system, read database or access secure API wihtout disclosing the access key</p>
        {
            users.map(user => {
                return (
                    <>
                        <User user={user} />
                    </>
                )
            })
        }
        </>
    )
}

export default SSG;

export async function getStaticProps()
{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);

    return {
        props:{
            users: data
        }
    }
}