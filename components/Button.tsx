interface Props {
  style: string;
  text: string;
  type?: "submit" | "reset" | "button";
}

const Button = ({ style, text, type }: Props) => {
  return (
    <button
      type={type}
      className={`px-5 py-3 bg-blue-500 text-sm font-sans capitalize text-white rounded-[4px] text-center ${style}`}
    >
      {text}
    </button>
  );
};

export default Button;
