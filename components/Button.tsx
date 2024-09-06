interface Props {
  bg: string;
  text: string;
}

const Button = ({ bg, text }: Props) => {
  return (
    <button
      className={`px-6 py-3 text-sm font-sans capitalize text-white rounded-[6px] text-center ${bg}`}
    >
      {text}
    </button>
  );
};

export default Button;
