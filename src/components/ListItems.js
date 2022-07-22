import React from "react";

const ListItems = (props) => {

    return(

        <div className='bg-[#E7E7E7] h-28 w-[18em]  rounded-t-xl flex mt-4  ml-4'>
            <img src={props.image} alt="" className='h-20 rounded-xl mt-auto mb-auto ml-4 w-[30%] object-cover' />

            <div className=" text-center w-full justify-self-center self-center">
                <h2 className='text-xl font-medium tracking-wide'>{props.name}</h2>

                <div className='line ml-4 mt-2 mr-4'></div>
                <h2 className='text-md mt-2'>{props.price} KM</h2>
            </div>
        </div>
    )
}

export default ListItems;