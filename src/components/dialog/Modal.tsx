"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";

type ModalTypes = {
  open: boolean;
  handleClose(): void;
  children: React.ReactNode;
  testId : string;
};

const Modal = (props: ModalTypes) => {
  const { open, handleClose, children, testId } = props;
  return (
    <Dialog open={open} onClose={handleClose} className="relative z-10" data-testid={testId}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full min-w-[calc(100vw-32px)] tablet:min-w-[320px] min-h-[180px]">
            {children}
              </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
