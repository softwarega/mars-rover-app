import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from "react-query"
import { ErrorBoundary } from "react-error-boundary"

import "./index.css"
import "react-toastify/dist/ReactToastify.css"

import { App } from "./App"
import reportWebVitals from "./reportWebVitals"

import { Loading } from "common"
import { ErrorContainer } from "errors"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              FallbackComponent={ErrorContainer}
              onReset={reset}
              onError={(error) => {
                console.log(error)
              }}
            >
              <Suspense fallback={<Loading />}>
                <App />
              </Suspense>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
