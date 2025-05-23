import { ThemeProvider } from '@/components/ThemeProvider';
import Layout from '@/components/Layout';
import { useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Jaimin Kaneriya | MERN Stack Developer';
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <Layout />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;