---
title: Agent Discovery and Trusted Resource Networks
created: 2026-04-21
updated: 2026-04-27
type: project-brief
tags: [agents, discovery, indexing, protocols, project-idea, infrastructure]
sources:
  - /Users/aimee/Obsidian/AgentVault/_sources/notes/2026-04-10__0003__5356cd46c4b4.md
  - /Users/aimee/Obsidian/AgentVault/_sources/notes/2026-04-12__0001__c2d8d7ab89b3.md
source_urls:
  - https://llmstxt.org/
  - https://modelcontextprotocol.io/
  - https://modelcontextprotocol.io/registry/about
  - https://github.com/modelcontextprotocol/registry
  - https://github.com/IBM/mcp-context-forge
  - https://github.com/AnswerDotAI/llms-txt
  - https://github.com/thedaviddias/llms-txt-hub
  - https://github.com/langchain-ai/mcpdoc
  - https://github.com/pathintegral-institute/mcpm.sh
  - https://github.com/agentic-community/mcp-gateway-registry
  - https://apis.guru/
  - https://openapis.org/
  - https://schema.org/
  - https://www.w3.org/TR/vc-data-model-2.0/
  - https://arxiv.org/abs/2302.04761
  - https://arxiv.org/abs/2305.15334
  - https://arxiv.org/abs/2307.16789
  - https://arxiv.org/abs/2304.08354
  - https://arxiv.org/abs/2403.15452
---

# Agent Discovery and Trusted Resource Networks

## Thesis
A likely bottleneck for capable agents is not only reasoning quality but discovery quality. If agents need to find tools, skills, services, documents, or machine-usable endpoints under execution pressure, they need something better than generic human search results. The project idea here is to build a trusted discovery layer for agents: a network of AI-optimized resources, explicit metadata, and reputation signals that let an agent find useful things quickly and safely.

## Seed idea
The captured note frames two broad futures. In one, Google and other general search engines adapt their ranking and presentation for agents. In the other, agents and their operators build a more explicit network of trusted machine-facing resources and maintain their own index. The second path is more interesting because it allows stronger control over structure, trust, freshness, and machine readability.

## Why it matters
Three problems keep showing up in agent systems:
- search results are optimized for humans, ads, and engagement rather than executable use by agents
- agents often do not know which interfaces are stable, trusted, or machine-readable
- even when a useful resource exists, there is rarely a standard way to advertise capabilities, access rules, and installation paths

If those problems are not solved, agents either waste tokens crawling the open web or fall back to brittle hardcoded tool lists.

## What exists already
Two current patterns matter here.

First, `/llms.txt` is a direct attempt to make websites easier for LLMs to use at inference time. Its proposal is simple: provide a concise, structured, markdown-readable entrypoint for machine consumption instead of forcing models to infer structure from arbitrary HTML. That is not a full discovery network, but it is a concrete machine-readable publishing primitive.

Second, the MCP ecosystem is building a structured discovery surface for tools and services. MCP itself defines a standard way for AI applications to connect to external systems, and the MCP Registry adds centralized metadata, standardized installation information, namespace management, and a REST API for discovery. That is closer to what an agent-facing resource network looks like when the target objects are tools or servers rather than arbitrary web pages.

Together these suggest a useful design direction: separate the problem into machine-readable publication, trustworthy metadata, and discovery/routing.

## Proposed system shape
A credible first version of this project could combine five layers:
- publisher format: expose machine-readable landing artifacts for resources, docs, services, and tools
- capability metadata: describe what a resource is for, what inputs it expects, what access model it uses, and how stable it is
- trust graph: keep reputation, provenance, verification, and operator approval separate from raw discoverability
- routing/index layer: support queries like "find a trusted OCR service for scanned PDFs" or "find an agent skill for GitHub issue triage"
- local policy layer: let a user or team prefer local, open, paid, private, or organization-approved resources

In practice this could look like a hybrid of search index, package registry, and skill directory rather than a clone of any one of them.

