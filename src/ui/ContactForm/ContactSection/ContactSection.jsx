import { FaLocationArrow } from "react-icons/fa";
import useUserData from "../../../hook/useUserData";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";

const ContactSection = () => {
  const { data: userData } = useUserData();

  const {
    user: {
      about: { address, phoneNumber, contactEmail },
    },
  } = userData;

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <h3 className="text-4xl font-bold text-center py-3 text-textPrimary">
        Reach Me
      </h3>

      <ul className="flex flex-col items-center justify-center gap-4">
        <li className=" w-full py-2 bg-gray-700 rounded-sm shadow-xl flex flex-col lg:flex-row items-center justify-around text-2xl text-textAccent">
          <FaLocationArrow className="font-bold" />
          <h4 className="font-medium"> {address}</h4>
        </li>
        <li className=" w-full py-2 bg-gray-700 rounded-sm shadow-xl flex flex-col lg:flex-row  items-center justify-around text-2xl text-textAccent">
          <BsFillTelephoneFill className="font-bold" />
          <h4 className="font-medium"> {phoneNumber}</h4>
        </li>
        <li className=" w-full py-2 bg-gray-700 rounded-sm shadow-xl flex flex-col lg:flex-row items-center justify-around text-2xl text-textAccent">
          <MdOutlineAlternateEmail className="font-bold" />
          <h4 className="font-medium">{contactEmail}</h4>
        </li>
      </ul>
    </div>
  );
};

export default ContactSection;
