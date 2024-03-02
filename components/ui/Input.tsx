interface inputProps{
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
}

const Input = ({name, type, placeholder, value}: inputProps) =>{
    return (
        <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}

        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
            leading-tight
            focus:outline-none
            focus:shadow-outline"
        />
    )
};

export default Input;