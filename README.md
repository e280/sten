
![](https://i.imgur.com/TTZbq3k.jpeg)

# 🖋️ @e280/sten
- logging utility
- zero dependencies
- *an https://e280.org/ project*

<br/>

## quick start
- install sten
  ```sh
  npm install @e280/sten
  ```
- make your logger
  ```ts
  import {Logger} from "@e280/sten"
  export const logger = new Logger()
  ```
- log stuff
  ```ts
  await logger.log("hello world!")
  await logger.error("bad stuff", new Error("oh no!"))
  ```
  ![](https://i.imgur.com/IYaMhJ7.png)

### customize the logger
```ts
// defaults shown
export const logger = new Logger()
  .setWriter(Logger.writers.auto())
  .setColors(Logger.colors.auto())
  .setTheme(Logger.themes.auto())
  .setShaper(Logger.shapers.auto())
```

### writers
the logger ultimately emits to stdout or stderr via a writer — the available writers are:
- `auto` — *(default)* detect environment and automatically choose `deno`, `node`, or `console`
- `console` — outputs to console.log and console.error
- `node` — outputs to process.stdout and process.stderr
- `deno` — outputs to Deno.stdout and Deno.stderr
- `void` — outputs nothing

### colors
determines what happens when colors are used — available colors are:
- `auto` — *(default)* use color if it looks like we're in a color-supporting environment
- `colorful` — full ansi color support
- `colorless` — no colors (all color fns are duds)

### themes
defines where certain colors will be used:
- `auto` — *(default)* uses the basic theme (in the future this might auto-detect from an env var)
- `basic` — standard colors, red errors, blue timestamps, etc

### shapers
a shaper is a fn that transforms the content before it is logged — the available shapers are:
- `auto` — *(default)* standard setup which combines `errors` and `timestamp` together
- `errors` — displays error objects nicely
- `timestamp` — attaches a timestamp prefix to every message
- `none` — does nothing (leaves content as-is)

you can make your own shaper like this:
```ts
import {asShaper} from "@e280/sten"

const myShaper = asShaper(context => ({
  stdout: items => items,
  stderr: items => items,
}))
```

you can apply multiple shapers together like this:
```ts
logger.setShaper(
  myShaper,
  myOtherCustomShaper,
  Logger.shapers.errors(),
  Logger.shapers.timestamps(),
)
```

or you can use `combineShapers`
```ts
import {combineShapers} from "@e280/sten"

const megaShaper = combineShapers(
  myShaper,
  myOtherCustomShaper,
  Logger.shapers.errors(),
  Logger.shapers.timestamps(),
)
```

<br/>

## 💖 made with open source love
build with us at https://e280.org/ but only if you're cool

