function CalBtn({ BtnValue, onButtonClick }) {
  return (
    <>
      <button
        onClick={() => onButtonClick(BtnValue)}
        className={
          BtnValue === "0"
            ? " rounded-full  overflow-hidden  active:scale-95  active:shadow-sm  ease-linear    select-none  bg-opacity-20    border border-solid border-white border-opacity-30 shadow-md bg-white text-xl w-[72%]  h-12 "
            : "rounded-full  overflow-hidden  active:scale-95  active:shadow-sm  ease-linear    select-none  bg-opacity-20    border border-solid border-white border-opacity-30 shadow-md bg-white text-xl size-12 "
        }
      >
        {BtnValue}
      </button>
    </>
  );
}

export default CalBtn;
