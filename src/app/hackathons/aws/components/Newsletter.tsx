import Reveal from "./Reveal";

const doc = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:#121316;color:#C6C6CD;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:28px}.card{width:100%;max-width:540px}.badge{display:inline-block;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#FF9900;border:1px solid rgba(255,153,0,.35);background:rgba(255,153,0,.08);padding:4px 10px;border-radius:999px;margin-bottom:16px}h2{color:#fff;font-size:24px;font-weight:800;letter-spacing:-.02em;margin-bottom:8px}p{font-size:14px;color:#909692;margin-bottom:20px;line-height:1.5}form{display:flex;gap:10px;flex-wrap:wrap}input{flex:1;min-width:220px;background:#0B0C0E;border:1px solid #2A2F38;color:#fff;border-radius:10px;padding:13px 15px;font-size:14px;outline:none}input:focus{border-color:#FF9900}input::placeholder{color:#6b7280}button{background:#FF9900;color:#0B0C0E;border:0;border-radius:10px;padding:13px 22px;font-weight:700;font-size:14px;cursor:pointer;transition:background .2s ease, transform .15s ease}button:hover{background:#B8422E;color:#fff}button:active{transform:scale(.98)}.ok{display:none;margin-top:14px;font-size:14px;color:#FF9900;font-weight:600}.note{margin-top:14px;font-size:12px;color:#6b7280}</style></head><body><div class="card"><span class="badge">Stay in the loop</span><h2>Register your interest</h2><p>Be the first to know when registrations open for each city, with dates, tracks, and prize updates sent straight to your inbox.</p><form onsubmit="this.style.display='none';document.getElementById('ok').style.display='block';return false"><input type="email" required placeholder="you@example.com" aria-label="Email address"><button type="submit">Notify me</button></form><div id="ok" class="ok">You are on the list. See you at the hackathons.</div><p class="note">No spam, only AWS Next Gen Hacks 2026 event updates.</p></div></body></html>`;

export default function Newsletter() {
	return (
		<section id="register" className="relative py-20 sm:py-28">
			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<Reveal className="text-center">
					<p className="font-mono text-xs uppercase tracking-[0.3em] text-orange">
						Get on the list
					</p>
					<h2 className="mt-3 font-heading font-extrabold text-heading text-3xl sm:text-4xl tracking-tight">
						Be first to register
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-body">
						Registrations open city by city. Drop your email and we will let you
						know the moment your city goes live, along with tracks and prize
						updates.
					</p>
				</Reveal>

				<Reveal className="mt-10 glass rounded-2xl p-2 sm:p-3 overflow-hidden">
					<iframe
						title="AWS Next Gen Hacks newsletter"
						className="w-full rounded-xl block"
						style={{ height: 340, border: 0, background: "#121316", aspectRatio: "auto" }}
						loading="lazy"
						srcDoc={doc}
					/>
				</Reveal>
			</div>
		</section>
	);
}
