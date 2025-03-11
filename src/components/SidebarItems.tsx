import HomeIcon from "@mui/icons-material/Home";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../style/sidebarItemStyle.css";
import PersonIcon from "@mui/icons-material/Person";

export const SidebarItems = () => {
	const navigate = useNavigate();
	const pages = [
		{
			name: "Home",
			icon: <HomeIcon />,
			path: "/",
		},
		{
			name: "About Me",
			icon: <PersonIcon />,
			path: "/about",
		},
	];
	return (
		<Box className="sidebar-items" role="presentation">
			<List>
				{pages.map((page, index) => (
					<ListItem key={index} disablePadding={true} onClick={() => navigate(page.path)}>
						<ListItemButton>
							<ListItemIcon>{page.icon}</ListItemIcon>
							<ListItemText primary={page.name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
};
