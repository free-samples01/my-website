import Grid from "@mui/material/Grid2";
import { Taskbar } from "../components/Sidebar";
import { Welcome } from "../components/Welcome";
import { PhotoGallery } from "../components/PhotoGallery";
import "../style/homeStyle.css";

export default function HomePage() {
	return (
		<>
			<Taskbar />
			<Grid container spacing={2}>
				<Grid size={{ xs: 12, sm: 5, md: 5 }} className="welcome-container">
					<Welcome />
				</Grid>
				<Grid size={{ xs: 12, sm: 7, md: 7 }}>
					<PhotoGallery />
				</Grid>
			</Grid>
		</>
	);
}
