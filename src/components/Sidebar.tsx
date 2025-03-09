import MenuIcon from "@mui/icons-material/Menu";
import { Button, Drawer } from "@mui/material";
import { useState } from "react";
import { SidebarItems } from "./SidebarItems";

export const Taskbar = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<div>
			<Button onClick={() => setShowSidebar(!showSidebar)}>
				<MenuIcon />
			</Button>
			<Drawer open={showSidebar} onClose={() => setShowSidebar(false)}>
				<SidebarItems />
			</Drawer>
		</div>
	);
};
