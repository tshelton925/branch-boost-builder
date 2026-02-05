

# Scenario Pipeline - Always-Visible Scenario Sidebar

## Overview

Instead of burying your saved scenarios behind a "Load" dialog, this feature adds a persistent **Scenario Pipeline** panel directly on the dashboard. All your saved scenarios are stacked vertically like a pipeline, each with a trash icon for quick cleanup. You can click any scenario to load it, and the currently active one is highlighted. This makes it dead simple to build up a library of scenarios and jump between them for comparison.

---

## What Changes

### 1. Scenario Pipeline Panel (New Component)

A new collapsible sidebar/panel that lives on the left side of the dashboard, always visible. It shows:

- A header with "Scenario Pipeline" title and a count badge (e.g., "5 scenarios")
- A stacked list of all saved scenarios, ordered by most recently updated
- Each scenario card shows:
  - Scenario name (truncated if long)
  - Last updated timestamp
  - Tags (if any) as small badges
  - A **trash icon** button on the right to delete inline (with confirmation)
  - A subtle highlight/border when it is the currently loaded scenario
- An **"+ Add New"** button at the top of the pipeline to quickly save the current form as a new scenario or start fresh
- A search/filter input at the top for when the list gets long
- The panel auto-refreshes after saving or deleting

### 2. Dashboard Layout Change

The current dashboard is a single-column layout. This will shift to a two-panel layout:

```text
+-------------------+----------------------------------------+
| Scenario Pipeline |  KPI Panel                             |
| (left sidebar)    |                                        |
|                   |  Tabs: Assumptions | Expenses | ...    |
| [+ Add New]       |                                        |
| [Search...]       |  [Tab Content]                         |
|                   |                                        |
| > Scenario A  [x] |                                        |
|   Scenario B  [x] |                                        |
|   Scenario C  [x] |                                        |
|   Scenario D  [x] |                                        |
|                   |                                        |
+-------------------+----------------------------------------+
```

- The pipeline panel takes roughly 280px on desktop
- On mobile, it collapses into a slide-out drawer triggered by a button in the header
- The main content area fills the remaining width

### 3. Inline Delete with Confirmation

Each scenario in the pipeline has a trash can icon. Clicking it shows a small inline confirmation (or a popover) asking "Delete this scenario?" with Confirm/Cancel -- no full-screen dialog needed. This keeps the interaction fast and focused.

### 4. Active Scenario Highlighting

The currently loaded scenario gets a colored left border and a subtle background tint so you can always see which one is active at a glance. If the current form has unsaved changes, a small dot or "(edited)" label appears next to the active scenario name.

### 5. Quick Actions per Scenario

Each scenario card in the pipeline will have hover actions:
- **Click** the card to load it (replaces current form -- with unsaved-changes check)
- **Trash icon** to delete
- The existing Share and Compare features remain in the header toolbar

### 6. Auto-Refresh on Save

When you save a scenario (via the Save button or Save dialog), the pipeline automatically refreshes its list. If it was a new save, the new scenario appears at the top of the stack. If it was an update, the existing entry refreshes its timestamp.

---

## Files Modified

| File | What Changes |
|---|---|
| `src/components/ScenarioPipeline.tsx` | **New file** -- the stacked pipeline panel component |
| `src/components/Dashboard.tsx` | Restructure layout to include the pipeline panel alongside main content; add state for pipeline refresh trigger; wire unsaved-changes check into pipeline click-to-load |
| `src/components/DashboardHeader.tsx` | Add a mobile toggle button for the pipeline drawer; optionally simplify by removing the "Load" button (pipeline replaces it) |
| `src/hooks/useScenarioPipeline.ts` | **New file** -- custom hook managing the scenario list state, loading, deleting, and refresh logic (extracted from ScenarioManager for reuse) |

No database changes needed -- this uses the existing `scenarios` table and existing `loadScenarios` / `deleteScenario` storage functions.

---

## Technical Details

### New Hook: `useScenarioPipeline.ts`

Extracts the scenario-list logic into a reusable hook so both the pipeline and the existing ScenarioManager/Compare dialog can share it:

- `scenarios: ProFormaScenario[]` -- the loaded list
- `loading: boolean` -- loading state
- `refresh()` -- re-fetches from the database
- `remove(id: string)` -- deletes a scenario and updates the local list
- `searchQuery / setSearchQuery` -- for filtering
- `filteredScenarios` -- computed filtered list
- Auto-loads on mount and exposes a `refreshKey` counter that Dashboard can increment after saves

### New Component: `ScenarioPipeline.tsx`

Props:
- `scenarios: ProFormaScenario[]` -- the scenario list
- `loading: boolean`
- `currentScenarioId: string | null` -- to highlight the active one
- `isDirty: boolean` -- to show "(edited)" indicator
- `onSelect: (scenario: ProFormaScenario) => void` -- click-to-load callback
- `onDelete: (id: string) => void` -- delete callback
- `onNew: () => void` -- add new callback
- `searchQuery: string`
- `onSearchChange: (q: string) => void`

Structure:
- Header section with title, count badge, and "+ Add New" button
- Search input with a search icon
- Scrollable list of scenario cards using existing Card/Badge components
- Each card: name, timestamp, tags, trash icon
- Active card gets `border-l-4 border-primary bg-primary/5` styling
- Delete uses a Popover confirmation (lightweight, no full dialog)
- Empty state: "No scenarios yet. Save your first one!"

### Dashboard.tsx Layout Changes

The main content area wraps in a flex layout:

```text
<div className="flex gap-6">
  <ScenarioPipeline ... />    <!-- 280px, shrink-0 -->
  <div className="flex-1">   <!-- existing KPI + Tabs -->
    ...
  </div>
</div>
```

On mobile (below `lg` breakpoint):
- The pipeline hides by default
- A toggle button in the header opens it as a `Sheet` (slide-out drawer from the left)
- Uses the existing `Sheet` component from the UI library

### Dashboard.tsx State Changes

- Import and use `useScenarioPipeline` hook
- Pass `refresh` trigger after `handleSaveSuccess`
- Wire `onSelect` through the existing unsaved-changes check flow (same as `handleNew` pattern -- if dirty, confirm before switching)
- Remove or keep the "Load" dialog button (the pipeline replaces its core function, but the dialog can remain as an alternative)

### DashboardHeader.tsx Changes

- Add a `onTogglePipeline` prop and a sidebar toggle icon button (visible only on mobile)
- The "Load" button text can change to "Pipeline" or be removed entirely since the sidebar replaces it

### Interaction Flow

1. User opens the dashboard -- pipeline loads and shows all saved scenarios
2. User fills out a form and clicks Save -- pipeline refreshes, new scenario appears at top
3. User clicks "+ Add New" -- triggers the existing `handleNew` flow (with unsaved-changes check)
4. User clicks a scenario card -- triggers load (with unsaved-changes check if dirty)
5. User clicks the trash icon on a card -- popover confirmation appears, scenario deletes on confirm
6. Active scenario is always highlighted with a colored border
7. On mobile, user taps a hamburger/sidebar icon to slide the pipeline in

