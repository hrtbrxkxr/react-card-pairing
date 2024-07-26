import CardLayout from "@/components/card/CardLayout";
import Image from "next/image";


const BackCard = () => {
  return (
    <CardLayout
      backgroundColor={"bg-gradient-to-b from-custom-light-pink to-custom-pink"}
      border="border-solid border-4 tablet:border-8 border-custom-purple"
    >
      <div className="h-6 w-6 tablet:h-8 tablet:w-8 relative bg-white rounded-full border-2 border-white">
        <Image alt="star-icon" src="/images/icons/star.png" fill  sizes="100%, 100%" />
      </div>
    </CardLayout>
  );
};

export default BackCard;
