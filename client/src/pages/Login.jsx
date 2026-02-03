import React from 'react';
import { assets } from '../assets/assets';
import { Star } from 'lucide-react';
import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div className='min-h-[100dvh] w-full flex flex-col lg:flex-row bg-[#F8FAFC] text-slate-900 relative overflow-x-hidden'>
      
      <div className='absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-100/50 rounded-full blur-[80px] md:blur-[120px] pointer-events-none'></div>
      <div className='absolute bottom-[-5%] right-[-5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-cyan-50/60 rounded-full blur-[60px] md:blur-[100px] pointer-events-none'></div>

      <div className='relative z-20 flex-1 flex flex-col justify-between p-6 sm:p-12 lg:p-20 xl:p-24 lg:max-w-[55%]'>
        
        <div className='flex items-center group cursor-pointer lg:overflow-visible'>
          <img 
            src={assets.logo} 
            alt="Logo" 
            className="
              w-full 
              max-w-[180px] 
              sm:max-w-[220px] 
              md:max-w-[255px] 
              h-auto 
              object-contain 
              transition-transform 
              duration-300 
              group-hover:scale-[1.02] 
              /* Apply negative margin only from lg (1024px) screens up */
              lg:ml-[-25px]
            "
            style={{ aspectRatio: '255 / 60' }}
          />
        </div>

        <div className='mt-12 lg:mt-0'>
          <div className='inline-flex items-center gap-3 bg-white border border-slate-200/60 px-4 py-2 rounded-2xl mb-6 md:mb-10 shadow-sm'>
            <img src={assets.group_users} alt="Users" className='h-6 md:h-7 w-auto'/>
            <div className='flex flex-col'>
              <div className='flex gap-0.5'>
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className='size-3 fill-amber-400 text-amber-400'/>
                ))}
              </div>
              <p className='text-[10px] uppercase tracking-widest font-bold text-slate-400'>Elite Network</p>
            </div>
          </div>

          <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-8xl font-[900] leading-[0.85] tracking-tighter mb-6 md:mb-8 text-slate-900'>
            PURE <br/>
            <span className='bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-transparent bg-clip-text'>
              CONNECTION.
            </span>
          </h1>
          
          <p className='text-base md:text-xl text-slate-500 leading-relaxed max-w-md font-medium'>
            Join the world's most refined social ecosystem for modern developers.
          </p>
        </div>

        <div className='hidden lg:flex items-center gap-6 text-[11px] font-bold tracking-widest text-slate-300 uppercase'>
          <span className='hover:text-purple-500 cursor-pointer transition-colors'>Systems</span>
          <span>•</span>
          <span className='hover:text-purple-500 cursor-pointer transition-colors'>Legal</span>
          <span>•</span>
          <span>© 2026</span>
        </div>
      </div>

      <div className='relative z-20 flex-1 flex items-center justify-center p-4 sm:p-8 lg:p-12 bg-white/40 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-0'>
        <div className='w-full max-w-[440px]'>
          <div className='relative p-0.5 sm:p-1 bg-gradient-to-tr from-slate-200 to-white rounded-[32px] shadow-2xl shadow-slate-300/40'>
            <SignIn appearance={{
              elements: {
                rootBox: "w-full",
                card: "bg-white border-0 shadow-none rounded-[30px] py-6 sm:py-10 px-4 sm:px-8",
                headerTitle: "text-slate-800 text-xl sm:text-2xl font-extrabold tracking-tight",
                headerSubtitle: "text-slate-500 font-medium mb-4",
                socialButtonsBlockButton: "bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 transition-all rounded-2xl h-12 shadow-sm",
                formButtonPrimary: "bg-slate-900 hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 h-12 text-sm font-bold tracking-wide rounded-2xl mt-4",
                footerActionLink: "text-indigo-600 hover:text-indigo-500 font-bold",
                formFieldLabel: "text-slate-600 font-bold text-xs uppercase tracking-wide",
                formFieldInput: "bg-slate-50 border border-slate-200 text-slate-900 rounded-xl h-12 focus:border-indigo-500 transition-all"
              }
            }} />
          </div>
          
          <div className='mt-8 lg:hidden text-center text-[10px] font-bold tracking-widest text-slate-400 uppercase'>
             © 2026 • Systems • Legal
          </div>
        </div>
      </div>

      <div className='absolute inset-0 z-0 opacity-[0.03] pointer-events-none' 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
}

export default Login;