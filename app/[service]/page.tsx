import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = {
  "bot-developer": {
    title: "BOT DEVELOPER",
    intro: "Discord bots built around the way your community works.",
    details: ["Custom commands and slash commands", "Embeds, buttons, dropdowns and modals", "Ticket systems, moderation and automation", "Database-backed features and server utilities"]
  },
  "dc-mc-server-developer": {
    title: "DC & MC SERVER DEVELOPER",
    intro: "Community and game-server setup with a focus on a smooth member experience.",
    details: ["Discord server structure, roles and permissions", "Minecraft server setup and configuration", "Plugin configuration and community features", "Ongoing maintenance and troubleshooting"]
  },
  "panel-developer": {
    title: "PANEL DEVELOPER",
    intro: "Hosting panel setup and customization for practical server management.",
    details: ["Pterodactyl panel installation and configuration", "Theme and interface customization", "Wings and node integration support", "Panel maintenance and troubleshooting"]
  },
  "petro-manager-bot": {
    title: "PETRO MANAGER BOT",
    intro: "A management-bot project focused on making hosting operations easier.",
    details: ["Server and user management workflows", "Discord-based controls and notifications", "Organized commands and staff utilities", "Project features can be tailored to your setup"]
  },
  "payment-gateway-bot": {
    title: "PAYMENT GATEWAY BOT",
    intro: "Discord payment workflow automation for orders and customer updates.",
    details: ["Order creation and tracking", "Payment status notifications", "Staff review and customer support flow", "Gateway integration based on the provider you use"]
  }
} as const;

type ServiceSlug = keyof typeof services;

export function generateStaticParams() {
  return Object.keys(services).map((service) => ({ service }));
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const item = services[service as ServiceSlug];
  if (!item) {
    return <main className="min-h-screen bg-[#110720] text-white grid place-items-center"><div className="text-center"><h1 className="text-3xl mb-4">Page not found</h1><Link className="text-purple-300" href="/">Back to home →</Link></div></main>;
  }
  return (
    <main className="min-h-screen bg-[#110720] text-white">
      <Header />
      <section className="min-h-[75vh] flex items-center px-6 pt-28 pb-20">
        <div className="max-w-4xl mx-auto w-full">
          <p className="text-purple-400 tracking-[0.25em] text-sm mb-5">ANIK-DEV / SERVICES</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{item.title}</h1>
          <p className="text-xl text-white/75 max-w-2xl mb-10">{item.intro}</p>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-purple-950/50 p-7 md:p-10">
            <h2 className="text-2xl font-semibold mb-6">What I can help with</h2>
            <ul className="space-y-4">
              {item.details.map((detail) => <li key={detail} className="flex gap-3 text-white/80"><span className="text-purple-400">✦</span>{detail}</li>)}
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 mt-9">
            <a href="mailto:anikg4180@gmail.com" className="rounded-lg bg-purple-600 hover:bg-purple-500 px-6 py-3 font-medium transition-colors">Contact by email</a>
            <a href="https://discord.gg/6FTBCZuwYz" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/20 hover:border-purple-400 px-6 py-3 transition-colors">Join RIVEN CLOUD Discord</a>
            <Link href="/" className="px-4 py-3 text-white/70 hover:text-white">← Back home</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
