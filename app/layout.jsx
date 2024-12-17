import Navbar from "../components/navbar";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>SAM</title>
          <link rel="stylesheet" href="output.css" />
        </head>
        <body className="bg-neutral-300 w-full">
          
          <header className="flex-full">
              
              <Navbar />

          </header>

          <main className="m-auto p-2 md:p-4 w-full flex justify-center items-center max-w-5xl">
            {children}
          </main>
          
          </body>
      </html>
    )
  }