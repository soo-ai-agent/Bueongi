import { Outlet } from 'react-router';
import { Toaster } from 'sonner';

export function Layout() {
  return (
    <div className="flex min-h-screen w-full bg-slate-900 justify-center items-center">
      {/* Mobile container constraint for web view */}
      <div className="relative w-full h-[100dvh] max-w-[480px] bg-slate-800 text-slate-200 overflow-hidden shadow-2xl sm:rounded-[40px] sm:h-[850px] sm:border-[8px] sm:border-slate-700 flex flex-col">
        <Outlet />
        <Toaster 
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#334155', // slate-700
              color: '#f8fafc', // slate-50
              border: '1px solid #475569', // slate-600
              borderRadius: '16px',
            },
            className: 'mb-8'
          }}
        />
      </div>
    </div>
  );
}
