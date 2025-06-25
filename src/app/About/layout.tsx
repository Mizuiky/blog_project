export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="bg-amber-400">Aqui vem o layout da about</h1>
      {children}
    </>
  );
}
