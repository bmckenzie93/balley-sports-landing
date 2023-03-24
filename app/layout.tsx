import './globals.css'

export const metadata = {
  title: 'Balley Sports | TV Screen Saver',
  description: 'Inflatable Bally Sports TV Screen Saver with air from your lungs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
