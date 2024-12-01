// Button data array
const buttons = [
  { name: "Daily", id: "1" },
  { name: "Weekly", id: "2" },
  { name: "Monthly", id: "3" },
];

const ScheduleBtn = ({ name }) => {
  return (
    <button className="h-8 lg:h-12 lg:w-36 w-24 bg-card-bg  shadow-black shadow-sm opacity-80 text-md rounded-lg hover:bg-blue-400 transition-colors duration-300">
      {name}
    </button>
  );
};

const ScheduleBtns = () => {
  return (
    <div className="w-full flex flex-wrap gap-5 justify-center text-color-text ">
      {buttons.map((button) => (
        <ScheduleBtn key={button.id} name={button.name} />
      ))}
    </div>
  );
};

export default ScheduleBtns;



