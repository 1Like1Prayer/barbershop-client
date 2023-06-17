import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import PanelContent from '@/shared/navbar/panel-content';

const Panel = () => (
    <Transition.Child
        as={Fragment}
        enter=" transition ease-in-out duration-500 sm:duration-700"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-500 sm:duration-700"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
    >
        <Dialog.Panel className="bg-[#EEEEEE] rounded fixed inset-y-0 right-0 w-fit">
            <PanelContent />
        </Dialog.Panel>
    </Transition.Child>
);

export default Panel;
