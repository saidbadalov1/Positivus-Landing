interface TextareaProps {
  name: string;
  placeholder: string;
}

const Textarea = (props: TextareaProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={props.name}>{props.name}</label>
      <textarea
        className='border border-dark py-4 px-7 outline-none text-lg rounded-xl focus:border-blue-200 transition-all resize-none'
        placeholder={props.placeholder}
        id={props.name}
        rows={6}
      />
    </div>
  );
};

export default Textarea;
