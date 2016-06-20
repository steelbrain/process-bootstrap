# process-bootstrap

process-bootstrap is a Node.js module that does some basic process setup for you.

### Installation

```
npm install --save process-bootstrap
```

### API

```js
export default function bootstrap(processName: string, defaultDebugKey?: string)
```

### Example Usage
```js
import bootstrap from 'process-bootstrap'

bootstrap('motion', 'MOTION')
// Yep, that's all folks
```

### License

This project is licensed under the terms of MIT License. See the LICENSE file for more info.
