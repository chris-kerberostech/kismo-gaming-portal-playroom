import React, { useEffect, useState } from "react";
import "./ResultParticles.css";

const NUM_PARTICLES = 34;
const DURATION_MS = 1800;

const randomBetween = (min, max) => Math.random() * (max - min) + min;

export default function ResultParticles({ show, type }) {
	const [particles, setParticles] = useState([]);

	useEffect(() => {
		if (!show || (type !== "defeat" && type !== "draw")) {
			setParticles([]);
			return;
		}

		const next = Array.from({ length: NUM_PARTICLES }).map((_, index) => ({
			id: `${type}-${index}`,
			left: randomBetween(6, 94),
			size: randomBetween(8, 18),
			delay: randomBetween(0, 420),
			duration: randomBetween(DURATION_MS * 0.75, DURATION_MS * 1.2),
		}));
		setParticles(next);

		const timeout = window.setTimeout(() => {
			setParticles([]);
		}, DURATION_MS + 800);

		return () => window.clearTimeout(timeout);
	}, [show, type]);

	if (!particles.length) return null;

	return (
		<div className={`result-particles-layer ${type}`}>
			{particles.map((particle) => (
				<span
					key={particle.id}
					className="result-particle"
					style={{
						left: `${particle.left}%`,
						width: particle.size,
						height: particle.size,
						animationDelay: `${particle.delay}ms`,
						animationDuration: `${particle.duration}ms`,
					}}
				/>
			))}
		</div>
	);
}
