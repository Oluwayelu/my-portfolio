import { FunctionComponent, ReactNode } from "react";
import { Navbar, Sidebar } from "../components";

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 my-14  ">
      <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark ">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-9 dark:bg-dark-500">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
