/**
 * Weavecoder site configuration.
 * Change SITE_DOMAIN here to update the domain across the entire site.
 */
export const SITE_DOMAIN = 'weavecoder.nramos.dev';

export const SITE = {
  name: 'Weavecoder',
  tagline: 'Your code, woven intelligently.',
  description:
    'CLI coding agent in Rust with native Agent Swarm for fast parallel requests, local-first models, and an embedded Code Knowledge Graph.',
  github: 'https://github.com/nicolasramos-es/weavecoder',
  license: 'MIT',
  version: '0.67.0',
};

export const INSTALL = {
  macosLinux: `curl -fsSL https://raw.githubusercontent.com/nicolasramos-es/weavecoder/main/install.sh | bash`,
  windows: `irm https://raw.githubusercontent.com/nicolasramos-es/weavecoder/main/install.ps1 | iex`,
  source: `git clone https://github.com/nicolasramos-es/weavecoder.git
cd weavecoder
cargo build --release --bin wvc`,
};

export const QUICKSTART = [
  {
    step: 1,
    title: 'Connect a local model',
    code: `wvc login --provider ollama`,
    note: 'Works with Ollama, LM Studio, oMLX, or any OpenAI-compatible endpoint.',
  },
  {
    step: 2,
    title: 'Talk to the agent',
    code: `wvc --provider ollama --model llama3.2 run 'hola'`,
  },
  {
    step: 3,
    title: 'Index your project',
    code: `wvc init ./my-project --db ckg.db
wvc code-search "parseConfig" --db ckg.db`,
    note: 'Tree-sitter extracts symbols, relations, and imports into SQLite + FTS5.',
  },
];

export const FEATURES = [
  {
    title: 'Agent Swarm',
    description:
      'Fire multiple requests in parallel, orchestrated natively. No third-party orchestrator needed.',
    icon: 'swarm',
  },
  {
    title: 'Local Models First',
    description:
      'Ollama, LM Studio, oMLX/llama.cpp, or any OpenAI-compatible endpoint. Your data stays on your machine.',
    icon: 'local',
  },
  {
    title: 'Code Knowledge Graph',
    description:
      'Tree-sitter parses your codebase into a graph. "Who calls X?" "What depends on Y?" answered instantly.',
    icon: 'graph',
  },
  {
    title: 'Semantic Search',
    description:
      'Local embeddings (all-MiniLM-L6-v2) find code by meaning, not just keywords.',
    icon: 'search',
  },
  {
    title: 'Incremental Indexing',
    description:
      'Only re-indexes files that changed. Large codebases stay fast.',
    icon: 'incremental',
  },
  {
    title: 'Cross-Platform',
    description:
      'Linux, macOS, and Windows 11 (PowerShell 5.1+). One binary, three platforms.',
    icon: 'platform',
  },
];
