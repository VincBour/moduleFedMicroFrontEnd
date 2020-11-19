import * as React from "react";

interface Props {
    children: React.ReactNode;
  }
  
  interface State {
    error: Error;
    errorInfo: React.ErrorInfo;
    hasError: boolean;
  }

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            error: {} as Error,
            errorInfo: {} as React.ErrorInfo,
            hasError: false
        }
    }
    // public state: State = { hasError: false }
    // public static getDerivedStateFromError() {
    //     return {
    //         hasError: true
    //     };
    // }
    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({
            error,
            errorInfo,
            hasError: true
        })
      }
    public render(){
        if(this.state.hasError) {
            return <h3 >Sorry... there was an error</h3>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;