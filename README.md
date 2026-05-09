# Waku i18n POC

## Translation Functions

This project provides three translation utility functions for managing internationalization (i18n). Choose the function that best fits your use case:

---

### 1. `translateI18n(lang: string, file: string, key: string): string`

**Purpose**: Directly translate using a specific language, file, and key.

**Usage**: When you need explicit control over which language to use, bypassing the current i18n language setting.

**Example**:
```typescript
import { translateI18n } from './i18n/translate';

const frenchWelcome = translateI18n('fr', 'messages', 'welcome');
// Reads from: ./src/lang/fr/messages.json → welcome key
```

**Behavior**:
- Reads from `./src/lang/{lang}/{file}.json`
- Returns the value for the given key
- Returns `#{lang}.{file}.{key}` if file or key doesn't exist

---

### 2. `translate(file: string, key: string): string`

**Purpose**: Translate using the current active language (recommended for most components).

**Usage**: In React components where you want to use the currently active language from i18n settings.

**Example** (from the Nav component):
```typescript
import { translate } from './i18n/translate';
import i18n from './i18n/i18n';

export const Nav = () => {
    const lang = i18n.getLanguage();

    return <>
        <Link to="/" className="mt-4 inline-block underline">
            { translate('pages', 'home') }
        </Link> | 
        <Link to="/about" className="mt-4 inline-block underline">
            { translate('pages', 'about') }
        </Link> | 
        <Link to={`/${lang}/contact`} className="mt-4 inline-block underline">
            { translate('pages', 'contact') }
        </Link> | 
        <Link to={`/${lang}/idiom`} className="mt-4 inline-block underline">
            { translate('pages', 'idiom') }
        </Link>
    </>
}
```

**Behavior**:
- Uses the current language from `i18n.getLanguage()`
- Reads from `./src/lang/{currentLang}/{file}.json`
- Returns the value for the given key
- Returns `#{currentLang}.{file}.{key}` if not found

---

### 3. `trans(file_key: string): string`

**Purpose**: Translate using a combined key format (file.key), using the current active language.

**Usage**: When you prefer a shorthand notation combining file and key.

**Example**:
```typescript
import { trans } from './i18n/translate';

const welcomeMessage = trans('messages.welcome');
// Equivalent to: translate('messages', 'welcome')

const homePageTitle = trans('pages.home');
// Reads from: ./src/lang/{currentLang}/pages.json → home key
```

**Behavior**:
- Accepts format: `{file}.{key}` (e.g., `'messages.welcome'`)
- Splits on the first dot
- Uses current language from `i18n.getLanguage()`
- Returns `#{currentLang}.{file_key}` if format is invalid or not found

---

## Translation File Structure

Organize your translations in `./src/lang/`:

```
src/lang/
├── en/
│   ├── messages.json
│   ├── pages.json
│   └── auth.json
└── fr/
    ├── messages.json
    ├── pages.json
    └── auth.json
```

Example `messages.json`:
```json
{
  "welcome": "Welcome",
  "goodbye": "Goodbye"
}
```

---

## Summary

| Function | Current Lang? | Format | Use Case |
|----------|---------------|--------|----------|
| `translateI18n` | ❌ No (explicit) | 3 params | Specific language needed |
| `translate` | ✅ Yes | 2 params | Default for most components |
| `trans` | ✅ Yes | 1 param (combined) | Shorthand notation |