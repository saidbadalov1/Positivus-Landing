const LargeCard = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames: string;
}) => {
  return (
    <div
      data-aos='fade-right'
      className={`p-14 rounded-[45px] w-full ${classNames}`}
    >
      {children}
    </div>
  );
};

export default LargeCard;
