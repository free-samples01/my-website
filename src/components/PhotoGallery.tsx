import { ImageList, ImageListItem } from "@mui/material";
import { imageData } from "../data/images";
import srcset from "../utils/imageUtils";
import { useEffect, useState } from "react";

export const PhotoGallery = () => {
	const [rowHeight, setRowHeight] = useState(window.innerHeight * 0.16);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 600) {
				setRowHeight(window.innerHeight * 0.1);
				return;
			}
			setRowHeight(window.innerHeight * 0.16);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div>
			<ImageList variant="quilted" cols={4} rowHeight={rowHeight}>
				{imageData.map((item) => (
					<ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
						<img
							{...srcset(item.img, 121, item.rows, item.cols)}
							alt={item.title}
							loading="lazy"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</div>
	);
};
