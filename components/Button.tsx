interface Props {
  bg: string;
  text: string;
}

const Button = ({ bg, text }: Props) => {
  return (
    <button className={`px-2.5 py-2 bg-${bg} text-white rounded text-center`}>
      {text}
    </button>
  );
};

export default Button;