## Research questions / unknowns
Open questions worth testing:
- should discovery center on URLs, MCP servers, skills, or a more general resource manifest?
- how much can be inherited from `/llms.txt` versus requiring a richer schema?
- what trust signals matter most: DNS ownership, signatures, usage history, human curation, benchmarked reliability?
- how should an agent distinguish public discovery from policy-approved discovery inside a specific organization?
- how much should ranking depend on generic relevance versus task success history for a particular operator?

## Build path
A reasonable staged build would be:
1. define a minimal manifest for agent-usable resources
2. ingest a small curated corpus of websites, MCP servers, skills, and service endpoints
3. add trust annotations such as owner verification, protocol type, auth model, and human approval status
4. build a query interface that returns ranked candidates plus reasons
5. test it inside an agent runtime with real tasks rather than abstract retrieval benchmarks

## Relationship to the current corpus
This project brief sits between [[from-rag-to-crawlable-wikis]] and [[personal-wiki-agent-workbench]]. It now also has two direct digest-layer neighbors: [[curated-agent-resource-maps]] for the curation/discovery surface and [[domain-skill-libraries-for-agents]] for the specialization layer that curated discovery would need to expose. It also touches [[the-agent-harness]] because discovery is part of the harness, not just a web problem. If the discovery layer becomes portable and operator-owned, it also connects to [[byoc-and-working-intelligence]]. It belongs with other idea-seed pages such as [[assembly-theory-guided-battery-materials]] and [[human-powered-energy-harvesting-systems]] as part of the emerging project-brief layer.

## Source basis
### Raw seed notes
- /Users/aimee/Obsidian/AgentVault/_sources/notes/2026-04-10__0003__5356cd46c4b4.md
- /Users/aimee/Obsidian/AgentVault/_sources/notes/2026-04-12__0001__c2d8d7ab89b3.md

### External context used to flesh out the brief
- llms.txt proposal for machine-readable website guidance
- Model Context Protocol overview
- MCP Registry overview and trust/discovery model

### Original source URLs
- https://llmstxt.org/
- https://modelcontextprotocol.io/
- https://modelcontextprotocol.io/registry/about

## 2026-04-27 research expansion

### Current thesis
The strongest version of this project is a **trust-and-routing layer for agent-usable resources**, not a generic search engine and not just another MCP catalog. Agents need to discover websites, documentation, APIs, MCP servers, local skills, datasets, and services under execution constraints; a useful system should return candidates with machine-readable capability metadata, provenance, security posture, access model, freshness, and operator-specific approval status.

The current thesis is positive but narrower than the seed framing: broad public discovery is already being attacked by `/llms.txt`, MCP Registry, llms.txt directories, API directories, and enterprise MCP gateways. Alex's differentiated path is an operator-owned registry that federates these sources, separates **public availability** from **local trust**, and records task-success evidence from real agent runs.

### Problem / opportunity
Agentic systems increasingly fail at the boundary between reasoning and resource selection. The same user request can require a docs source, a package, an API, a local credentialed tool, or a human-approved service. Today those objects live in separate discovery planes:
- websites expose human HTML, sitemaps, `robots.txt`, and sometimes `/llms.txt`;
- APIs expose OpenAPI descriptions or appear in directories such as APIs.guru;
- MCP servers are emerging through the official MCP Registry and third-party package managers;
- local agents carry private skill/tool lists that are often invisible to other agents;
- enterprise gateways add governance, but usually inside a single organization.

The opportunity is to make discovery **composable and policy-aware**: an agent can ask for “a trusted OCR route for scanned PDFs” and receive ranked options across local skills, MCP servers, public SaaS APIs, and documentation sources, with reasons and warnings rather than opaque search snippets.

### Related work and prior art
Prior art is now strong enough to weaken any claim that this project is simply “the first agent resource registry.” What already exists:
- **`/llms.txt`** provides a lightweight publishing primitive for websites that want to give models concise, markdown-readable instructions or docs entrypoints.
- **MCP and the MCP Registry** provide a standard protocol and community registry for tool/server discovery, including server metadata and installation-oriented discovery.
- **Third-party MCP registries and gateways** such as mcpm.sh, IBM MCP Context Forge, and enterprise MCP gateway/registry projects are already moving toward centralized discovery, governance, auth, and observability.
- **API discovery infrastructure** such as OpenAPI and APIs.guru already handles machine-readable service description for REST APIs.
- **Tool-learning research** already studies how language models select, call, and learn tools; the missing piece for this project is less “can models call tools?” and more “how does an operator maintain a trusted, current, multi-source resource map?”

