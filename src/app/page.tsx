import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Survival Lingua</h1>
        <p className="text-xl text-gray-600 mb-8">Your adventure in learning Bahasa Melayu starts here!</p>
        <div className="space-x-4">
          <Link href="/training-camp" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Training Camp
          </Link>
          <Link href="/missions" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Missions
          </Link>
        </div>
      </div>
    </main>
  );
}
