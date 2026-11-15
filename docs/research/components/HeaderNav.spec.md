# HeaderNav Specification

## Overview
- **Target file:** `src/components/HeaderNav.tsx`
- **Screenshot:** `docs/design-references/desktop-1440.png`
- **Interaction model:** Click-driven dropdowns (All Microsoft, Search, Cart, Account); mobile drawer on < 768px.

## Computed Styles
- Height: 54px
- Background: #ffffff
- BorderBottom: 1px solid #e6e6e6 (subtle separator)
- MaxWidth: 1600px centered
- Font: Segoe UI, 13px, font-weight 400
- Hover: text underline or subtle highlight

## Structure & Links
- Left: Microsoft 4-square logo (108px x 23px)
- Nav Items: Microsoft 365, Teams, Copilot, Windows, Surface, Xbox, Support
- Right Actions: All Microsoft (dropdown with chevron), Search (icon + modal), Cart (icon), Sign In (icon + label)
