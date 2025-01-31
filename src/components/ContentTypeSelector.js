export default function ContentTypeSelector({ contentType, setContentType }) {
    return (
      <div className="flex gap-4 justify-center mb-6">
        {['blog', 'newsletter'].map((type) => (
          <button
            key={type}
            onClick={() => setContentType(type)}
            className={`px-4 py-2 rounded capitalize ${
              contentType === type
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    );
  }