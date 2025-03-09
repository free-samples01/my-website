import { ImageList, ImageListItem } from "@mui/material";
import { imageData } from "../data/images";
import srcset from "../utils/imageUtils";

export const PhotoGallery = () => {
	return (
		<div>
			<ImageList variant="quilted" cols={4} rowHeight={110}>
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
