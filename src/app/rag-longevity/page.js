'use client';

import { useState } from 'react';

export default function RAGLongevityChat() {
  const [query, setQuery] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState({
    age: '',
    goals: [],
    conditions: [],
    supplements: []
  });

  const handleQuery = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    
    try {
      const response = await fetch('/api/rag/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: query,
          userProfile: userProfile
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setConversation(prev => [
          ...prev,
          {
            type: 'user',
            text: query,
            timestamp: new Date()
          },
          {
            type: 'ai',
            text: data.response,
            citations: data.citations,
            sources: data.sources,
            confidence: data.confidence,
            timestamp: new Date()
          }
        ]);
        setQuery('');
      }
    } catch (error) {
      console.error('Query failed:', error);
      alert('Failed to get response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleProfileUpdate = async (field, value) => {
    const updatedProfile = { ...userProfile, [field]: value };
    setUserProfile(updatedProfile);
    
    try {
      await fetch('/api/rag/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'demo-user',
          profile: updatedProfile
        })
      });
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  const formatCitations = (citations) => {
    return citations.map(citation => 
      `<span class="text-blue-600 font-medium">${citation.text}</span>`
    ).join(' ');
  };

  const renderSourceCard = (source, index) => (
    <div key={index} className="bg-gray-50 p-3 rounded-lg mb-2">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-900">{source.metadata.title}</h4>
        <span className="text-sm text-gray-500 bg-blue-100 px-2 py-1 rounded">
          Relevance: {(source.relevance * 100).toFixed(1)}%
        </span>
      </div>
      <div className="text-sm text-gray-600 space-y-1">
        <p><strong>Type:</strong> {source.metadata.type.replace('_', ' ')}</p>
        {source.metadata.journal && <p><strong>Journal:</strong> {source.metadata.journal}</p>}
        {source.metadata.year && <p><strong>Year:</strong> {source.metadata.year}</p>}
        {source.metadata.sample_size && <p><strong>Sample:</strong> {source.metadata.sample_size}</p>}
        {source.metadata.clinical_relevance && (
          <p><strong>Clinical Relevance:</strong> {(source.metadata.clinical_relevance * 100).toFixed(0)}%</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* User Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Your Health Profile</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    value={userProfile.age}
                    onChange={(e) => handleProfileUpdate('age', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter your age"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Health Goals
                  </label>
                  <select
                    multiple
                    value={userProfile.goals}
                    onChange={(e) => handleProfileUpdate('goals', Array.from(e.target.selectedOptions, option => option.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="longevity">Longevity</option>
                    <option value="vitality">Vitality & Energy</option>
                    <option value="weight-management">Weight Management</option>
                    <option value="metabolic-health">Metabolic Health</option>
                    <option value="muscle-preservation">Muscle Preservation</option>
                    <option value="cognitive-function">Cognitive Function</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Health Conditions
                  </label>
                  <select
                    multiple
                    value={userProfile.conditions}
                    onChange={(e) => handleProfileUpdate('conditions', Array.from(e.target.selectedOptions, option => option.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="pre-diabetes">Pre-diabetes</option>
                    <option value="hypertension">Hypertension</option>
                    <option value="high-cholesterol">High Cholesterol</option>
                    <option value="insulin-resistance">Insulin Resistance</option>
                    <option value="none">None</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Supplements
                  </label>
                  <textarea
                    value={userProfile.supplements.join(', ')}
                    onChange={(e) => handleProfileUpdate('supplements', e.target.value.split(',').map(s => s.trim()))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows="3"
                    placeholder="List current supplements..."
                  />
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Profile Benefits</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Personalized recommendations</li>
                  <li>• Safety considerations for your conditions</li>
                  <li>• Relevant clinical studies prioritized</li>
                  <li>• Professor Oh's expertise applied to your profile</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
              <div className="flex-1 p-6 overflow-y-auto">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  🧠 Longevity Intelligence with RAG
                </h1>
                <p className="text-gray-600 mb-6">
                  Get personalized, evidence-based answers from Professor Oh's expertise and cutting-edge research.
                </p>

                {/* Conversation History */}
                <div className="space-y-4 mb-6">
                  {conversation.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-lg px-4 py-2 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-blue-600 text-white ml-auto'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <div className="font-medium mb-2">
                          {message.type === 'user' ? '👤 You:' : '🧑‍⚕️ Professor Oh:'}
                        </div>
                        <div>{message.text}</div>
                        
                        {message.citations && message.citations.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-300">
                            <div className="text-sm font-medium text-gray-700 mb-1">Sources:</div>
                            <div className="text-xs text-gray-600">
                              {formatCitations(message.citations)}
                            </div>
                          </div>
                        )}

                        {message.confidence && (
                          <div className="mt-2 flex items-center text-xs">
                            <span className="font-medium">Confidence:</span>
                            <span className={`ml-2 px-2 py-1 rounded ${
                              message.confidence.level === 'High' ? 'bg-green-100 text-green-800' :
                              message.confidence.level === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {message.confidence.level} ({(message.confidence.score * 100).toFixed(1)}%)
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Query Input */}
              <div className="border-t border-gray-200 p-4">
                <form onSubmit={handleQuery} className="flex space-x-2">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask about longevity, NAD+, senolytics, metabolic health..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !query.trim()}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? '🤖 Thinking...' : 'Ask Professor Oh'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Sources Panel */}
        {conversation.length > 0 && conversation[conversation.length - 1].sources && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">📚 Knowledge Sources Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {conversation[conversation.length - 1].sources.slice(0, 6).map((source, index) => 
                renderSourceCard(source, index)
              )}
            </div>
          </div>
        )}

        {/* Example Queries */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">💡 Example Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-sm text-gray-700 space-y-2">
              <p>• What are the latest findings on NAD+ supplementation?</p>
              <p>• How do GLP-1 agonists affect metabolic set points?</p>
              <p>• What is the optimal senolytics protocol for adults over 50?</p>
            </div>
            <div className="text-sm text-gray-700 space-y-2">
              <p>• Compare different NAD+ precursors for effectiveness</p>
              <p>• How can I improve mitochondrial function naturally?</p>
              <p>• What supplements work best for metabolic plasticity?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}