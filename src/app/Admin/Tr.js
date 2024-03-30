import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete';
import supabase from '../Config/Supabaseclient';
function Tr({posts,ondelete}) {

    const handledelete =async ()=>{
        const {data,error} =await supabase
        .from('Image')
        .delete()
        .eq('id',posts.id)
        .select()
        if(error){

        }
        if(data){
ondelete(posts.id)
        }
    }
    
  return (
    <>
       <tr key={posts.id}>


<th ><img style={{ width: '50px' }} src={posts.image} /></th>
<th>{posts.Name} </th>
<th>{posts.price}</th>

<th onClick={handledelete}><DeleteIcon /></th>
</tr>
    </>
  )
}

export default Tr
