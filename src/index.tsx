import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

import App from "./App";

Sentry.init({
  dsn: "https://cc2156e3b7a74546896c916e3144eca5@o1096446.ingest.sentry.io/6117061",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1,
});

ReactDOM.render(<App />, document.getElementById("root"));
