import { ArrowLeft, MapPin, Clock } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export function PlaceSearch() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [isSearched, setIsSearched] = useState(false);

  const mockResults = [
    { name: '강남역 2번 출구', address: '서울 강남구 강남대로 396' },
    { name: '강남대학교', address: '경기 용인시 기흥구 강남로 40' },
    { name: '강남경찰서', address: '서울 강남구 테헤란로 114길 11' },
  ];

  const recentSearches = [
    { name: '스타벅스 신사점', address: '서울 강남구 도산대로' },
    { name: '역삼역 3번 출구', address: '서울 강남구 테헤란로' },
  ];

  const handleSelect = () => {
    // 장소 선택 시 바로 경로 화면으로 가지 않고, '현재 위치(출발지) 확인' 화면으로 이동
    navigate('/confirm-location');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim().length > 0) {
      setIsSearched(true);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-800">
      <header className="px-4 py-3 pt-6 flex items-center gap-3 bg-slate-800 z-20 shadow-sm border-b border-slate-700">
        <button onClick={() => navigate(-1)} className="p-2 text-slate-300 hover:text-slate-50 rounded-full hover:bg-slate-700 transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <form 
          onSubmit={handleSearch}
          className="flex-1 flex items-center gap-2 bg-slate-700 px-4 py-2.5 rounded-[20px] border border-slate-600 focus-within:border-blue-400 transition-colors"
        >
          <input
            autoFocus
            type="text"
            placeholder="장소, 버스, 지하철역 검색"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              setIsSearched(false);
            }}
            className="flex-1 bg-transparent text-slate-50 text-base font-medium placeholder:text-slate-400 outline-none h-6"
          />
          {keyword.length > 0 && (
            <button 
              type="submit" 
              className="text-blue-400 font-bold text-sm whitespace-nowrap px-2 hover:text-blue-300 transition-colors"
            >
              검색
            </button>
          )}
        </form>
      </header>

      <div className="flex-1 overflow-y-auto">
        {isSearched ? (
          <div className="flex flex-col divide-y divide-slate-700/50">
            {mockResults.map((place, i) => (
              <button 
                key={i} 
                onClick={handleSelect}
                className="flex items-center gap-4 p-5 hover:bg-slate-700 transition-colors text-left group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 transition-colors border border-slate-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-slate-100 font-bold text-base">{place.name}</div>
                  <div className="text-slate-400 text-sm mt-1">{place.address}</div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="p-6">
            <h3 className="text-slate-300 text-sm font-bold mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              최근 검색
            </h3>
            <div className="flex flex-col gap-2">
              {recentSearches.map((place, i) => (
                <button 
                  key={i} 
                  onClick={handleSelect}
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-700 transition-colors text-left group border border-transparent hover:border-slate-600"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-slate-200 font-medium">{place.name}</div>
                    <div className="text-slate-400 text-sm mt-0.5">{place.address}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
