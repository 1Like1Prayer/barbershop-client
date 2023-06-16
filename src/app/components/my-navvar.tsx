'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import tomatoLogo from '../../../public/tomatoLogo.svg';
import Backdrop from '@/app/components/sidebar-backdrop';

const MyNavbar = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <Transition as={Fragment} show={open}>
                <Dialog
                    onClose={() => setOpen(false)}
                    className=" absolute z-10 h-max sm:w-screen sm:max-w-xs w-2/12"
                >
                    <Backdrop />
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100 rotate-0 scale-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Panel className='bg-white rounded'>
                            <Dialog.Title>Deactivate account</Dialog.Title>

                            <div className="w-10 text-center">hello world</div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
            <nav className="bg-gray-300 ">
                <div className=" h-16 flex justify-between px-2 items-center">
                    <div className="flex flex-row items-center justify-around ">
                        <Image
                            alt="Company logo - Tomato Barbershop"
                            src={tomatoLogo}
                            className="w-10"
                        />
                        <span className="px-4 font-medium pt-1">
                            BarberShop Scheduler
                        </span>
                    </div>
                    <div className="px-4">
                        <button onClick={() => setOpen(!open)}>
                            <Bars3Icon
                                className=" h-10 w-6"
                                aria-hidden="false"
                            />
                        </button>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default MyNavbar;
