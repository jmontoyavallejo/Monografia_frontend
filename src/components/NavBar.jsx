const NavBar = () => {
  

  const names = [
    {
      id: 1,
      names: "reset",
    },
    {
      id: 2,
      names: "Random",
    },
    {
      id: 3,
      names: "Predict",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#fe0000] fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          Customer Acquisition COST Prediction
        </h1>
      </div>

      <ul className=" md:flex">
        {names.map(({ id, names }) => (
          <li
            key={id}
            className="text-4xl px-4 cursor-pointer capitalize font-medium text-[#84de76] hover:scale-105 duration-200"
          >
            {names}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
