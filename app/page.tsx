'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function MyApp() {
  const router = useRouter();

  useEffect(() => {

      router.push('/en'); // Redirect to /en
    
  }, []);

  return (<></>);
}

export default MyApp;