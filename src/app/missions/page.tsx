import Link from 'next/link';

export default function Missions() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <Link href="/" className="text-xl font-bold text-gray-800">Survival Lingua</Link>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Missions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/missions/airport-signs" className="block bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition-colors">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Airport Signs</h2>
            <p className="text-gray-600">Navigate the airport by reading the signs.</p>
          </Link>
          <Link href="/missions/road-signs" className="block bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition-colors">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Road Signs</h2>
            <p className="text-gray-600">Understand the road signs to get around the city.</p>
          </Link>
          <Link href="/missions/restaurant-menu" className="block bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition-colors">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Restaurant Menu</h2>
            <p className="text-gray-600">Order food by reading the menu.</p>
          </Link>
          <Link href="/missions/hotel-conversation" className="block bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition-colors">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Hotel Conversation</h2>
            <p className="text-gray-600">Practice basic conversations for checking into a hotel.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}