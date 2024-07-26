import CardLayout from "@/components/card/CardLayout";

type FrontCardProps = {
  label: number;
};

const FrontCard = (props: FrontCardProps) => {
  const { label } = props;
  return (
    <CardLayout
      backgroundColor={"bg-white"}
      border="border-solid border-4 tablet:border-8 border-custom-purple"
    >
        <p className="text-2xl tablet:text-4xl">{label}</p>
     
    </CardLayout>
  );
};

export default FrontCard;
