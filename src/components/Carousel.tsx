import { useState } from "react";
import type { MediaItem } from "../types";

interface Props {
	movies: MediaItem[];
	setFeatured: (movie: MediaItem) => void;
}

export default function Carousel({ movies, setFeatured }: Props) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="overflow-hidden whitespace-nowrap w-full py-6"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				className={`flex gap-4 animate-marquee ${isHovered ? "paused" : ""}`}
			>
				{[...movies, ...movies].map((item, index) => (
					<img
						key={`${item.Id}-${index}`}
						src={`/assets/${item.CoverImage}`}
						alt={item.Title}
						onClick={() => setFeatured(item)}
						className="h-64 rounded-lg inline-block cursor-pointer hover:scale-110 transition-transform duration-300"
					/>
				))}
			</div>
		</div>
	);
}
