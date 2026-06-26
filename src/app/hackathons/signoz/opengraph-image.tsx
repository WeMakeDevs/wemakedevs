import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Agents of SigNoz — WeMakeDevs Hackathon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				background: "#0b0c0e",
				color: "#f5f5f5",
				padding: "72px 80px",
				fontFamily: "sans-serif",
				position: "relative",
			}}
		>
			{/* accent glows */}
			<div
				style={{
					position: "absolute",
					top: -260,
					right: -180,
					width: 680,
					height: 680,
					borderRadius: "50%",
					background:
						"radial-gradient(circle, rgba(229,80,42,0.28) 0%, rgba(11,12,14,0) 65%)",
					display: "flex",
				}}
			/>
			<div
				style={{
					position: "absolute",
					bottom: -320,
					left: -220,
					width: 760,
					height: 760,
					borderRadius: "50%",
					background:
						"radial-gradient(circle, rgba(43,227,139,0.16) 0%, rgba(11,12,14,0) 65%)",
					display: "flex",
				}}
			/>

			{/* brand lockup */}
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: 18,
					fontSize: 30,
					fontWeight: 700,
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: "6px 14px",
						borderRadius: 10,
						background:
							"linear-gradient(135deg, #ea6e4a 0%, #e5502a 100%)",
						color: "#fff",
					}}
				>
					SigNoz
				</div>
				<span style={{ color: "#62687c", fontSize: 26 }}>×</span>
				<span>WeMakeDevs</span>
			</div>

			{/* headline */}
			<div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
				<div
					style={{
						display: "flex",
						fontSize: 22,
						letterSpacing: 4,
						textTransform: "uppercase",
						color: "#2be38b",
						fontWeight: 600,
					}}
				>
					Hackathon · Jul 20 – 26, 2026
				</div>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						fontSize: 86,
						fontWeight: 800,
						lineHeight: 1.02,
						letterSpacing: -2,
					}}
				>
					Agents of&nbsp;
					<span style={{ color: "#e5502a" }}>SigNoz</span>
				</div>
				<div
					style={{
						display: "flex",
						fontSize: 26,
						color: "#c0c1c3",
						maxWidth: 820,
					}}
				>
					Observe your AI solutions using SigNoz. If you can&apos;t
					see your agents, you don&apos;t own them.
				</div>
			</div>

			{/* stat strip */}
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: 56,
					borderTop: "1px solid rgba(255,255,255,0.1)",
					paddingTop: 28,
				}}
			>
				{[
					["$10,000+", "In Prizes"],
					["3", "Tracks"],
					["OTel-native", "Zero Lock-in"],
				].map(([num, label]) => (
					<div
						key={label}
						style={{ display: "flex", flexDirection: "column" }}
					>
						<div
							style={{
								display: "flex",
								fontSize: 42,
								fontWeight: 800,
							}}
						>
							{num}
						</div>
						<div
							style={{
								display: "flex",
								fontSize: 20,
								color: "#62687c",
								letterSpacing: 1,
							}}
						>
							{label}
						</div>
					</div>
				))}
				<div
					style={{
						display: "flex",
						marginLeft: "auto",
						fontSize: 22,
						color: "#62687c",
						letterSpacing: 2,
					}}
				>
					wemakedevs.org/hackathons/signoz
				</div>
			</div>
		</div>,
		{ ...size },
	);
}