This makes novelty conditional: Alex's version should not compete head-on with MCP Registry or enterprise gateways. It should integrate them, add local policy/trust overlays, and produce evidence-backed routing decisions.

### Similar codebases / tools
- **modelcontextprotocol/registry** — official community-driven MCP server registry. This is the closest mainstream prior art for standardized agent-tool discovery, but it is focused on MCP servers rather than arbitrary resources, local skills, or cross-protocol trust routing.
- **IBM/mcp-context-forge** — gateway/registry/proxy for MCP, A2A, REST, and gRPC APIs. It is strong prior art for enterprise governance and unified access; Alex's project remains differentiated only if it is lighter-weight, operator-owned, and designed for research-team/personal-agent environments.
- **pathintegral-institute/mcpm.sh** — CLI MCP package manager and registry. Useful as a package-manager mental model: search, install, configure, and profile resources rather than just link to them.
- **agentic-community/mcp-gateway-registry** — enterprise MCP gateway/registry with auth and dynamic discovery. It validates the governance need but also warns that the space may become crowded quickly.
- **AnswerDotAI/llms-txt** and **thedaviddias/llms-txt-hub** — publishing format and directory for AI-ready docs. These are important web-resource inputs, but they do not solve local policy, execution success feedback, or tool/service trust.
- **langchain-ai/mcpdoc** — exposes llms.txt-style docs to IDEs. Relevant because docs discovery and coding-agent context are converging.
- **APIs.guru / OpenAPI** — mature API-description and API-directory precedent. Useful schema/prior-art baseline for service metadata.

### Relevant literature
The literature reinforces that tool use is becoming a core agent capability, but it also shows why discovery and trust remain separate system problems:
- **Toolformer: Language Models Can Teach Themselves to Use Tools** — shows language models can learn when and how to invoke APIs/tools, but assumes a defined tool set rather than solving open-world trusted discovery.
- **Gorilla: Large Language Model Connected with Massive APIs** — directly relevant because it targets large-scale API selection and grounded API calls; it weakens novelty for “API search for LLMs” while supporting the need for accurate registry metadata.
- **ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs** — demonstrates the scale of tool/API instruction tuning and benchmarking; useful evidence that tool universes are too large for hardcoded lists.
- **Tool Learning with Foundation Models** — survey-level framing for tool learning, reminding this project to treat tools as an ecosystem with representation, planning, execution, and evaluation concerns.
- **What Are Tools Anyway? A Survey from the Language Model Perspective** — useful conceptual caution: “tool” is inconsistently defined. Alex's schema should explicitly distinguish docs, APIs, MCP servers, skills, services, datasets, and workflows.

### Feasibility assessment
A useful prototype is feasible if the first version is a small registry-plus-ranker rather than a web-scale crawler.

Near-term path:
1. Define a minimal `agent-resource.yaml` / JSON schema with fields for resource type, capability tags, protocol, auth model, cost, privacy posture, owner/provenance, verification method, update time, install/call instructions, and known failure modes.
2. Ingest a curated corpus: a dozen local Hermes skills, selected MCP Registry entries, a handful of `/llms.txt` sites, APIs.guru specs, and internal AgentVault wiki pages.
3. Add a local trust overlay: approved/blocked/experimental, operator notes, credential boundary, data-sensitivity class, and whether the resource has succeeded in prior agent runs.
4. Build a simple query/routing CLI that returns candidates with explanation bullets and a confidence/trust status.
5. Test on real tasks: OCR a PDF, find an arXiv paper, inspect a GitHub repo, send an email draft, query a home device, or create an Obsidian note.

Operationally, the hard parts are freshness, adversarial metadata, schema drift, and avoiding a false sense of safety. The system should start with human curation and signed/local manifests before trusting arbitrary public submissions.

