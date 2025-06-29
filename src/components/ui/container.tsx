interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div className={`m-auto max-w-7xl px-4 ${className || ""}`}>{children}</div>
  );
}

export { Container };