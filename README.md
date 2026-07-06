# XRAY Design System

XRAY/Network is a **multi-blockchain mini app hub** by xray.network: one shell that hosts a catalog of crypto mini apps, powered by a **crypto API provider** (unified on-chain data APIs across multiple chains) and a **mini app builder** for composing new apps on top.

This repository defines the XRAY Design System: the visual and interaction rules used to build that shell and its mini apps in a consistent way.

`DESIGN.md` is the **source of truth** for design tokens, component specs, and theme behavior. If any summary in this README differs, follow `DESIGN.md`.

## What It Is

The XRAY Design System is a **content-first finance UI system**. It gives teams a shared language for how to present balances, addresses, transactions, tables, and chain metadata with high clarity and low visual noise.

The style is intentionally strict:

- A quiet canvas and hairline-bordered panels let financial data stay in focus.
- A single electric blue (`#1940ed`) is the primary action color.
- Status colors stay semantic: green for success/send/online, red for danger, yellow for caution.
- Data carries color identity (token tickers, deltas, account avatars) instead of decorative UI effects.

## What It Is For

Use this design system to:

- Build XRAY shell surfaces (navigation, account rail, app launcher, page canvas).
- Build mini app interfaces that feel native to XRAY across chains.
- Keep dark and light themes behaviorally consistent using the same semantic tokens.
- Maintain predictable UX for critical crypto actions (send, receive, fees, status, confirmations).

In short: it is for shipping **clear, trustworthy, data-dense crypto product interfaces** that still feel cohesive as XRAY expands.

## Core Design Principles

- **Data-first hierarchy:** balances, addresses, and tabular information are the visual subject.
- **Functional accenting:** blue is for actions and active states, never decoration.
- **Flat elevation on dark:** depth is mainly created with 1px borders, not heavy shadows.
- **Capsule geometry:** pill-shaped controls and rows create a recognizable XRAY silhouette.
- **Machine voice for on-chain data:** mono typography is used for addresses, hashes, and token strings.

## Theming

XRAY ships with two themes:

- **Light (default):** semantic token baseline for bright surfaces.
- **Dark (opt-in):** brand-primary mode with black-to-panel layering.

Both themes preserve the same structure, spacing, components, and interaction model.

## Typical Surfaces Covered

- Buttons, tags, badges, and status markers.
- Account avatars and asset rows.
- Balance cards and payment/send forms.
- Sidebar + content-canvas application layout patterns.
