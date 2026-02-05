

# Add New Scenario / Multi-Scenario Workflow

## The Problem

Right now, the dashboard only tracks one active scenario. Once you load or save a scenario, the only way to start a fresh one is to manually change every input back to defaults. There is no "Add New" or "New Scenario" button, making it cumbersome to create multiple scenarios back-to-back.

## What Changes

### 1. "New" Button in the Dashboard Header

A new "New" button (with a `FilePlus` icon) will be added to the header toolbar, placed to the left of the Save button. Clicking it will:

- Check if the current form has unsaved changes
- If there are unsaved changes, show a confirmation dialog asking whether to save first or discard
- Reset all inputs back to defaults (using the existing `resetInputs` function in `useProForma`)
- Clear the current scenario ID and name so the subtitle returns to "Pro Forma Builder"
- The form is now blank and ready for a brand-new scenario

### 2. Unsaved Changes Detection

To prevent accidental data loss, a simple dirty-state tracker will be added to `useProForma`:

- A new `isDirty` flag that becomes `true` whenever `updateInput` is called after the last save or load
- Resets to `false` when a scenario is saved, loaded, or when "New" is confirmed
- This flag controls whether the confirmation dialog appears when clicking "New"

### 3. Confirmation Dialog

When you click "New" and have unsaved changes, a friendly alert dialog will appear:

- Title: "Start a New Scenario?"
- Message: "You have unsaved changes. Would you like to save your current work first?"
- Three options:
  - **Save & New** -- saves the current scenario, then resets to a blank form
  - **Discard & New** -- immediately resets without saving
  - **Cancel** -- closes the dialog and stays on the current scenario

### 4. Active Scenario Indicator

A subtle visual indicator in the header subtitle area will show whether the current form is a new unsaved scenario or a loaded one:

- Loaded scenario: Shows the scenario name (already works)
- New unsaved scenario: Shows "New Scenario (unsaved)" in a slightly different style
- This provides clear feedback about what state you are in

---

## Files Modified

| File | What Changes |
|---|---|
| `src/hooks/useProForma.ts` | Add `isDirty` state flag and reset logic |
| `src/components/DashboardHeader.tsx` | Add "New" button with `FilePlus` icon, update subtitle to show unsaved state |
| `src/components/Dashboard.tsx` | Add `handleNew` function, wire up unsaved-changes confirmation dialog, pass new props to header |

No new files are needed. No database changes required -- this is purely a frontend workflow improvement using existing save/load infrastructure.

---

## Technical Details

### `useProForma.ts` Changes

- Add `isDirty: boolean` state, initialized to `false`
- Set `isDirty = true` inside `updateInput`
- Set `isDirty = false` inside `resetInputs`, `loadScenarioData`, and expose a `markClean` function for after saves
- Return `isDirty` and `markClean` from the hook

### `DashboardHeader.tsx` Changes

- Add `onNew` callback prop and `isDirty` boolean prop
- Render a new "New" button with `FilePlus` icon, placed before the Save button
- Update the subtitle: when `currentScenarioName` is empty and `isDirty` is true, show "New Scenario (unsaved)"

### `Dashboard.tsx` Changes

- Import `AlertDialog` components (already imported via ScenarioManager pattern)
- Add `showNewConfirm` state to control the confirmation dialog
- `handleNew` function:
  - If `!isDirty`, call `resetInputs()` directly
  - If `isDirty`, open the confirmation dialog
- "Save & New" handler: triggers save flow, then resets on success
- "Discard & New" handler: calls `resetInputs()` immediately
- After a successful save in `handleSaveSuccess`, call `markClean()` to clear the dirty flag
- Pass `onNew` and `isDirty` as new props to `DashboardHeader`

### Button Placement (left to right)

```text
[Share] [Compare] [Export PDF] [Load] [New] [Save] [Sign Out]
```

The "New" button uses `variant="outline"` to match the toolbar style, with a `FilePlus` icon and label that hides on small screens (matching the existing responsive pattern).

