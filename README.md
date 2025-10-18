# React Native Expo Project with New Architecture + TypeScript

This is a React Native Expo project with:
- ✅ **TypeScript** support
- ✅ **New Architecture** enabled (Fabric + TurboModules)
- ✅ Codegen

## Project Setup

The project is already configured and dependencies are installed.

### New Architecture Configuration

The new architecture is enabled in `app.json`:
```json
{
  "expo": {
    "newArchEnabled": true
  }
}
```

## Running the App

### Start the development server:
```bash
npm start
```

### Run on specific platforms:
```bash
# Android
npm run android

# iOS (requires macOS)
npm run ios

# Web
npm run web
```

## Project Structure

- `App.tsx` - Main application entry point
- `src/`
  - `screens/` - Screen components
    - `HomeScreen.tsx` - Home screen
  - `components/` - Reusable UI components
    - `Header.tsx` - Header component
    - `WelcomeCard.tsx` - Welcome card component
- `app.json` - Expo configuration (new architecture enabled here)
- `tsconfig.json` - TypeScript configuration
- `assets/` - Image assets (icons, splash screen)
- `package.json` - Project dependencies

## Dependencies

- **Expo SDK**: ~54.0.13
- **React**: 19.1.0
- **React Native**: 0.81.4
- **TypeScript**: ^5.9.3

## Notes

- The new architecture is enabled by default in Expo SDK 54+
- All dependencies are installed and ready to use
- The project uses the blank template as a starting point
