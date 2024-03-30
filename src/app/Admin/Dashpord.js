' use client'
import React, { useEffect, useState } from 'react'
import './dashbord.css'
import supabase from '../Config/Supabaseclient';

import DeleteIcon from '@mui/icons-material/Delete';
import Tr from './Tr'
function Dashpord() {
    const [posts, setposts] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [img, setimg] = useState('')
    const [add, setadd] = useState('Add Product')



    useEffect(() => {
        const getData = async () => {

            const { data, error } = await supabase
                .from('Image')
                .select()

            if (error) {
                setFetchError('An error occurred while fetching data');
                setposts(null);
            } if (data) {

                setposts(data);
                
                setFetchError(null);

            }
        }
        getData();


    }, []);

   
    const ondelete = (id)=>{
        setposts(prevdata =>{
          return prevdata.filter(sm=>sm.id !==id)
        })
      }

    const handleaddProductBtn = async () => {

        const { data, error } = await supabase
            .from('Image')
            .insert([
                { Name: name, price: price, image: img },
            ])
            .select()
        setname('')
        setimg('')
        setprice('')

       
       
        
        
    }
    

    return (
        <div className='admin'>
            <div className="container py-2 mt-5">
                <h1 className=" text-center p-2 rounded">ADD NEW FLOWER..!</h1>
                <div className="crud__form">
                    <form onSubmit={handleaddProductBtn}>
                        <div className="row">
                            <div className="col-md-4">
                                <label className="text-uppercase" for="productNameInput">Product Name:</label>
                                <input onChange={(e) => setname(e.target.value)} value={name} type="text" id="productNameInput" className="form-control bg-transparent text-danger mb-2" required />
                            </div>
                            <div className="col-md-4">
                                <label className="text-uppercase" for="productPriceInput">Product Price:</label>
                                <input onChange={(e) => setprice(e.target.value)} value={price} type="number" id="productPriceInput"
                                    className="form-control bg-transparent text-danger mb-2" required />
                            </div>
                            <div className="col-md-4">
                                <label className="text-uppercase" for="productPriceInput">Product Image:</label>
                                <input type="text" id="productPriceInput"
                                    className="form-control bg-transparent text-danger mb-2" />
                                <input onChange={(e) => setimg(e.target.value)} value={img} type="file" name="default" id="default" className="border p-2"></input>
                            </div>

                            <div className="col-md-6">
                                <button type='submit' id="addProductBtn" className="btn btn-outline-success">{add}</button>

                            </div>

                        </div>
                    </form>
                </div>
            </div>

            <section>
                <div className="container py-2">

                    <table className="table text-center">
                        <thead>
                            <tr  >
                                <th>Img </th>
                                <th>name</th>
                                <th>Price</th>

                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody id="showData">
                            {fetchError && <p>fetchError</p>}
                            {posts && (
                                <>
                                    {posts.map(posts => (
                                        <>

                                           <Tr posts={posts} ondelete={ondelete}/>


                                        </>
                                    ))}
                                </>
                            )}
                        </tbody>

                    </table>
                </div>

            </section>
        </div>
    )
}

export default Dashpord


