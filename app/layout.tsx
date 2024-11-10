import './globals.css'; 
import { ReactNode } from 'react';


export const metadata = {
  title: 'My Next App',
  description: 'My Next.js App with FontAwesome',
};


interface RootLayoutProps {
  children: ReactNode; 
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Shoby Fast Food</title>
       
        <script src="https://kit.fontawesome.com/145d2a49f0.js" crossOrigin="anonymous"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
