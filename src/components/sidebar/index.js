import React from "react";

import SidebarStyle from "./sidebar.style";
import { useHistory } from "react-router";

export const Sidebar = () => {
  const history = useHistory();

  return (
    <SidebarStyle>
      <li>Blog</li>
      <li onClick={() => history.push("/admin/edit")}>Add</li>
      <li>Edit</li>
      <li>Delete</li>
    </SidebarStyle>
  );
};

export default Sidebar;
