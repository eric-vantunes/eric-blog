import './globals.css'
import NavBar from './components/NavBar'
import MyProfilePicture from './components/MyProfilePicture'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: "Eric's Blog",
  description: 'Created by Eric Antunes',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
      <html lang="en">
        <body className="dark:bg-[#171717]">
          <NavBar />
          <MyProfilePicture />
          {children}
        </body>
      </html>
  );
}
