import Button from "../atoms/Button";
import { FolderIcon, FileTextIcon, StarIcon, GitForkIcon } from "../icons/Octicons";

const files = [
  { name: ".devcontainer", type: "folder", time: "3 days ago" },
  { name: ".container", type: "folder", time: "2 months ago" },
  { name: ".github", type: "folder", time: "last year" },
  { name: "LICENSE", type: "file", time: "4 years ago" },
  { name: "README.md", type: "file", time: "2 months ago" },
];

export default function GithubRepo() {
  return (
    <div className="bg-canvas text-default min-h-screen">
      <header className="border-b border-default/20 px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold">
          <span className="text-muted">openai</span> / codex
        </h1>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-sm hover:text-default">
            <StarIcon className="w-4 h-4" aria-hidden="true" /> Star
          </button>
          <button className="flex items-center gap-1 text-sm hover:text-default">
            <GitForkIcon className="w-4 h-4" aria-hidden="true" /> Fork
          </button>
        </div>
      </header>
      <nav className="border-b border-default/20 px-4 flex overflow-x-auto">
        {[
          "Code",
          "Issues",
          "Pull requests",
          "Discussions",
          "Actions",
          "Security",
          "Insights",
        ].map((tab) => (
          <a
            key={tab}
            className="px-3 py-3 text-sm hover:text-default whitespace-nowrap"
            href="#"
          >
            {tab}
          </a>
        ))}
      </nav>
      <main className="px-4 py-6 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
        <section>
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted">main</span>
            <Button className="text-sm">Code</Button>
          </div>
          <ul className="border rounded-base divide-y divide-default/10">
            {files.map((file) => (
              <li
                key={file.name}
                className="px-4 py-2 flex items-center justify-between hover:bg-surface"
              >
                <div className="flex items-center gap-2">
                  {file.type === "folder" ? (
                    <FolderIcon className="w-4 h-4" aria-hidden="true" />
                  ) : (
                    <FileTextIcon className="w-4 h-4" aria-hidden="true" />
                  )}
                  <span className="font-mono text-sm">{file.name}</span>
                </div>
                <span className="text-xs text-muted">{file.time}</span>
              </li>
            ))}
          </ul>
        </section>
        <aside className="space-y-6 hidden lg:block">
          <div className="border rounded-base p-4">
            <h2 className="font-semibold mb-2 text-sm">About</h2>
            <p className="text-xs text-muted">
              Lightweight coding agent that runs in your terminal
            </p>
          </div>
          <div className="border rounded-base p-4">
            <h2 className="font-semibold mb-2 text-sm">Releases</h2>
            <p className="text-xs text-muted mb-1">
              0.30.0 <span className="text-muted">on Nov 5, 2024</span>
            </p>
            <Button variant="ghost" className="w-full text-xs">
              View all
            </Button>
          </div>
        </aside>
      </main>
    </div>
  );
}
