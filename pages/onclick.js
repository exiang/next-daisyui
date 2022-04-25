import {router} from 'next/router';
import {useRouter} from 'next/router';

function OnClick()
{
    const router = useRouter();

    const handleClick = () => 
    { 
        router.push('/');
    }

    return (
        <>
            <h1>Navigate Programatically using OnCliclk</h1>
            <p>Clicking this button below with onlick and back to home page programatically.</p>
            <button className="btn btn-primary" onClick={handleClick}>Go to Hompeage</button>
        </>
    )
}

export default OnClick;