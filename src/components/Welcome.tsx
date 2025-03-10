import { Typography } from "@mui/material";

export const Welcome = () => {
	return (
		<div className="text">
			<Typography
				variant="h1"
				sx={{
					fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem", lg: "2rem" },
					fontWeight: "bold",
				}}
			>
				Hello, <br /> my name is Ishaa Sampla
			</Typography>
			<p>
				I am an aspiring software develop. Follow me on my journey as I grow not not only my
				skills but as a person.
			</p>
		</div>
	);
};
