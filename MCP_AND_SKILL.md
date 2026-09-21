# MCP and Skill process

## MCP server

The project used the open-source `amysatterlee/nps_mcp` server, which wraps the official National Park Service API as Model Context Protocol tools.

Two MCP tool calls were made during the build:

1. `park-list` with `{ "stateCode": "DC" }` to confirm the available Washington, DC park records and identify Rock Creek Park's code, `rocr`.
2. `park-details` with `{ "parkCode": "rocr" }` to retrieve the detailed park record.

The second website is a static GitHub Pages site. MCP was used at build time to research and structure the content; the published page does not contact the MCP server or require an API key when a visitor opens it.

## Skill

The Codex `sites:sites-building` skill supplied the website-building workflow. A skill is a reusable instruction package for the AI agent, while an MCP server supplies external tools and data.

The skill influenced the result by requiring:

- a coherent first viewport centered on the visitor's task;
- a distinct visual direction instead of a default template;
- real, audience-appropriate copy instead of filler;
- semantic HTML, accessible labels, keyboard-usable controls, and reduced-motion support;
- responsive layouts for desktop and mobile;
- a site-specific favicon;
- verified images and proper photo credits;
- a meaningful preview followed by visual and interaction checks.

For this page, those instructions led to the field-guide layout, the responsive park facts panel, the three-option itinerary control, current-condition links, a visible data-provenance section, and mobile layout testing.

## Division of responsibilities

| Component | Role in the project |
| --- | --- |
| Prompt | Defined the assignment and requested two contrasting sites. |
| MCP server | Retrieved structured NPS park data. |
| Skill | Guided the design, implementation, accessibility, and validation workflow. |
| Static website | Presents the resulting content on GitHub Pages without exposing credentials. |
