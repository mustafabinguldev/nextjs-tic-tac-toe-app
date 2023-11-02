"use client";

import React, { useContext } from 'react'
import ClickableArea from './clickablearea';
import GameContext from '@/contexts/gamecontext';

function GameForms() {

    const components = []

    for (let i = 1; i < 10; i++) {
        components.push(<ClickableArea props={i} />)
    }

    const { winner, restart, user, scores } = useContext(GameContext);

    return (

        <div class="bg-gray-50 h-128 p-1 dark:bg-gray-900 md:h-screen">

            {winner == "" ? (

                <section class="mb-32">
                    <div class="flex flex-col items-center justify-center px-auto my-1 py-0	 mx-auto">
                        <div>

                            <div className='text-center'>
                                <h1 class="text-5xl	font-bold">Round: {user}</h1>
                                <h1 class="text-5xl	font-bold">Scores: X: {scores.X} | O: {scores.O}</h1>
                            </div>

                            <div className='text-center mt-10 mx-auto my-1 p-2 grid max-w-screen-xl grid-cols-3 p-10'>
                                {components}
                            </div>

                            <a onClick={() => {
                                    restart();
                                }} class="float-right mt-2 p-12 ml-12 text-4xl cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Restart
                                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                        </div>
                    </div>


                </section>


            ) : (<>

                <section class="bg-gray-50 dark:bg-gray-900">
                    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                        <div class="gap-5 w-128 h-48 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#" class="mt-10 ">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{winner} player won the game!</h5>
                            </a>
                            <a onClick={() => {
                                restart();
                            }} class="mt-10 ml-20 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Restart
                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </section>

            </>)}
        </div>



    )
}

export default GameForms