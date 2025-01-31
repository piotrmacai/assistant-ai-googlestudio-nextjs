import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request) {
  try {
    const { topic, contentType, options } = await request.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      generationConfig: {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      },
      systemInstruction: `Act as an expert technical content strategist specializing in [TECHNOLOGY/FIELD: Artificial Intelligence, LLMs, Generative AI and Web Technology]. Create engaging, educational content that builds authority while maintaining reader engagement across both blog posts and newsletters.`
    });

    const chat = model.startChat({
      history: [],
    });

    let prompt;
    if (contentType === 'blog') {
      const { technicalLevel, includeCode } = options;
      prompt = `Create a ${technicalLevel.toLowerCase()} level technical blog post about ${topic}.${includeCode ? ' Include relevant code examples.' : ''}`;
    } else {
      const { sections } = options;
      prompt = `Create a technical newsletter edition about ${topic} with the following sections: ${sections.join(', ')}.`;
    }

    const result = await chat.sendMessage(prompt);
    return Response.json({ content: result.response.text() });
    
  } catch (error) {
    console.error('Generation error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
