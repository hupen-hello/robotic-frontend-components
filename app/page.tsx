import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 font-sans gap-6 p-6">
      
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Development Home Page</h1>
        <p className="text-gray-500">Click below to check your created pages.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* About Business पेज पर जाने का लिंक */}
        <Link 
          href="/AboutBusiness" 
          className="px-8 py-4 bg-white border-2 border-red-100 text-red-600 rounded-xl font-bold hover:border-red-600 hover:bg-red-50 transition-all shadow-sm text-center"
        >
          Step 2: About Business
        </Link>

        {/* Website Type पेज पर जाने का लिंक */}
        <Link 
          href="/WebsiteType" 
          className="px-8 py-4 bg-white border-2 border-red-100 text-red-600 rounded-xl font-bold hover:border-red-600 hover:bg-red-50 transition-all shadow-sm text-center"
        >
          Step 3: Website Type
        </Link>
      </div>

    </main>
  );
}