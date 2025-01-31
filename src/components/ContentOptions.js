export default function ContentOptions({ contentType, options, setOptions }) {
    if (contentType === 'blog') {
      return (
        <div className="space-y-4">
          <select
            value={options.blog.technicalLevel}
            onChange={(e) =>
              setOptions({
                ...options,
                blog: { ...options.blog, technicalLevel: e.target.value },
              })
            }
            className="w-full p-2 border rounded"
          >
            {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
  
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={options.blog.includeCode}
              onChange={(e) =>
                setOptions({
                  ...options,
                  blog: { ...options.blog, includeCode: e.target.checked },
                })
              }
            />
            Include Code Examples
          </label>
        </div>
      );
    }
  
    return (
      <div className="space-y-2">
        <p className="font-medium">Newsletter Sections:</p>
        {[
          'Featured Technical Content',
          'Industry Insights',
          'Quick Tips',
          'Resource Roundup',
        ].map((section) => (
          <label key={section} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={options.newsletter.sections.includes(section)}
              onChange={(e) => {
                const sections = e.target.checked
                  ? [...options.newsletter.sections, section]
                  : options.newsletter.sections.filter((s) => s !== section);
                setOptions({
                  ...options,
                  newsletter: { ...options.newsletter, sections },
                });
              }}
            />
            {section}
          </label>
        ))}
      </div>
    );
  }