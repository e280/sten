
# 🧪 @e280/sten
- logging utilities
- zero dependencies
- *an https://e280.org/ project*

<br/>

## quick start
- install sten
  ```sh
  npm install @e280/sten
  ```
- make a logger and do some logging
  ```ts
  import {Logger} from "@e280/sten"

  const logger = new Logger()
    .target(Logger.node)
    .palette(Logger.colorful)
    .transform(Logger.timestamp)
  ```
- log a happy message
  ```ts
  logger.log("hello world!")
  ```
- log an angry message
  ```ts
  logger.error("something bad happened")
  ```

<br/>

## 💖 made with open source love
build with us at https://e280.org/ but only if you're cool

