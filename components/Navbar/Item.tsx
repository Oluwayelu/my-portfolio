import { FunctionComponent } from "react";
import Link from "next/link";
import { NavItemType } from "../../interface/types";

const NavItem: FunctionComponent<NavItemType> = ({
  active,
  setActive,
  name,
  route,
}) => {
  return active !== name ? (
    <Link href={route}>
      <a>
        <span
          className="mx-2 cursor-pointer hover:border-b-4 hover:text-primary"
          onClick={() => setActive(name)}
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

export default NavItem;
