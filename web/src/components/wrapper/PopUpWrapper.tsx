import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { usePopUpModal } from "./CustomPopUpProvider";
import clsx from "clsx";

/* eslint-disable */

interface Props {
  title: string;
  onClick?: (e?: any) => void | Promise<void>;
  label?: string;
  loading?: boolean;
  children?: React.ReactNode;
  hideTopBar?: boolean;
  isDisabled?: boolean;
  className?: string;
  closePopup?: () => void;
}

const PopUpWrapper = ({
  title,
  onClick,
  label,
  loading,
  children,
  hideTopBar = false,
  isDisabled,
  className,
  closePopup,
}: Props) => {
  const { hideModal, showModal } = usePopUpModal();

  return (
    <div
      className={clsx(
        "bg-s-bg z-50 sm:rounded-3xl py-4 w-screen h-screen sm:h-full sm:w-[550px] overflow-hidden text-p-text",
        className
      )}
    >
      {!hideTopBar && (
        <div className="flex flex-row justify-between items-center pb-4 px-4">
          <div className="flex flex-row justify-center items-center">
            <div
              className="cursor-pointer w-8 h-8 text-p-text  hover:bg-s-hover hover:duration-300 flex justify-center items-center rounded-full"
              onClick={() => (closePopup ? closePopup() : hideModal())}
            >
              {/* @ts-ignore */}
              <AiOutlineClose className="w-5 h-5 items-center" />
            </div>
            <div className="text-p-text ml-4 text-xl">{title}</div>
          </div>
        </div>
      )}
      <div className="sm:h-full sm:max-h-[calc(100vh-200px)] h-[calc(100vh-70px)] ">
        <div className="overflow-y-auto h-full">{children}</div>
      </div>
    </div>
  );
};

export default PopUpWrapper;
