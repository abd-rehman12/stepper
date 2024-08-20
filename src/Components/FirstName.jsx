import { useDispatch, useSelector } from "react-redux";
import { addFirstName } from "../Features/Slice/signUpSlice";
import useInput from "../CustomHook/UseInput";
import { useNavigate } from "react-router-dom";

function FirstName() {
  const selector = useSelector((state) => state.info.firstName);
  const textFromUser = useInput(selector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(textFromUser.value);
    // console.log("selector",selector);
    if (textFromUser.value != "") dispatch(addFirstName(textFromUser.value));
    navigate("/LastName");
  };

  return (
    <div>
      {/* <Link to={"/"}> */}
      <form
        className="max-w-sm mx-auto align-middle m-7"
        onSubmit={handleSubmit}
      >
        <h4 className="text-3xl text-gray-300 text-center font-bold">
          {" "}
          First Name
        </h4>
        <div className="mb-5">
          <input
            type="text"
            id="text"
            {...textFromUser}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500  w-full p-2.5"
            placeholder="Enter First Name"
          />
        </div>
        <div className="flex justify-end">
          {/* <Link to={"/LastName"}> */}
          <button
            type="submit"
            className="bg-blue-700 px-4 rounded-2xl font-bold text-white "
          >
            Next
          </button>
          {/* </Link> */}
        </div>
      </form>
      {/* </Link> */}
    </div>
  );
}

export default FirstName;
