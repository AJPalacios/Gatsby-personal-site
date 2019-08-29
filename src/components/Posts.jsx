import React from 'react';

export default (props) => {
    return(
        <>
            <h2 className="text-3xl mt-4 font-bold text-center">{props.title}</h2>
            <div className="flex flex-wrap justify-center mt-8">
                {
                props.data.map(el => (
                    <props.card 
                        element={el} 
                        />
                ))
                }
            </div>
        </>
    );
}