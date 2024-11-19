const ErrorMessage = ({ ItemArr }) => {
  return (
    <>
      {ItemArr.length === 0 && (
        <h3 className=" text-red-500 m-2 font-mono  text-base font-semibold py-1 px-2 rounded-full ring-1 ring-zinc-600 ring-opacity-25 ">
          Food list is empty
        </h3>
      )}
    </>
  );
};

export default ErrorMessage;
