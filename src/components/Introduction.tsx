import { Typography } from "@mui/material";

export const Introduction = () => {
	return (
		<div className="text text-align">
			<Typography
				variant="h1"
				sx={{
					fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem", lg: "2rem" },
					fontWeight: "bold",
				}}
			>
				About Me
			</Typography>
			<p>
				A bit more about me. I discovered my passion for coding over 5 years ago when I
				enrolled onto GCHQ's Cyber Discover programme. Whilst I did explore other interests
				of mine at A-Level, using code to problem solve has always been a fun challenge of
				mine. Since starting my journey, I have been able to learn a variety of languages
				and frameworks such as JavaScript, HTML, CSS, React and SQL. My current focus is to
				increase my knowledge of these languages and start some personal projects such as
				this website. I also hope to work towards my personal development goals including
				journaling, embarking on more hikes, exploring photography, and picking up my hobby
				of reading again :)
			</p>
		</div>
	);
};