### Novelty and differentiation
What prior art already does well:
- public MCP-server discovery;
- AI-readable website/documentation publishing;
- OpenAPI service description;
- enterprise gateways with auth and observability;
- model-level tool-calling and API-selection research.

What remains differentiated for Alex:
- a **multi-plane registry** that covers docs, APIs, MCP servers, local skills, workflows, datasets, and wiki pages in one resource graph;
- a **local trust overlay** that separates “exists publicly” from “approved for this operator and task class”;
- **execution feedback loops** where successful/failed agent runs update rankings and warnings;
- **provenance-rich explanations** that can be written back to AgentVault / [[personal-wiki-agent-workbench]];
- lightweight integration with Hermes/OpenClaw rather than a heavyweight enterprise gateway.

Speculative connection: this could become an agent-native analogue of package managers plus web-of-trust systems, where resources are installed, pinned, signed, evaluated, and routed by task. That is promising, but it should be validated with a tiny corpus before making network-scale claims.

### Risks / failure modes
- **Registry centralization risk:** becoming a weaker clone of MCP Registry, APIs.guru, or an enterprise gateway.
- **Trust theater:** badges and metadata can look authoritative without actually predicting safety or task success.
- **Poisoned manifests:** public machine-readable manifests can be spammed or adversarially optimized for agents.
- **Schema overreach:** trying to model every resource type at once could produce an unusable ontology.
- **Stale entries:** agent resources break quickly as APIs, auth, pricing, and docs change.
- **Privacy leakage:** local policy and task-success logs may reveal sensitive workflows if synced carelessly.
- **Ranking capture:** popularity-based ranking can recreate SEO-like incentives unless local policy and provenance matter more.

### Open questions
- What is the minimal schema that distinguishes docs, APIs, MCP servers, local skills, datasets, and workflows without becoming cumbersome?
- Should trust be expressed as signed attestations, local operator annotations, reproducible tests, observed success history, or all of the above?
- What is the first “killer query” that generic search and current MCP registries handle poorly?
- How should the system handle resources that are useful only with private credentials or local network access?
- Can task-success feedback be captured without logging sensitive user data?
- Should this integrate with AgentVault as a Markdown-first index, a SQLite/JSON registry, or both?

### Future research directions
- Compare MCP Registry metadata fields against OpenAPI, Schema.org, W3C Verifiable Credentials, and package-manager metadata to identify a smallest common resource description.
- Audit a sample of MCP servers for installability, auth clarity, maintenance status, and security warnings.
- Prototype signed `.well-known/agent-resource.json` or `agent-resource.yaml` files for a few resources and compare against `/llms.txt`.
- Build a private Hermes skill/resource inventory and test whether an agent can choose better tools with the registry than with a flat tool list.
- Explore a trust model inspired by software package registries: namespaces, signed releases, maintainer identity, vulnerability advisories, pinning, and local allowlists.

### Implementation sketch / experiment ideas
- **Week 1 artifact:** a Markdown/JSON schema plus 20 hand-curated resources across five classes: docs, APIs, MCP servers, local skills, and wiki pages.
- **Routing experiment:** take 25 real Hermes tasks and ask the registry to return top-3 resources with reasons; compare against the resources actually used.
- **Trust experiment:** score each resource for owner verification, install friction, auth/data exposure, freshness, and observed success; see which fields predict useful selection.
- **Obsidian integration:** write selected resources and task outcomes back into AgentVault pages using wikilinks such as [[from-rag-to-crawlable-wikis]], [[curated-agent-resource-maps]], [[domain-skill-libraries-for-agents]], and [[the-agent-harness]].
- **Kill criterion:** if MCP Registry plus a local allowlist covers the first 25 tasks with little added value, narrow the project to a Hermes-specific resource inventory instead of building a new public network.

