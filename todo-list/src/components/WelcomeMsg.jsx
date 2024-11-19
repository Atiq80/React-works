const WelcomeMsg = ({ todoItems }) => {
  return (
    todoItems.length === 0 && (
      <div className=" my-2 py-3  text-center px-3 bg-green-400 rounded-full   mx-2  ">
        <h2 className=" text-xl">
          No tasks available! You've cleared your list. If anything comes up,
          feel free to add it and stay on track! 📅
        </h2>
      </div>
    )
  );
};

export default WelcomeMsg;
