import { useForm } from "react-hook-form";

const FormSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="bg-gray-200 p-6 rounded-lg shadow-md w-full lg:w-1/2 mx-auto"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block text-gray-700 font-bold mb-2"
        >
          Your Name
        </label>
        <input
          id="name"
          type="text"
          className="form-input px-4 py-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">Name is required</span>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-gray-700 font-bold mb-2"
        >
          Your Email
        </label>
        <input
          id="email"
          type="email"
          className="form-input px-4 py-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">Email is required</span>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-gray-700 font-bold mb-2"
        >
          Your Message
        </label>
        <textarea
          id="message"
          className="form-textarea px-4 py-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
          rows="5"
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && (
          <span className="text-red-500 text-sm">Message is required</span>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
      >
        Submit
      </button>
    </form>
  );
};

export default FormSection;
