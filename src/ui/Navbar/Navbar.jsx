import { useState } from "react";
import useUserData from "../../hook/useUserData";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: user, isLoading } = useUserData();

  if (isLoading) {
    return <div>loading...</div>;
  }

  const menuLists = [
    {
      title: "Hero",
      href: "#hero",
    },
    {
      title: "Services",
      href: "#services",
    },
    {
      title: "Skills",
      href: "#skills",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Timeline",
      href: "#timeline",
    },
    {
      title: "Testimonials",
      href: "#testimonials",
    },
    {
      title: "COntact",
      href: "#contact",
    },
  ];

  return (
    <div className="flex">
      <div>
        <h1 className="text-textPrimary">{user.user.about.name}</h1>
      </div>
    </div>
  );
};

export default Navbar;
