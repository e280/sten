
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
    .setWriter(Logger.writers.auto())
    .setColors(Logger.colors.auto())
    .addShaper(Logger.shapers.timestamp())
  ```
- log a happy message
  ```ts
  await logger.log("hello world!")
  ```
- log an angry message
  ```ts
  await logger.error("something bad happened")
  ```

### writers
the logger ultimately emits to stdout or stderr via a logger — the available writers are:
- `auto` — *(default)* automatically chooses `deno`, `node`, or `console`
- `console` — outputs to console.log and console.error
- `node` — outputs to process.stdout and process.stderr
- `deno` — outputs to Deno.stdout and Deno.stderr
- `void` — outputs nothing

### colors
determines what happens when colors are used — available colors are:
- `auto` — *(default)* use color if it looks like we're in a color-supporting environment
- `colorful` — full ansi color support
- `colorless` — no color support (all color fns are duds)

### shapers
a shaper is a fn that transforms the content before it is logged — you can attach any number of shapers, they are executed in order — by default, no shapers are used — the available shapers are:
- `timestamp` — attaches a timestamp prefix to every message

<br/>

## 💖 made with open source love
build with us at https://e280.org/ but only if you're cool

