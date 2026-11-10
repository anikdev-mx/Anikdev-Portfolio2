import Link from "next/link";

const services = [
  { title: "Bot Developer", description: "Discord bots with commands, embeds, buttons, ticket systems and custom automation.", href: "/bot-developer" },
  { title: "DC & MC Server Developer", description: "Discord community setup and Minecraft server configuration, plugins and management.", href: "/dc-mc-server-developer" },
  { title: "Panel Developer", description: "Hosting panel setup, customization, integrations and administration tools.", href: "/panel-developer" },
  { title: "Petro Manager Bot", description: "A management bot concept for hosting communities and server operations.", href: "/petro-manager-bot" },
  { title: "Payment Gateway Bot", description: "Discord payment workflow bots with order handling and payment status updates.", href: "/payment-gateway-bot" },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="group bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 rounded-xl p-7 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 transition-all">
              <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-300">{service.title}</h3>
              <p className="text-white/70 text-sm mb-5">{service.description}</p>
              <span className="text-purple-400 font-medium text-sm">VIEW DETAILS →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
