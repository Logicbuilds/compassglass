# Next.js Migration - Remaining Tasks

**Migration Status**: ~95% Complete
**Started**: April 16, 2026
**Framework Transition**: Create React App (CRA) → Next.js 15 with App Router

---

## ✅ Completed Work

### Core Migration

- [x] Next.js project structure initialized
- [x] App Router configured with route grouping `(routes)`
- [x] All 8 pages migrated to app directory structure
- [x] Page-based routing (no manual routing needed)
- [x] TypeScript configuration updated
- [x] Metadata API implemented for page titles/meta tags

### Component Updates

- [x] Navigation migrated from `react-router-dom` to Next.js `Link`
- [x] Header component updated with `usePathname` hook
- [x] Footer component updated with `usePathname` hook
- [x] Button component updated to use Next.js `Link`
- [x] `react-helmet-async` removed (not needed with Next.js Metadata API)
- [x] Client/Server component directives properly set

### Build System

- [x] Updated `package.json` with Next.js dependencies
- [x] Removed: `react-scripts`, `react-router-dom`, `react-helmet-async`, `plop` templates
- [x] Added: `next`, `@svgr/webpack`
- [x] Build scripts simplified to: `npm run dev`, `npm run build`, `npm start`
- [x] Removed: CRA-specific scripts (wireup, plop, etc.)

### Styling

- [x] Sass/SCSS configuration working
- [x] Global styles imported in `app/layout.tsx`
- [x] Removed duplicate Sass imports
- [x] Removed missing `generated` SCSS import

---

## ⚠️ Remaining Tasks

### 1. **Fix SVG Icon Imports** (High Priority)

**Status**: Build fails due to ReactComponent SVG imports
**Affected Files**:

- `src/components/common/Header/Header.tsx` - Logo SVG
- `src/components/common/Footer/Footer.tsx` - Social icons (Facebook, Instagram, LinkedIn)
- `src/components/pages/Home/Home.tsx` - Logo, phone, email, external icons
- `src/components/pages/Contact/Contact.tsx` - Phone, email, external icons

**Root Cause**: `@svgr/webpack` configuration in `next.config.ts` not properly recognizing SVG `ReactComponent` exports

**Solution Options**:

**Option A (Recommended):** Update imports to use next/image instead

```typescript
// Before:
import { ReactComponent as IconPhoneSVG } from 'assets/images/icon-phone.svg';
<IconPhoneSVG />

// After:
import Image from 'next/image';
import IconPhone from 'assets/images/icon-phone.svg';
<Image src={IconPhone} alt="Phone icon" width={24} height={24} />
```

**Option B:** Comment out SVG ReactComponent imports and use link text instead

```typescript
// <IconPhoneSVG />
// Icon would be replaced with text: "(123) 456-7890"
```

**Option C:** Configure webpack properly in `next.config.ts`

- Review `webpack` config for SVG rule conflicts
- Ensure file-loader exclusion is working
- Test with `npm run build`

**Estimated Time**: 30-45 minutes

---

### 2. **Fix Sass Deprecation Warnings** (Medium Priority)

**Status**: Warnings appear during build (will become errors in Dart Sass 3.0)
**Affected File**: `src/assets/theme/bolts/_global.scss`

**Changes Needed**:

- Line 202: Replace `lighten($aliceblue, 5%)` with `color.adjust($aliceblue, $lightness: 5%)`
- Line 248: Replace `darken($pigeonpost, 20%)` with `color.adjust($pigeonpost, $lightness: -20%)`
- Line 274: Replace `lighten($pigeonpost, 15%)` with `color.adjust($pigeonpost, $lightness: 15%)`
- Additional 6 similar replacements (see build log for exact lines)

**Estimated Time**: 15 minutes

---

### 3. **Test Full Build and Production** (Medium Priority)

**Status**: Not yet tested with all tasks complete
**Steps**:

1. Fix SVG imports (Task #1)
2. Fix Sass deprecation warnings (Task #2)
3. Run: `npm run build`
4. Verify build completes without errors
5. Run: `npm start` to test production server
6. Manual testing of all pages in browser:
   - Home (`/`)
   - About (`/about`)
   - Blog (`/blog`)
   - Contact (`/contact`)
   - FAQ (`/faq`)
   - Technical (`/technical`)
   - Terms (`/terms`)
   - 404 page (visit invalid URL)
7. Navigation and links working
8. Forms functional (Contact form with EmailJS)
9. Styles rendering correctly

**Estimated Time**: 20 minutes

---

### 4. **Remove Old Build Artifacts** (Low Priority)

**Status**: Optional cleanup
**Files/Folders to Remove**:

- `plop-templates/` - No longer needed with Next.js
- `scripts/` - Old generation scripts (wireup, plop-definitions, etc.)
- `.next/` - Can be regenerated anytime via `npm run build`

**Note**: Keep `scripts/` if you want to reference old CRA build logic

**Estimated Time**: 5 minutes

---

### 5. **Documentation & Deployment** (Low Priority)

**Status**: Not started
**Tasks**:

- [ ] Create deployment guide (Vercel recommended for Next.js)
- [ ] Document environment variables if using EmailJS
- [ ] Add GitHub Actions CI/CD for automated builds
- [ ] Update README.md with new dev commands
- [ ] Document any API changes for team

**Estimated Time**: 30-60 minutes

---

## 🚀 How to Complete the Remaining Work

### Quick Path (30-45 minutes):

1. Apply SVG import fixes (Option A recommended)
2. Fix Sass deprecation warnings
3. Run `npm run build` to verify
4. Manual testing in browser

### Verification Checklist:

```bash
# In project root:
npm install                    # Ensure all deps installed
npm run build                  # Should complete without errors
npm start                      # Start production server
# Visit http://localhost:3000 and test all pages
```

### Files to Keep Handy:

- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript settings
- `app/` - All page routes
- `src/components/` - All React components
- `src/assets/` - Images, styles, content

---

## 📋 Current Build Errors Summary

**Primary Issue**: SVG ReactComponent imports not resolving

- 13 import errors across 4 component files
- Needs webpack configuration or import method change

**Secondary Issue**: Sass deprecation warnings

- Not blocking build but will fail in future Sass versions
- Simple find-replace fixes needed

**Status**: 95% ready for production (just need SVG fix)

---

## 🎯 Recommended Next Steps

**For Immediate Use**:

1. Fix SVG imports (highest impact)
2. Run build verification
3. Deploy to production

**For Polish**:

1. Fix Sass warnings
2. Clean up old files
3. Create deployment documentation

**For Team**:

1. Update team documentation
2. Share new dev commands
3. Brief team on Next.js structure changes
