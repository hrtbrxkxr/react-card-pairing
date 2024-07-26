import Button from "@/components/button/Button";
import Modal from "@/components/dialog/Modal";
import Image from "next/image";
import React from "react";

type Props = {
  open: boolean;
  handleClose(): void;
  moves: number;
  handleNewGame(): void;
  testId: string;
};

const SuccessModal = (props: Props) => {
  const { open, handleClose, moves, handleNewGame, testId } = props;
  return (
    <Modal open={open} handleClose={handleClose} testId={testId}>
      <div className="flex w-full items-center justify-center h-full">
        <div className="justify-center flex-col flex items-center gap-4">
          <div className="h-20 w-20 relative">
            <Image
              alt="firework-icon"
              src="/images/icons/firework.png"
              fill
              sizes="100%, 100%"
            />
          </div>
          <p>Congrats!!!!</p>
          <p>{`Moves : ${moves}`}</p>
          <Button
            title={"New Game"}
            handleClick={handleNewGame}
            testId={"new-game-modal-button"}
          />
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;
