import './first.css'

function First( props) {
    return (
        <div className='first'>
            <div className='top'>


                <h2>{props.name}</h2>

                <div className='d-flex'>
                    <ul >
                        <li><a href="#home">Home</a></li>
                        <li><a href="#news">shop our products</a></li>
                        <li><a href="#contact">{props.product}</a></li>

                    </ul>
                </div>
            </div>


          
        </div>
    )
}

export default First
