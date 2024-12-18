import Navbar from "../components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>SAM</title>
        <link rel="stylesheet" href="output.css" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="custom.css" />
      </head>
      <body className="bg-neutral-100 w-full h-screen">

        <header className="flex-full">

          <Navbar />

        </header>

        <main className="m-auto pt-24 w-full h-full flex flex-wrap justify-center content-start items-center">
          {children}
        </main>

      </body>
    </html>
  )
}