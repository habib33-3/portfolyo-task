import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className=" h-screen w-screen flex flex-col items-center justify-center my-10">
      <ReactLoading
        type={"spin"}
        color={"red"}
        height={"20%"}
        width={"20%"}
      />
    </div>
  );
};

export default Loading;
