import IconButton from "./IconButton";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <button
      onClick={handleBack}
      className="right mr-4 border-none border-black rounded-full bg-opacity-35 backdrop-blur-md"
    >
      <IconButton icon={FiArrowLeft} />
    </button>
  );
};

export default BackButton;
