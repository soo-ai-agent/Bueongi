import { ArrowLeft, Phone, Plus, X, UserCircle2, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Button } from '../components/ui/Button';

export function EmergencyContact() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([
    { id: 1, name: '아빠', phone: '010-1234-5678' }
  ]);

  const removeContact = (id: number) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  return (
    <div className="flex flex-col h-full bg-slate-800">
      <header className="px-4 py-4 pt-6 flex items-center justify-between border-b border-slate-700 bg-slate-800">
        <button onClick={() => navigate(-1)} className="p-2 text-slate-300 hover:text-slate-50 rounded-full hover:bg-slate-700">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold text-slate-50">긴급 연락처 관리</h1>
        <div className="w-10" />
      </header>

      <div className="flex-1 overflow-y-auto px-6 py-8 pb-24 space-y-6">
        <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-[20px] flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <p className="text-slate-300 text-sm leading-relaxed">
            위급 상황 발생 시 '긴급 도움' 버튼을 누르면 여기에 등록된 연락처로 위치 정보와 함께 긴급 알림이 전송됩니다. (최대 3명)
          </p>
        </div>

        <div className="space-y-4">
          {contacts.map((contact) => (
            <div key={contact.id} className="bg-slate-700 border border-slate-600 rounded-[24px] p-5 flex items-center gap-4 shadow-sm relative group overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-red-400 rounded-l-[24px]"></div>
              <div className="w-12 h-12 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center text-slate-400">
                <UserCircle2 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="text-slate-50 font-bold text-lg">{contact.name}</div>
                <div className="text-slate-400 text-sm mt-0.5 font-medium tracking-wide flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  {contact.phone}
                </div>
              </div>
              <button 
                onClick={() => removeContact(contact.id)}
                className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}

          {contacts.length < 3 && (
            <button className="w-full bg-slate-700/50 border border-slate-600 border-dashed rounded-[24px] p-6 flex flex-col items-center justify-center gap-3 hover:bg-slate-700 transition-colors group">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Plus className="w-6 h-6" />
              </div>
              <span className="text-slate-300 font-bold">새 연락처 추가</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
