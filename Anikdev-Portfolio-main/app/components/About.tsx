export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-2xl max-w-4xl mx-auto">
            I turn ideas into useful tools for communities and hosting projects.
            <br />
            <span className="text-sm text-white/70">From Discord automation to Minecraft infrastructure and control panels.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            ["BOT DEVELOPMENT", "Custom Discord bots, ticket systems, automation and payment workflows."],
            ["SERVER DEVELOPMENT", "Discord and Minecraft server setup, configuration and management."],
            ["PANEL DEVELOPMENT", "Hosting panels, integrations, dashboards and server management tools."]
          ].map(([title, description]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-purple-950/50 p-7">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">{title}</h3>
              <p className="text-white/70 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
