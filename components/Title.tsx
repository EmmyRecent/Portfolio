type TitleProps = {
  name: string;
  number: string;
};

const Title = ({ name, number }: TitleProps) => {
  return (
    <div className="mb-12 flex w-full items-center justify-start">
      <h2 className="w-[150px] md:w-[200px]">
        <span>
          {">"}
          {number}.
        </span>{" "}
        {name}
      </h2>

      <div className="bg-textColor h-[2px] w-full max-w-[300px] md:max-w-[344.51px]"></div>
    </div>
  );
};

export default Title;
