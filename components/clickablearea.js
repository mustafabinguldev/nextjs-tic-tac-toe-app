import GameContext from '@/contexts/gamecontext';
import React, { useContext, useState } from 'react'

function ClickableArea({ props }) {

  const id = props;
  const [value, setValue] = useState("");

  const {updater, getValue} = useContext(GameContext);


  return (

    <div onClick={(e) => {

       getValue(id)=="" ? updater(setValue, id) : () => {};
       
    }} className='border h-24 cursor-pointer'>

      <h3 className='font-bold text-center mx-auto my-auto py-5 text-5xl'>
         {getValue(id)}
      </h3>


    </div>

  )
}

export default ClickableArea;