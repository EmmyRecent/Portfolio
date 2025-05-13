type InputFieldProps = {
  type: string;
  name?: string;
  placeholder: string;
  error?: string;
  value?: string;
  change?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
};

const InputField = ({
  type,
  name,
  placeholder,
  error,
  value,
  change,
}: InputFieldProps) => {
  return (
    <div className="flex-1">
      <input
        type={type}
        name={name ? name : type}
        value={value}
        onChange={change}
        className="w-full border border-secondaryColor rounded-round p-4 placeholder:text-textColor placeholder:capitalize text-white text-md outline-none"
        placeholder={placeholder}
      />
      <span className="text-red-400 text-xs mt-4">{error}</span>
      <label htmlFor={placeholder}></label>
    </div>
  );
};

export default InputField;