### Citations / sources accessed 2026-04-27
- Answer.AI, “The /llms.txt file” — https://llmstxt.org/ — accessed 2026-04-27. Relevance: primary publishing primitive for AI-readable website guidance.
- Model Context Protocol, “What is the Model Context Protocol?” — https://modelcontextprotocol.io/ — accessed 2026-04-27. Relevance: standard protocol layer for agent-tool connections.
- Model Context Protocol, “The MCP Registry” — https://modelcontextprotocol.io/registry/about — accessed 2026-04-27. Relevance: strongest direct prior art for agent-facing tool/server discovery.
- GitHub, `modelcontextprotocol/registry` — https://github.com/modelcontextprotocol/registry — accessed 2026-04-27. Relevance: community-driven MCP registry implementation and metadata baseline.
- GitHub, `IBM/mcp-context-forge` — https://github.com/IBM/mcp-context-forge — accessed 2026-04-27. Relevance: gateway/registry/proxy prior art covering MCP, A2A, REST, and gRPC APIs.
- GitHub, `pathintegral-institute/mcpm.sh` — https://github.com/pathintegral-institute/mcpm.sh — accessed 2026-04-27. Relevance: MCP package-manager model for search/configuration/profile workflows.
- GitHub, `agentic-community/mcp-gateway-registry` — https://github.com/agentic-community/mcp-gateway-registry — accessed 2026-04-27. Relevance: enterprise governance and dynamic discovery prior art.
- GitHub, `AnswerDotAI/llms-txt` — https://github.com/AnswerDotAI/llms-txt — accessed 2026-04-27. Relevance: source repository for the llms.txt proposal.
- GitHub, `thedaviddias/llms-txt-hub` — https://github.com/thedaviddias/llms-txt-hub — accessed 2026-04-27. Relevance: directory evidence that AI-ready docs discovery is already emerging.
- GitHub, `langchain-ai/mcpdoc` — https://github.com/langchain-ai/mcpdoc — accessed 2026-04-27. Relevance: example connecting llms.txt-style docs to developer/agent workflows.
- APIs.guru — https://apis.guru/ — accessed 2026-04-27. Relevance: mature public API-directory analogue for agent resource registries.
- OpenAPI Initiative — https://openapis.org/ — accessed 2026-04-27. Relevance: established machine-readable API-description standard.
- Schema.org — https://schema.org/ — accessed 2026-04-27. Relevance: broad structured metadata precedent for web resources.
- W3C, “Verifiable Credentials Data Model v2.0” — https://www.w3.org/TR/vc-data-model-2.0/ — accessed 2026-04-27. Relevance: possible trust/attestation vocabulary for claims about resources.
- Schick et al., “Toolformer: Language Models Can Teach Themselves to Use Tools” — https://arxiv.org/abs/2302.04761 — accessed 2026-04-27. Relevance: foundational tool-use learning prior art.
- Patil et al., “Gorilla: Large Language Model Connected with Massive APIs” — https://arxiv.org/abs/2305.15334 — accessed 2026-04-27. Relevance: large-scale API selection and grounding prior art.
- Qin et al., “ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs” — https://arxiv.org/abs/2307.16789 — accessed 2026-04-27. Relevance: scale evidence for tool/API universe complexity.
- Qin et al., “Tool Learning with Foundation Models” — https://arxiv.org/abs/2304.08354 — accessed 2026-04-27. Relevance: survey/context for tool-learning ecosystem.
- Wang et al., “What Are Tools Anyway? A Survey from the Language Model Perspective” — https://arxiv.org/abs/2403.15452 — accessed 2026-04-27. Relevance: conceptual taxonomy caution for defining “resource” vs “tool.”

### Weak-source notes
- arXiv search API and Semantic Scholar API returned HTTP 429/timeouts during this autonomous run. Direct arXiv abstract pages for known relevant papers were accessible and used instead.
- GitHub search returned several noisy false positives for broad queries; only clearly relevant repositories were retained in the project notes.
- No browser automation was used; source access relied on public APIs/direct pages to avoid cron stalls.

## Nightly research log

### 2026-04-27
Selected as both the highest-upside and least-developed remaining top-level stub: it had strong strategic fit but no dated nightly research log and only three seed URLs. This pass challenged novelty against MCP Registry, third-party MCP gateways, llms.txt directories, OpenAPI/API directories, and tool-learning literature. The project is now framed as a local/operator-owned trust-and-routing overlay rather than a new generic public registry. Key next step: build a 20-resource schema/corpus and test whether it improves real Hermes/OpenClaw tool selection over a flat tool list.

