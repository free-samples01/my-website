import HomeIcon from "@mui/icons-material/Home";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import "../style/sidebarItemStyle.css";

export const SidebarItems = () => {
	const pages = [
		{
			name: "Home",
			icon: <HomeIcon />,
		},
	];
	return (
		<Box className="sidebar-items" role="presentation">
			<List>
				{pages.map((page, index) => (
					<ListItem key={index} disablePadding={true}>
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
