const Button = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames: string;
}) => {
  return (
    <div>
      <button
        type='button'
        className={`px-6 py-4 rounded-xl border border-dark hover:bg-green hover:text-dark hover:border-green transition-all hover:scale-95 ${classNames}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
