

# Suggested Enhancements for the Scenario Pipeline

These are additive improvements that enhance what you already have without changing the current design, flow, or architecture. Each one is independent -- you can pick and choose.

---

## 1. Duplicate Scenario Button

Add a small "copy" icon next to the trash icon on each pipeline card. Clicking it creates an instant copy of that scenario with the name "[Original Name] (Copy)" and loads it into the editor. This saves you from manually recreating similar scenarios -- just duplicate, tweak a few numbers, and save.

**What changes:** A new icon button on each pipeline card + a `duplicateScenario` function in the storage layer that inserts a copy with a new ID.

---

## 2. Rename Scenario Inline

Double-click a scenario name in the pipeline to edit it inline (turns into a text input, press Enter to save, Escape to cancel). Right now, renaming requires going through the Save dialog. This makes quick name corrections effortless.

**What changes:** A small state toggle in the `ScenarioPipeline` component + an `updateScenarioName` function in storage.

---

## 3. Sort Options for the Pipeline

Add a small sort toggle (icon button) near the search bar that lets you sort by:
- Most recently updated (default, current behavior)
- Alphabetical (A-Z)
- Oldest first

This helps when your pipeline grows to 10+ scenarios and you want to find things differently than search.

**What changes:** A sort state + sort dropdown in the pipeline header, applied to the filtered list in `useScenarioPipeline`.

---

## 4. Quick KPI Preview on Hover

When you hover over a scenario card in the pipeline, show a small tooltip or popover with 3-4 key KPIs (Net Revenue, Net Income, Profit Margin, LO count) from that scenario's saved outputs. This lets you quickly scan scenarios without loading them.

**What changes:** A `HoverCard` or `Tooltip` wrapping each pipeline card that reads from the scenario's stored `outputs` data.

---

## 5. Pipeline Collapse/Expand Toggle

Add a small chevron or collapse button at the top of the pipeline that shrinks it to just icons (about 48px wide) on desktop, giving you more room for the main editor. Click again to expand. The pipeline state persists via localStorage.

**What changes:** A `collapsed` state in `Dashboard.tsx`, a narrower rendering mode in `ScenarioPipeline`, and localStorage persistence.

---

## Implementation Priority

I would recommend this order based on impact vs. effort:

1. **Duplicate Scenario** -- Highest value, saves the most time when building out a pipeline of comparison scenarios
2. **Quick KPI Preview on Hover** -- Lets you scan without loading, very useful for comparison workflows
3. **Rename Inline** -- Small quality-of-life improvement
4. **Sort Options** -- Useful once pipeline grows large
5. **Collapse/Expand Toggle** -- Nice-to-have for screen real estate

Each of these can be built independently without touching the existing save/load/delete/switch flow.

