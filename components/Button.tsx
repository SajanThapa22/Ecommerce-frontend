interface Props {
  style: string;
  text: string;
}

const Button = ({ style, text }: Props) => {
  return (
    <button
      className={` text-sm font-sans capitalize text-white rounded-[4px] text-center ${style}`}
    >
      {text}
    </button>
  );
};

export default Button;
