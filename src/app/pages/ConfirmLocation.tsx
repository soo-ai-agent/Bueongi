import { ArrowLeft, MapPin, Crosshair, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { MapMock } from '../components/map/MapMock';
import { Button } from '../components/ui/Button';
import { toast } from 'sonner';

export function ConfirmLocation() {
  const navigate = useNavigate();

  const handleRegister = () => {
    toast('장소 등록이 완료되었습니다.', {
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
      duration: 3000,
    });
    navigate('/home');
  };

  return (
    <div className="flex flex-col h-full bg-slate-800 relative">
      <header className="absolute top-0 inset-x-0 z-30 px-4 pt-8 mt-4 flex items-center">
        <button onClick={() => navigate(-1)} className="p-3 text-slate-200 bg-slate-700/90 backdrop-blur-md rounded-full shadow-lg border border-slate-600 active:scale-95 transition-transform">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="ml-3 px-4 py-2.5 bg-slate-700/90 backdrop-blur-md rounded-full text-slate-50 font-bold border border-slate-600 shadow-lg text-sm">
          위치 등록 확인
        </div>
      </header>

      <div className="flex-1 w-full h-full relative">
        {/* Map with start point */}
        <MapMock pois={[{ type: 'start', x: 50, y: 50 }]} zoom={1.5} />
        
        {/* Center Target overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Crosshair className="w-8 h-8 text-blue-400 mb-12 opacity-50" />
        </div>
      </div>

      {/* Bottom Sheet style overlay */}
      <div className="absolute bottom-0 inset-x-0 bg-slate-800 rounded-t-[32px] p-6 pb-8 shadow-[0_-8px_30px_rgba(0,0,0,0.3)] border-t border-slate-700 z-20">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-1.5 bg-slate-600 rounded-full" />
        </div>
        
        <h2 className="text-xl font-bold text-slate-50 mb-4">선택하신 위치가 맞나요?</h2>
        <div className="flex items-center gap-4 bg-slate-700 p-4 rounded-[24px] border border-slate-600 mb-8 shadow-sm">
          <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-blue-400 border border-slate-600">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <div className="text-slate-100 font-bold text-lg">강남대로 396</div>
            <div className="text-slate-400 text-sm mt-0.5">서울 강남구 역삼동 825-8</div>
          </div>
        </div>

        <Button size="lg" fullWidth className="h-16 text-lg rounded-[24px]" onClick={handleRegister}>
          이 위치로 등록하기
        </Button>
      </div>
    </div>
  );
}
