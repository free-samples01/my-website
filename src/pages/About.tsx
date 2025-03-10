import Grid from "@mui/material/Grid2";
import { Taskbar } from "../components/Sidebar";
import { Introduction } from "../components/Introduction";

export default function About() {
	return (
		<div className="page">
			<Taskbar />
			<Grid container spacing={2} className="grid-container">
				<Grid size={{ xs: 12, sm: 7, md: 7 }} className="grid">
					<Introduction />
				</Grid>
				<Grid size={{ xs: 12, sm: 5, md: 5 }}></Grid>
			</Grid>
		</div>
	);
}
