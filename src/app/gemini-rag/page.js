'use client';

import { useState } from 'react';

export default function GeminiRAGChat() {
  const [query, setQuery] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('auto');
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
      const response = await fetch('/api/gemini/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: query,
          userProfile: userProfile,
          language: selectedLanguage
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setConversation(prev => [
          ...prev,
          {
            type: 'user',
            text: query,
            language: selectedLanguage,
            timestamp: new Date()
          },
          {
            type: 'ai',
            text: data.response,
            citations: data.citations,
            sources: data.sources,
            confidence: data.confidence,
            language: data.language,
            timestamp: new Date()
          }
        ]);
        setQuery('');
      }
    } catch (error) {
      console.error('Query failed:', error);
      alert('질문 처리에 실패했습니다. 다시 시도해 주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleProfileUpdate = async (field, value) => {
    const updatedProfile = { ...userProfile, [field]: value };
    setUserProfile(updatedProfile);
    
    try {
      await fetch('/api/gemini/profile', {
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

  const formatCitations = (citations, language) => {
    return citations.map(citation => 
      `<span class="text-blue-600 font-medium">${citation.text}</span>`
    ).join(' ');
  };

  const renderSourceCard = (source, index) => (
    <div key={index} className="bg-gray-50 p-3 rounded-lg mb-2">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-900">
          {source.metadata.language === 'korean' ? source.metadata.title : source.metadata.title}
        </h4>
        <span className="text-sm text-gray-500 bg-green-100 px-2 py-1 rounded">
          관련성: {(source.relevance * 100).toFixed(1)}%
        </span>
      </div>
      <div className="text-sm text-gray-600 space-y-1">
        <p><strong>언어:</strong> {source.metadata.language === 'korean' ? '한국어' : '영어'}</p>
        <p><strong>타입:</strong> {
          source.metadata.type?.replace(/_/g, ' ') || 
          (source.metadata.type === 'professor_expertise' ? '교수 전문성' :
           source.metadata.type === 'korean_research' ? '한국 연구' :
           source.metadata.type === 'korean_clinical_trial' ? '한국 임상시험' : 
           source.metadata.type)
        }</p>
        {source.metadata.journal && <p><strong>학술지:</strong> {source.metadata.journal}</p>}
        {source.metadata.year && <p><strong>연도:</strong> {source.metadata.year}</p>}
        {source.metadata.sample_size && <p><strong>표본 수:</strong> {source.metadata.sample_size}</p>}
        {source.metadata.clinical_relevance && (
          <p><strong>임상적 관련성:</strong> {(source.metadata.clinical_relevance * 100).toFixed(0)}%</p>
        )}
      </div>
    </div>
  );

  const getLanguageLabel = (lang) => {
    const labels = {
      'auto': '자동',
      'korean': '한국어',
      'english': 'English'
    };
    return labels[lang] || lang;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* User Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">건강 프로필</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    나이
                  </label>
                  <input
                    type="number"
                    value={userProfile.age}
                    onChange={(e) => handleProfileUpdate('age', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="나이를 입력하세요"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    언어 선택
                  </label>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="auto">자동 감지</option>
                    <option value="korean">한국어</option>
                    <option value="english">English</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    건강 목표
                  </label>
                  <select
                    multiple
                    value={userProfile.goals}
                    onChange={(e) => handleProfileUpdate('goals', Array.from(e.target.selectedOptions, option => option.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="longevity">장수</option>
                    <option value="vitality">활력</option>
                    <option value="weight-management">체중 관리</option>
                    <option value="metabolic-health">대사 건강</option>
                    <option value="muscle-preservation">근육 유지</option>
                    <option value="cognitive-function">인지 기능</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    건강 상태
                  </label>
                  <select
                    multiple
                    value={userProfile.conditions}
                    onChange={(e) => handleProfileUpdate('conditions', Array.from(e.target.selectedOptions, option => option.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="pre-diabetes">당뇨병</option>
                    <option value="hypertension">고혈압</option>
                    <option value="high-cholesterol">고콜레스테롤</option>
                    <option value="insulin-resistance">인슐린 저항성</option>
                    <option value="none">없음</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    현재 보충제
                  </label>
                  <textarea
                    value={userProfile.supplements.join(', ')}
                    onChange={(e) => handleProfileUpdate('supplements', e.target.value.split(',').map(s => s.trim()))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows="3"
                    placeholder="현재 복용 중인 보충제를 나열하세요..."
                  />
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Gemini RAG 혜택</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• 개인화된 건강 추천</li>
                  <li>• 한국 의학 연구 우선</li>
                  <li>• 다국어 지원 (한/영)</li>
                  <li>• 실시간 최신 연구 통합</li>
                  <li>• 장수영 오 교수 전문성</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
              <div className="flex-1 p-6 overflow-y-auto">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  🌟 Gemini RAG 장수 인텔리전스
                </h1>
                <p className="text-gray-600 mb-6">
                  장수영 오 교수의 전문성과 Gemini AI로 한국 의학 연구에 기반한 개인화된 건강 답변을 받으세요.
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
                            ? 'bg-green-600 text-white ml-auto'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <div className="font-medium mb-2">
                          {message.type === 'user' ? '👤 당신:' : '🧑‍⚕️ 교수님:'}
                        </div>
                        <div>{message.text}</div>
                        
                        {message.citations && message.citations.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-300">
                            <div className="text-sm font-medium text-gray-700 mb-1">인용 자료:</div>
                            <div className="text-xs text-gray-600">
                              {formatCitations(message.citations, message.language)}
                            </div>
                          </div>
                        )}

                        {message.confidence && (
                          <div className="mt-2 flex items-center text-xs">
                            <span className="font-medium">신뢰도:</span>
                            <span className={`ml-2 px-2 py-1 rounded ${
                              message.confidence.level === '높음' ? 'bg-green-100 text-green-800' :
                              message.confidence.level === '중간' ? 'bg-yellow-100 text-yellow-800' :
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
                    placeholder="장수, NAD+, 대사 건강, 노화에 대해 질문하세요..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !query.trim()}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? '🤖 답변 생성 중...' : '🧑‍⚕️ 교수님께 질문'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Sources Panel */}
        {conversation.length > 0 && conversation[conversation.length - 1].sources && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">📚 참조된 지식 원천</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {conversation[conversation.length - 1].sources.slice(0, 6).map((source, index) => 
                renderSourceCard(source, index)
              )}
            </div>
          </div>
        )}

        {/* Example Questions */}
        <div className="mt-8 bg-green-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">💡 예시 질문들</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-sm text-gray-700 space-y-2">
              <p>• NAD+ 보충의 최신 연구 결과는 무엇인가요?</p>
              <p>• 한국인의 대사 건강 현황은 어떻습니까?</p>
              <p>• 노화 방지를 위한 최적의 생활 습관은?</p>
              <p>• 세포 노화를 역전시킬 수 있을까요?</p>
            </div>
            <div className="text-sm text-gray-700 space-y-2">
              <p>• How to optimize mitochondrial function?</p>
              <p>• What are the latest longevity biomarkers?</p>
              <p>• Compare different NAD+ precursors for effectiveness</p>
              <p>• What supplements work best for metabolic health?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}