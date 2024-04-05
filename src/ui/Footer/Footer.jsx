import useUserData from "../../hook/useUserData";

const Footer = () => {
  const { data: userData } = useUserData();

  const {
    user: {
      about: { name },
      social_handles,
    },
  } = userData;

  return (
    <footer className="px-4 py-8 bg-gray-800 text-white">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <p className="text-textPrimary text-xl">{name}</p>
          </div>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          {social_handles.map(({ _id, image: { url: img }, platform, url }) => (
            <li key={_id}>
              <a
                rel="noopener noreferrer"
                href={url}
              >
                <img
                  src={img}
                  alt={platform}
                  className="size-12"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
