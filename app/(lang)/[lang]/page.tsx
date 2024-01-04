import Image from 'next/image'
import BookShelf from '@/components/BookShelf';
import Navbar from '@/components/Navbar';


export default function Home() {
  return (
    <div>
      <Navbar />
      <BookShelf />

    </div>

  );
}
