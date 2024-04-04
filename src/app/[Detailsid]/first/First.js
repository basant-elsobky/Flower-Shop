import Link from 'next/link'
import './first.css'

function First(props) {
    return (
        <div className='first'>
            <div className='top'>


                <h2>{props.name}</h2>

                <div className='d-flex'>
                    <ul >
                    <Link href='/'>

                        <li>Home</li>
                    </Link>
                    <Link href='/Collection'>

                        <li>shop our products</li>
                    </Link>
                   
                        <li>{props.product}</li>

                    </ul>
                </div>
            </div>



        </div>
    )
}

export default First
