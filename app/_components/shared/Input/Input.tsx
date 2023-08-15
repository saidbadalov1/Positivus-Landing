interface InputProps {
  name: string;
  type: string;
  placeholder: string;
}

const Input = (props: InputProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        type={props.type}
        className='border border-dark py-4 px-7 outline-none text-lg rounded-xl focus:border-blue-200 transition-all'
        placeholder={props.placeholder}
        id={props.name}
      />
    </div>
  );
};

export default Input;
