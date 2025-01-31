export default function GeneratedContent({ content }) {
    if (!content) return null;
  
    return (
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Generated Content:</h2>
        <div className="prose max-w-none">
          <div className="whitespace-pre-wrap bg-gray-50 p-6 rounded-lg">
            {content}
          </div>
        </div>
        <button
          onClick={() => {
            const blob = new Blob([content], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'generated-content.md';
            a.click();
            URL.revokeObjectURL(url);
          }}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Download Content
        </button>
      </div>
    );
  }