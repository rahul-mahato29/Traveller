import React from 'react';

const Explore = () => {
    return (
        <>
            <div className="border-2 border-black m-2">
                <div className="border-b border-black m-5 pt-5 pb-5 font-bold text-2xl">
                    <h2>Things To See & Do</h2>
                </div>
                <div className="border-2 border-black m-8">
                    <div className="border-2 border-black m-10 p-10 flex flex-wrap text-center">
                        <div className="border-2 border-black m-2 grow h-64 w-96"><Item name={"Macbook"} price={100000} /></div>
                        <div className="border-2 border-black m-2 grow h-64 w-96"><Item name={"Iphone"} price={60000} /></div>
                        <div className="border-2 border-black m-2 grow h-64 w-96"><Item name={"Pendrive"} price={1000} /></div>
                        <div className="border-2 border-black m-2 grow h-64 w-96"><Item name={"Keyboard"} price={10000} /></div>
                        <div className="border-2 border-black m-2 grow h-64 w-96"><Item name={"Mouse"} price={1000} /></div>
                        <div className="border-2 border-black m-2 grow h-64 w-96"><Item name={"Ipad"} price={80000} /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Explore;