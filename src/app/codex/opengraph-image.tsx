import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Codex × WeMakeDevs — Collaboration Proposal";
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
				background: "#07090f",
				color: "#f5f7fa",
				padding: "72px 80px",
				fontFamily: "sans-serif",
				position: "relative",
			}}
		>
			{/* accent glow */}
			<div
				style={{
					position: "absolute",
					top: -260,
					left: -200,
					width: 640,
					height: 640,
					borderRadius: "50%",
					background:
						"radial-gradient(circle, rgba(31,228,245,0.18) 0%, rgba(7,9,15,0) 65%)",
					display: "flex",
				}}
			/>
			<div
				style={{
					position: "absolute",
					bottom: -320,
					right: -220,
					width: 760,
					height: 760,
					borderRadius: "50%",
					background:
						"radial-gradient(circle, rgba(47,107,255,0.16) 0%, rgba(7,9,15,0) 65%)",
					display: "flex",
				}}
			/>

			{/* brand lockup */}
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: 22,
					fontSize: 32,
					fontWeight: 700,
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 14,
					}}
				>
					<div
						style={{
							width: 46,
							height: 46,
							borderRadius: "50%",
							border: "3px solid #f5f7fa",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div
							style={{
								width: 18,
								height: 18,
								borderRadius: "50%",
								background:
									"linear-gradient(135deg, #1fe4f5 0%, #2f6bff 100%)",
								display: "flex",
							}}
						/>
					</div>
					<span>Codex</span>
				</div>
				<span style={{ color: "#6b7280", fontSize: 28 }}>×</span>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 12,
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							padding: "6px 12px",
							borderRadius: 10,
							background:
								"linear-gradient(135deg, #2f6bff 0%, #1739b0 100%)",
							color: "#fff",
							fontSize: 24,
							letterSpacing: -1,
						}}
					>
						<span>&lt;</span>
						<span style={{ color: "#1fe4f5" }}>&gt;</span>
					</div>
					<span>WeMakeDevs</span>
				</div>
			</div>

			{/* headline */}
			<div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
				<div
					style={{
						display: "flex",
						fontSize: 22,
						letterSpacing: 4,
						textTransform: "uppercase",
						color: "#1fe4f5",
						fontWeight: 600,
					}}
				>
					Collaboration Proposal · 2026
				</div>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						fontSize: 76,
						fontWeight: 800,
						lineHeight: 1.05,
						letterSpacing: -2,
					}}
				>
					Put&nbsp;
					<span
						style={{
							background:
								"linear-gradient(135deg, #1fe4f5 0%, #2f6bff 100%)",
							backgroundClip: "text",
							color: "transparent",
						}}
					>
						Codex in the hands of builders
					</span>
					&nbsp;worldwide.
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
					["200K+", "Community Builders"],
					["5,000+", "Hackathon Participants"],
					["1.6M+", "Content Reach"],
				].map(([num, label]) => (
					<div
						key={label}
						style={{ display: "flex", flexDirection: "column" }}
					>
						<div
							style={{
								display: "flex",
								fontSize: 46,
								fontWeight: 800,
							}}
						>
							{num}
						</div>
						<div
							style={{
								display: "flex",
								fontSize: 20,
								color: "#a4acbc",
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
						color: "#6b7280",
						letterSpacing: 2,
					}}
				>
					wemakedevs.org/codex
				</div>
			</div>
		</div>,
		{ ...size },
	);
}
