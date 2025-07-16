import Grid from "@mui/material/Grid2";
import { Taskbar } from "../components/Sidebar";
import { Introduction } from "../components/Introduction";
import Me from "../assets/images/Me.jpg";
import "../style/about.css";

export default function About() {
	return (
		<div className="page">
			<Taskbar />
			<Grid container spacing={2} className="padding-4">
				<Grid size={{ xs: 12, sm: 8, md: 8 }} className="intro-grid">
					<Introduction />
				</Grid>
				<Grid size={{ xs: 12, sm: 4, md: 4 }} className="intro-grid">
					<img src={Me} alt="Me" className="portrait" />
				</Grid>
			</Grid>
		</div>
	);
}
