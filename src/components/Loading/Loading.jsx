import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <section className="h-screen w-screen bg-black">
      <div className="flex flex-col items-center justify-center py-10">
        <ReactLoading
          type={"spin"}
          color={"red"}
          height={"20%"}
          width={"20%"}
          className="my-10"
        />
      </div>
    </section>
  );
};

export default Loading;
