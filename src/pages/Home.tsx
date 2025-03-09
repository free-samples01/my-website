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
				<Grid size={5} className="welcome-container">
					<Welcome />
				</Grid>
				<Grid size={7}>
					<PhotoGallery />
				</Grid>
			</Grid>
		</>
	);
}
