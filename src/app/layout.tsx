import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {/* border-t -> border-width-top: 1px */}
          <div className="border-t">
            <div className="bg-background">
              {/* flex-row -> to position flex items (Sidebar & Header) horizontally in the same direction as text */}
              <div className="flex flex-row">
                {/* hidden -> hide Sidebar item (display: none) for sm and md breakpoint, lg:block -> show Sidebar item (display: block) for lg and over breakpoint, w-[18%] -> width: 18% */}
                <div className="hidden lg:block w-[18%]">Sidebar</div>
                {/* col-span-3 -> grid-column: span 3 for sm breakpoint, overflow-auto -> to add scrollbars to an element in the event that its content overflows, lg:col-span-5 -> grid-column: span 5 for lg breakpoint, lg:border-l -> border-left-width: 1px for lg breakpoint, w-[82%] -> width: 82% */}
                <div className="col-span-3 overflow-auto lg:col-span-5 lg:border-l w-[82%]">
                  {/* px-6 py-6 -> padding top-bottom and left-right: 1.5rem for sm breakpoint, lg:px-8 -> padding left-right: 2rem for lg breakpoint */}
                  <div className="px-6 py-6 lg:px-8">
                    <div>Header</div>
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
