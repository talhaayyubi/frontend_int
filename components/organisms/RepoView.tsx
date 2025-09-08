import Button from "../atoms/Button";

export default function RepoView() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold text-primary">openai / codex</h1>
        <div className="flex gap-2">
          <Button className="text-sm py-1 px-2">Star</Button>
          <Button className="text-sm py-1 px-2">Fork</Button>
        </div>
      </header>

      <nav className="border-b border-foreground/10 mb-4">
        <ul className="flex gap-4 text-sm">
          <li className="pb-2 border-b-2 border-primary">Code</li>
          <li className="pb-2">Issues</li>
          <li className="pb-2">Pull requests</li>
          <li className="pb-2">Actions</li>
          <li className="pb-2">Security</li>
        </ul>
      </nav>

      <div className="grid md:grid-cols-[1fr,280px] gap-8">
        <section>
          <div className="mb-2 text-xs text-foreground/60">
            <span>160 tags</span>
          </div>
          <div className="border border-foreground/10 rounded-base overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 text-sm hover:bg-foreground/5">
              <span className="font-mono">.container</span>
              <span className="flex-1 mx-4 truncate text-foreground/70">chore: install an extension for TAML syntax highlighting...</span>
              <span className="text-foreground/60 whitespace-nowrap">3 days ago</span>
            </div>
          </div>
        </section>

        <aside className="hidden md:block border border-foreground/10 rounded-base p-4 text-sm">
          <h2 className="font-medium mb-2">About</h2>
          <p className="mb-2">Lightweight coding agent that runs in your terminal</p>
          <ul className="space-y-1 text-foreground/70">
            <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-foreground/40" />MIT license</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-foreground/40" />Releases 0.20.0</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

