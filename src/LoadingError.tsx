import "./LoadingError.css";

interface LoadingErrorProps {
  message: string;
}

export function LoadingError({ message }: LoadingErrorProps) {
  return <div className="error">{message}</div>;
}
