interface ContentWrapperProps {
  children: React.ReactNode;
}

export function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <div>
      <h1>Gentlemen, behold:</h1>
      <h2>Corn!</h2>
      {children}
    </div>
  );
}
