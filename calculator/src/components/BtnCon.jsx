import CalBtn from "./CalBtn";

function BtnCon({ onButtonClick }) {
  const btnNames = [
    "C",
    "%",
    ".",
    "+",
    "1",
    "2",
    "3",
    "-",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "/",
    "0",
    "=",
  ];
  return (
    <div className="   w-full flex   font-sans     gap-5   flex-wrap  pt-3 ">
      {btnNames.map((btnName) => (
        <CalBtn
          key={btnName}
          onButtonClick={onButtonClick}
          BtnValue={btnName}
        />
      ))}
    </div>
  );
}

export default BtnCon;
