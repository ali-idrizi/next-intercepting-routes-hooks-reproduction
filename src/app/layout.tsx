export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{colorScheme: 'dark'}}>
      <body>{children}{modal}</body>
    </html>
  );
}
