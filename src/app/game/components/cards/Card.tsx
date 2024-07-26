import BackCard from "./BackCard";
import { CardType } from "@/types/CardTypes";
import FrontCard from "./FrontCard";

type CardProps = {
  onClick: (index: number) => void;
  card: CardType;
  index: number;
  isInactive: boolean;
  isFlipped: boolean;
  isDisabled: boolean;
  testId: string;
};

const Card = ({
  onClick,
  card,
  index,
  isInactive,
  isFlipped,
  isDisabled,
  testId,
}: CardProps) => {
  const handleClick = () => {
    if (!isFlipped && !isDisabled) {
      onClick(index);
    }
  };

  return (
    <div
      data-testid={testId}
      className={`h-24 w-18 tablet:h-36 tablet:w-24 transform-style-3d transition duration-200 ${
        isInactive ? "invisible" : ""
      } relative cursor-pointer ${isFlipped ? "transform rotate-y-180" : ""}`}
      onClick={handleClick}
    >
      <div className="backface-hidden absolute w-full h-full">
        <BackCard />
      </div>
      {isFlipped && (
        <div className="backface-hidden absolute w-full h-full transform rotate-y-180">
          <FrontCard label={card.label} />
        </div>
      )}
    </div>
  );
};
export default Card;
