# React Native Expo Project with New Architecture

This is a React Native Expo project with the **new architecture** enabled, including:
- ✅ Fabric (new rendering system)
- ✅ TurboModules (new native modules system)
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

- `App.js` - Main application component
- `app.json` - Expo configuration (new architecture enabled here)
- `assets/` - Image assets (icons, splash screen)
- `package.json` - Project dependencies

## Dependencies

- **Expo SDK**: ~54.0.13
- **React**: 19.1.0
- **React Native**: 0.81.4

## Notes

- The new architecture is enabled by default in Expo SDK 54+
- All dependencies are installed and ready to use
- The project uses the blank template as a starting point
