import { useDispatch, useSelector } from "react-redux";
import { addEmail } from "../Features/Slice/signUpSlice";
import useInput from "../CustomHook/UseInput";
import { Link, useNavigate } from "react-router-dom";

function Email() {
  const selector = useSelector((state) => state.info.Email);
  const textFromUser = useInput(selector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(textFromUser.value);
    if (textFromUser.value != "") dispatch(addEmail(textFromUser.value));
    navigate("/");
  };

  return (
    <div>
      <form
        className="max-w-sm mx-auto align-middle m-7"
        onSubmit={handleSubmit}
      >
        <h4 className="text-3xl text-gray-300 text-center font-bold"> Email</h4>
        <div className="mb-5">
          <input
            type="email"
            id="text"
            {...textFromUser}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500  w-full p-2.5"
            placeholder="Enter Email"
          />
        </div>
        <div className="flex justify-between">
          <Link to={"/PhoneNumber"}>
            <button
              type="submit"
              className="bg-blue-700 px-4 rounded-2xl font-bold text-white "
              // onClick={() => <Link to={"/PhoneNumber"}></Link>}
            >
              Prev
            </button>
          </Link>
          <button
            type="submit"
            className="bg-green-700 px-4 rounded-2xl font-bold text-white "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Email;
