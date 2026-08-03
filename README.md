# Agent Discovery and Trusted Resource Networks

- Incubation date: 2026-05-13
- Source brief filename: `agent-discovery-and-trusted-resource-networks.md`
- Why this was promoted now: it was the strongest top-level project brief in the queue, with a mature thesis, strong prior-art framing, a bounded v0 build path, and a concrete first artifact that can be started immediately.

## Current thesis
Build an operator-owned trust-and-routing layer for agent-usable resources so Hermes/OpenClaw can discover docs, APIs, MCP servers, local skills, datasets, and services with explicit provenance, trust, and policy context instead of relying on generic web search or brittle hardcoded lists.

## First milestone
Define a minimal resource-manifest/schema plus a hand-curated seed corpus of roughly 20 resources across several classes, then test whether that registry improves resource selection for real Hermes tasks.

## Immediate next steps
1. Draft the smallest viable `agent-resource` schema.
2. Select the first five resource classes to support.
3. Build a 20-resource seed corpus from local skills, MCP registry entries, APIs, docs, and wiki pages.
4. Implement a simple ranked query interface with explanation bullets.
5. Design a task-evaluation set using real Hermes/OpenClaw tasks.

## Source / origin paths
- Original top-level brief path at incubation time: `/Users/aimee/Obsidian/AgentVault/projects/agent-discovery-and-trusted-resource-networks.md`
- Workspace brief copy: `/Users/aimee/.openclaw/git/AlexanderPico/agent-discovery-and-trusted-resource-networks/docs/agentvault-project-brief.md`
- Archived source brief path after retirement: `/Users/aimee/Obsidian/AgentVault/projects/archive/incubated/2026-05-13/agent-discovery-and-trusted-resource-networks.md`

## Development

Run tests with `npm test`.
