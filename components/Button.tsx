interface Props {
  style: string;
  text: string;
  type?: "submit" | "reset" | "button";
}

const Button = ({ style, text, type }: Props) => {
  return (
    <button
      type={type}
      className={` text-sm font-sans capitalize text-white rounded-[4px] text-center ${style}`}
    >
      {text}
    </button>
  );
};

export default Button;
