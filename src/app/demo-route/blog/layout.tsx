export default function BlogRoute({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>
        Welcome to blog layout
        {children}
      </h1>
    </>
  );
}
