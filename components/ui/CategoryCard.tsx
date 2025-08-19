interface Category {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
}

const CategoryCard = ({ icon: Icon, name }: Category) => {
  return (
    <div className="aspect-[10/9] group rounded-md bg-white hover:bg-foundation-red-500 outline-solid outline outline-[0.09em] outline-gray-400 hover:outline-foundation-red-500 flex flex-col gap-2 md:gap-4 p-2 lg:p-4 items-center justify-center cursor-pointer">
      <Icon className=" text-black group-hover:text-white w-[28px] md:w-[32px] lg:w-[40px] xl:w-[50px]" />

      <span className="text-black text-xs md:text-sm lg:text-base group-hover:text-white">
        {name}
      </span>
    </div>
  );
};

export default CategoryCard;
