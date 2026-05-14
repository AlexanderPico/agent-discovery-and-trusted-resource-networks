# Next steps

1. Write a minimal `agent-resource` schema with required fields only: resource type, capability tags, protocol, auth model, provenance, freshness, and usage instructions.
2. Choose the first five supported resource classes: docs, APIs, MCP servers, local skills, and wiki pages.
3. Curate 20 seed entries from real Hermes/OpenClaw resources rather than hypothetical examples.
4. Define a local trust overlay with the smallest useful status set: approved, experimental, blocked, and unknown.
5. Decide whether the source of truth should be Markdown + frontmatter, JSON/YAML manifests, SQLite, or a hybrid.
6. Implement a tiny CLI or script that answers a query with top candidates plus explanation bullets.
7. Create a 20-25 task evaluation set from real recurring Hermes jobs such as OCR, repo inspection, email drafting, and note creation.
8. Record success/failure annotations manually for the first evaluation pass instead of automating feedback loops immediately.
9. Compare performance against a flat tool list and against existing MCP-registry/local-allowlist workflows.
10. Write a narrow kill criterion document so the project can be cut down to a Hermes-specific private inventory if the broader registry idea adds little value.
