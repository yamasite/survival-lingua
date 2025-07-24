import Link from 'next/link';

export default function TrainingCamp() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <Link href="/" className="text-xl font-bold text-gray-800">Survival Lingua</Link>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Training Camp</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/training-camp/vocabulary" className="bg-white p-6 rounded-lg shadow-md block">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Vocabulary</h2>
            <p className="text-gray-600">Learn new words and phrases.</p>
          </Link>
          <Link href="/training-camp/grammar" className="bg-white p-6 rounded-lg shadow-md block">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Grammar</h2>
            <p className="text-gray-600">Understand the rules of the language.</p>
          </Link>
          <Link href="/training-camp/sentences" className="bg-white p-6 rounded-lg shadow-md block">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Sentences</h2>
            <p className="text-gray-600">Practice forming sentences.</p>
          </Link>
          <Link href="/training-camp/paragraphs" className="bg-white p-6 rounded-lg shadow-md block">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Paragraphs</h2>
            <p className="text-gray-600">Practice reading and writing paragraphs.</p>
          </Link>
        </div>
      </main>
      <footer className="text-center py-4">
        <p><a href="https://beian.miit.gov.cn/" target="_blank"  className="text-gray-500 hover:text-gray-700">沪ICP备2022015296号-1</a></p>
      </footer>
    </div>
  );
}