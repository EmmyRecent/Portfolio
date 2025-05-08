type TitleProps = {
  name: string;
  number: string;
  styles?: string;
};

const Title = ({ name, number, styles }: TitleProps) => {
  return (
    <div
      className={`mb-12 flex w-full items-center ${styles ? styles : "justify-start"}`}
    >
      <h2 className="w-max">
        <span className="inline">
          {">"} {number}.
        </span>{" "}
        {name}
      </h2>

      <div className="bg-textColor ml-4 h-[2px] max-w-[400px] flex-1"></div>
    </div>
  );
};

export default Title;
