import MenuIcon from "@mui/icons-material/Menu";
import { Button, Drawer } from "@mui/material";
import { useState } from "react";
import { SidebarItems } from "./SidebarItems";
import "../style/sidebarStyle.css";

export const Taskbar = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<div className="sidebar">
			<Button onClick={() => setShowSidebar(!showSidebar)}>
				<MenuIcon className="menu-icon" />
			</Button>
			<Drawer open={showSidebar} onClose={() => setShowSidebar(false)}>
				<SidebarItems />
			</Drawer>
		</div>
	);
};
