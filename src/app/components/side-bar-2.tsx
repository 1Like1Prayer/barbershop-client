'use client';
import { Transition } from '@headlessui/react';
import { useState } from 'react';

const Sidebar2 = () => {
    const [isShowing, setIsShowing] = useState(false);
    return (
        <>
            <button> temp </button>
            <Transition show={isShowing}>
                {/* Background overlay */}
                <Transition.Child
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className='w-10'> hello</div>

                </Transition.Child>

                {/* Sliding sidebar */}
                <Transition.Child
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <div className='w-10'> hello</div>
                </Transition.Child>
            </Transition>
        </>
    );
};

export default Sidebar2;
