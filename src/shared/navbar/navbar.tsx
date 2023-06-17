'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import tomatoLogo from '../../../public/tomatoLogo.svg';
import Backdrop from '@/shared/navbar/backdrop';
import Panel from '@/shared/navbar/Panel';

const MyNavbar = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <Transition as={Fragment} show={open}>
                <Dialog onClose={() => setOpen(false)} className="z-10 ">
                    <Backdrop />
                    <Panel />
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
                    <div className="flex items-center justify-evenly w-24">
                        <button>
                            <BellIcon
                                className="h-6 w-6 hover:text-[#00ADB5]"
                                aria-hidden="false"
                            />
                        </button>
                        <button onClick={() => setOpen(!open)}>
                            <Bars3Icon
                                className=" h-10 w-6 hover:text-[#00ADB5]"
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
