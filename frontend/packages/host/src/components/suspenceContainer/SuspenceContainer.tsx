import React from "react"
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary"

export const SuspenceContainer = ({children, fallback}) => {
    return (
        <ErrorBoundary>
            <React.Suspense fallback={fallback}>
                {children}
            </React.Suspense>
        </ErrorBoundary>
    )
}

export default SuspenceContainer;