import { NavLink } from "react-router-dom";

const navItems = [
  { title: "المنشورات", to: "/", icon: "Some" },
  { title: "الشائع", to: "path", icon: "Some" },
  { title: "الغرف", to: "path", icon: "Some" },
  { title: "الدورات", to: "path", icon: "Some" },
  { title: "المجموعات", to: "path", icon: "Some" },
];
const SideNav = () => {
  return (
    <div className="px-1">
      <div>LOGO</div>
      <nav>
        <ul className="menu rounded-box bg-base-100 p-2">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <NavLink to={item.to}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
