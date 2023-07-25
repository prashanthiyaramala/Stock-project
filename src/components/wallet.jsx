import React from 'react';

const wallet = () => {
  return (
    <div className='mobile-s:w-[330px]'>
    
    
    <div className='laptop-m:flex laptop-m:relative'>

    <div className='mobile-s:flex laptop:w-[1100px] laptop-m:flex-col'>
        {/* sidebar */}
        <button className='bg-[#F8FEDF] laptop-m:w-14 laptop-m:h-18 laptop-m:mt-36 laptop:ml-52 mobile-l:mt-36 mobile-s:mt-20 mobile-s:h-9 mobile-s:w-6 mobile-l:w-20 mobile-l:h-16 mobile-s:ml-0 mobile-m:ml-8 mobile-l:ml-40 flex justify-center items-center rounded-xl laptop-m:ml-10'>
           <div className='pt-1.5'>
            <img className='laptop-m:w-8 laptop-m:h-8 laptop:w-14 laptop:h-14 mobile-s:w-4 mobile-l:w-9 mobile-l:h-9 mobile-s:h-4' src="./assets/profile.png" alt="" />
            <span className='laptop-m:text-xs mobile-s:text-[7px] mobile-l:text-xs font-bold laptop:text-xl'>Profile</span>
            </div>
        </button>

        <button className='bg-[#F8FEDF] laptop-m:w-14 mobile-l:mt-36 h-18 mobile-s:mt-20 mobile-s:h-9 mobile-s:w-6 mobile-l:w-20 mobile-l:h-16 mobile-s:ml-1 mobile-m:ml-4 mobile-l:ml-9 laptop-m:mt-6 flex justify-center items-center rounded-xl laptop-m:ml-10'>
           <div className='pt-1.5'>
            <img className='laptop-m:w-8 laptop-m:h-8 laptop:w-14 laptop:h-14 mobile-s:w-4 mobile-l:w-9 mobile-l:h-9 mobile-s:h-4' src="./assets/home.png" alt="" />
            <span className='laptop-m:text-xs mobile-s:text-[7px] mobile-l:text-xs font-bold laptop:text-xl'>Home</span>
            </div>
        </button>

        <button className='bg-[#F8FEDF] laptop-m:w-14 mobile-l:mt-36 laptop-m:h-18 laptop:w-20 mobile-s:w-6 mobile-s:h-9 mobile-s:mt-20 mobile-l:h-16 mobile-s:ml-1 mobile-m:ml-4 mobile-l:ml-9 laptop-m:mt-6 flex justify-center items-center rounded-xl laptop-m:ml-10'>
           <div className='pt-1.5'>
            <img className='laptop-m:w-8 laptop-m:h-8 mobile-s:w-4 laptop:w-14 laptop:h-14 mobile-l:w-9 mobile-l:h-9 mobile-s:h-4' src="./assets/double arrow.png" alt="" />
            <span className='laptop-m:text-xs mobile-s:text-[7px] mobile-l:text-xs font-bold laptop:text-xl'>B/L</span>
            </div>
        </button>

        <button className='bg-[#F8FEDF] laptop-m:w-14 mobile-l:mt-36 laptop-m:h-18 mobile-s:w-6 laptop-m:mt-6 mobile-l:w-20 mobile-l:h-16 mobile-s:h-9 mobile-s:mt-20 mobile-s:ml-1 mobile-m:ml-4 mobile-l:ml-9 flex justify-center items-center rounded-xl laptop-m:ml-10'>
           <div className='pt-1.5'>
            <img className='laptop-m:w-8 laptop-m:h-8 mobile-s:w-4 mobile-l:w-9 laptop:w-14 laptop:h-14 mobile-l:h-9 mobile-s:h-4' src="./assets/dollar arrow.png" alt="" />
            <span className='laptop-m:text-xs mobile-s:text-[7px] mobile-l:text-xs font-bold laptop:text-xl'>P&L</span>
            </div>
        </button>

        <button className='bg-[#F8FEDF] laptop-m:w-14 mobile-l:mt-36 laptop-m:h-18 mobile-s:w-6 mobile-s:h-9 mobile-l:w-20 mobile-l:h-16 mobile-s:mt-20 mobile-s:ml-1 mobile-m:ml-4 mobile-l:ml-9 laptop-m:mt-6 flex justify-center items-center rounded-xl laptop-m:ml-10'>
           <div className='pt-1.5'>
            <img className='laptop-m:w-8 laptop-m:h-8 mobile-s:w-4 mobile-l:w-9 mobile-l:h-9 laptop:w-14 laptop:h-14 mobile-s:h-4' src="./assets/stocks.png" alt="" />
            <span className='laptop-m:text-xs mobile-s:text-[7px] mobile-l:text-xs font-bold laptop:text-xl'>Trade</span>
            </div>
        </button>

        <button className='bg-[#C7F609] laptop-m:w-14 mobile-l:mt-36 h-18 mobile-s:w-6 mobile-s:mt-20 mobile-s:h-9 mobile-l:w-20 mobile-l:h-16 mobile-s:ml-1 mobile-m:ml-4 mobile-l:ml-9 laptop-m:mt-6 flex justify-center items-center rounded-xl laptop-m:ml-10'>
           <div className='pt-1.5'>
            <img className='laptop-m:w-8 laptop-m:h-8 mobile-s:w-4 mobile-l:w-9 mobile-l:h-9 laptop:w-14 laptop:h-14 mobile-s:h-4' src="./assets/wallet.png" alt="" />
            <span className='laptop-m:text-xs mobile-s:text-[7px] mobile-l:text-xs font-bold laptop:text-xl'>Wallet</span>
            </div>
        </button>

        <button className='bg-[#F8FEDF] laptop-m:w-14 mobile-l:mt-36 laptop-m:h-18 mobile-s:w-6 mobile-s:mt-20 mobile-s:h-9 mobile-l:w-20 mobile-l:h-16 mobile-s:ml-1 mobile-m:ml-4 mobile-l:ml-9 laptop-m:mt-6 flex justify-center items-center rounded-xl laptop-m:ml-10'>
           <div className='pt-1.5'>
            <img className='laptop-m:w-8 laptop-m:h-8 mobile-s:w-4 mobile-l:w-9 mobile-l:h-9 mobile-s:h-4 laptop:w-14 laptop:h-14' src="./assets/timer.png" alt="" />
            <span className='laptop-m:text-xs mobile-s:text-[7px] mobile-l:text-xs sans font-bold laptop:text-xl'>History</span>
            </div>
        </button>
    </div>


    <div className='laptop-m:mt-40 mobile-l:mt-24 laptop-m:ml-20 mobile-s:mt-12 mobile-s:ml-2 mobile-m:ml-16 mobile-l:ml-60 laptop:ml-[25rem] laptop:mt-28'>
       {/* exchange */}
       <h1 className='font-bold laptop-m:text-4xl mobile-s:text-2xl mobile-l:text-4xl laptop:text-5xl'>Exchange</h1>
       <div className='flex mt-7 mobile-l:w-[25rem]'>
         <button className='bg-[#C7F609] p-3 rounded-full w-52 mobile-s:w-20 laptop:w-44 laptop:h-20 mobile-l:w-32 mobile-s:h-11 mobile-l:h-16'>
         <div className='flex'>
             <span className='ml-8 font-semibold text-2xl mobile-s:ml-0 mobile-s:text-base mobile-l:text-2xl laptop:text-3xl laptop:ml-6'>Send</span>
             <img className='ml-12 w-7 h-7 mt-1 mobile-s:ml-2 mobile-s:w-4 mobile-l:w-8 mobile-l:h-8 mobile-s:h-4' src="./assets/send.png" alt="" />
             </div>
         </button>
         <button className='p-3 rounded-full w-52 laptop:w-44 laptop:h-20 mobile-s:w-24 mobile-l:w-36 mobile-s:h-11 mobile-l:h-16 bg-[#FFFFFF] ml-8 mobile-s:ml-2 mobile-l:ml-16 border-2 border-[#E3FA84]'>
         <div className='flex'>
             <span className='ml-8 font-semibold text-2xl mobile-s:ml-0 mobile-s:text-base mobile-l:text-2xl laptop:text-3xl laptop:ml-1'>Receive</span>
             <img className='ml-8 w-7 h-7 mt-1 mobile-s:ml-1 mobile-s:w-4 mobile-s:h-4 mobile-l:w-8 mobile-l:h-8' src="./assets/card.png" alt="" />
             </div>
         </button>
         </div>
         <div className='flex p-3 mobile-s:p-0 rounded-2xl h-[5rem] w-[31rem] laptop:w-[28rem] mobile-s:w-[12rem] mobile-l:w-[23rem] mobile-l:h-[5rem] mobile-s:h-[3rem] bg-[#FFFFFF] ml-0 mt-7 border-2 border-[#E3FA84]'>
            <div className='flex p-1.5'>
               <div className='bg-black h-12 mobile-s:h-6 flex rounded-full justify-center items-center w-32 mobile-s:w-14 mobile-l:w-28 mobile-l:h-12  text-xl mobile-s:text-xs mobile-l:text-2xl'>
               <span className='text-white'>Bitcoin</span>
               </div>
               <div className=''>
               <input className='placeholder-black ml-48 laptop:ml-44 mobile-s:ml-6 mobile-l:ml-24 mobile-s:text-xs mobile-l:text-2xl mobile-s:w-16 mobile-l:w-24 text-xl p-2 w-24' type="text" placeholder='1.23463' />
               </div>
               <div className='flex flex-col space-y-0.5'>
               <button className='p-1'><img className='w-5 mobile-s:w-3 mobile-l:w-5' src="./assets/halfarrowup.png" alt="" /></button>
               <button className='p-1'><img className='w-5 mobile-s:w-3 mobile-l:w-5' src="./assets/halfarrowdown.png" alt="" /></button>
               </div>
            </div>
         </div>
         <div className='mt-7 ml-3'>
         <span className='font-semibold text-2xl mobile-l:text-3xl mobile-s:text-xl'>Address</span>
         </div>
         <div className='flex p-3 rounded-2xl h-[5rem] w-[31rem] laptop:w-[28rem] mobile-s:w-[12rem] mobile-l:w-[23rem] mobile-l:h-[5rem] mobile-s:h-[3rem] bg-[#FFFFFF] ml-0 mt-4 border-2 border-[#E3FA84]'>
            <input className='w-[31rem] mobile-s:w-[20rem] h-12 mobile-l:h-12 mobile-s:h-6 mobile-s:pl-0 placeholder-black pl-2' type="text" placeholder='ASNGDRUYTIONUYBJKKJBBJNJ'/>
         </div>
         <button className='bg-[#C7F609] laptop-m:p-3 mt-7 ml-32 laptop:ml-32 mobile-l:ml-24 mobile-s:ml-8 flex justify-center items-center h-12 mobile-s:h-9 rounded-full w-60 laptop:w-56 mobile-s:w-32 mobile-l:w-48 mobile-l:h-12'>
             <span className='font-semibold laptop-m:text-2xl mobile-s:text-lg mobile-l:text-3xl'>Send</span>
         </button>
    </div>


    <div className='laptop-m:mt-40 mobile-l:mt-52 mobile-s:mt-10 laptop:mt-48'>
        {/* transaction */}
        <h1 className='font-bold laptop-m:text-4xl laptop:text-5xl mobile-l:text-4xl mobile-s:text-2xl mobile-s:mt-[37rem] laptop-m:mt-40 mobile-s:mr-[-12rem] mobile-m:mr-[-12rem] mobile-l:mr-[-15rem] mobile-y:mr-[-8rem] mobile-x:mr-[-7rem] mobile-p:mr-[16rem] mobile-n:mr-[5rem] laptop:mr-[4rem] laptop-s:mr-[16rem] mt-40 laptop:mt-[57rem] mobile-l:mt-[56rem] absolute inset-y-0 right-80 laptop-m:mr-[-75rem]'>Transaction</h1>
        <div className='flex mt-32 laptop-m:ml-64 mobile-y:ml-40 laptop:ml-96 mobile-l:ml-32 mobile-s:ml-2 mobile-m:ml-16 w-[34rem] mobile-s:w-[13rem] mobile-l:w-[34rem]'>
        <div className='w-12 h-12 mobile-s:mt-2 mobile-s:w-4 mobile-l:w-16 mobile-l:h-14 mobile-s:h-4 bg-[#088515] rounded-full flex justify-center items-center'>
         <img src="./assets/arrow down.png" alt="" />
         </div>
         <span className='ml-5 mt-2 text-2xl mobile-l:text-2xl mobile-l:ml-6 mobile-s:text-[10px] mobile-s:ml-1 mobile-s:mt-0 font-medium mobile-l:mt-4'>Balance Received</span>
         <span className='ml-14 mobile-s:ml-2 mt-2 mobile-s:mt-2 text-2xl mobile-s:text-xs font-medium mobile-l:ml-8 mobile-l:text-2xl mobile-l:mt-4'>$236</span>
         <button className='ml-9 mobile-s:ml-3 mobile-s:h-6 bg-[#DFFA75] rounded-full mobile-l:ml-8 mobile-l:w-28 mobile-l:h-12 w-28 mobile-s:w-12 mobile-s:mt-1'>
            <span className='text-xl mobile-s:text-[10px] font-semibold mobile-l:text-2xl'>Complete</span>
         </button>
        </div>
        <div className='flex p-3 rounded-2xl h-[5rem] laptop-m:ml-64 mobile-y:ml-36 laptop:ml-96 mobile-s:h-[3rem] w-[34rem] mobile-l:w-[34rem] mobile-s:w-[13rem] bg-[#FFFFFF] ml-44 mobile-s:ml-0 mobile-m:ml-12 mobile-l:ml-28 mt-7 mobile-s:mt-4 border-2 mobile-l:h-[5.5rem] border-[#E3FA84]'>
        <div className='flex ml-1.5 mobile-s:ml-0'>
        <div className='w-12 h-12 mobile-s:w-5 mobile-l:w-14 mobile-l:h-14 mobile-s:h-5 mobile-s:mt-1 bg-[#EA4A4A] rounded-full flex justify-center items-center'>
         <img src="./assets/arrow up.png" alt="" />
         </div>
         <span className='ml-5 mt-2 mobile-s:text-[10px] mobile-s:ml-1 mobile-s:mt-0 mobile-s:w-20 text-2xl mobile-l:text-2xl mobile-l:ml-6 font-medium mobile-l:w-48 mobile-l:mt-4'>Transfer Amount</span>
         <span className='ml-14 mt-2 mobile-s:ml-1 mobile-s:mt-2 text-2xl mobile-s:text-xs font-medium mobile-l:ml-8 mobile-l:text-2xl mobile-l:mt-4'>$236</span>
         <button className='ml-9 mobile-s:ml-1.5 mobile-s:h-6 mobile-s:w-12 mobile-l:ml-8 mobile-l:w-28 mobile-l:h-12 mobile-s:mt-1 bg-[#F4A1A1] rounded-full w-28'>

         </button>
        </div>
         </div>
         <div className='flex p-3 mobile-l:ml-28 laptop-m:ml-64 mobile-y:ml-36 laptop:ml-96 rounded-2xl h-[5rem] mobile-s:h-[3rem] w-[34rem] mobile-s:w-[13rem] bg-[#FFFFFF] mobile-l:h-[5.5rem] ml-44 mobile-l:w-[34rem] mobile-s:ml-0 mobile-m:ml-12 mt-7 mobile-s:mt-4 border-2 border-[#E3FA84]'>
         <div className='flex ml-1.5 mobile-s:ml-0'>
        <div className='w-12 h-12 mobile-l:w-14 mobile-l:h-14 mobile-s:w-5 mobile-s:h-5 mobile-s:mt-1 bg-[#088515] rounded-full flex justify-center items-center'>
         <img src="./assets/arrow down.png" alt="" />
         </div>
         <span className='ml-5 mt-2 mobile-s:text-[10px] mobile-s:ml-1 mobile-l:text-2xl mobile-l:ml-6 mobile-s:mt-0 mobile-s:w-20 text-2xl font-medium mobile-l:w-48 mobile-l:mt-4'>Fund Received</span>
         <span className='ml-20 mt-2 mobile-s:ml-0 mobile-s:mt-2 text-2xl mobile-s:text-xs font-medium mobile-l:ml-8 mobile-l:text-2xl mobile-l:mt-4'>$236</span>
         <button className='ml-9 mobile-s:ml-2 mobile-s:h-6 bg-[#DFFA75] mobile-l:ml-8 mobile-l:w-28 mobile-l:h-12 rounded-full w-28 mobile-s:w-12 mobile-s:mt-1'>
            <span className='text-xl mobile-s:text-[10px] font-semibold mobile-l:text-2xl'>Complete</span>
         </button>
        </div>
         </div>
         <div className='flex p-3 mobile-l:ml-28 laptop-m:ml-64 mobile-y:ml-36 laptop:ml-96 rounded-2xl h-[5rem] mobile-l:h-[5.5rem] mobile-s:h-[3rem] w-[34rem] mobile-s:w-[13rem] bg-[#FFFFFF] ml-44 mobile-s:ml-0 mobile-m:ml-12 mt-7 mobile-s:mt-4 mobile-l:w-[34rem] border-2 border-[#E3FA84]'>
         <div className='flex ml-1.5 mobile-s:ml-0'>
        <div className='w-12 h-12 mobile-l:w-14 mobile-l:h-14 mobile-s:w-5 mobile-s:h-5 mobile-s:mt-1 bg-[#088515] rounded-full flex justify-center items-center'>
         <img src="./assets/arrow down.png" alt="" />
         </div>
         <span className='ml-5 mt-2 mobile-s:text-[10px] mobile-s:ml-1 mobile-s:mt-0 mobile-s:w-20 text-2xl font-medium mobile-l:text-2xl mobile-l:ml-6 mobile-l:w-48 mobile-l:mt-4'>Balance Received</span>
         <span className='ml-14 mt-2 mobile-s:ml-0 mobile-s:mt-2 text-2xl mobile-s:text-xs font-medium mobile-l:ml-8 mobile-l:text-2xl mobile-l:mt-4'>$236</span>
         <button className='ml-8 mobile-s:ml-2 mobile-l:ml-8 mobile-l:w-28 mobile-l:h-12 mobile-s:h-6 bg-[#DFFA75] rounded-full w-28 mobile-s:w-12 mobile-s:mt-1'>
            <span className='text-xl mobile-l:text-2xl mobile-s:text-[10px] font-semibold'>Complete</span>
         </button>
        </div>
         </div>
    </div>
    </div>

    
    <div className='bg-[#EDFCB0] laptop-m:h-64 mobile-s:h-20 laptop-m:w-[74rem] mobile-l:w-[36rem] mobile-l:h-32 rounded-3xl laptop-m:ml-48 laptop:ml-80 mobile-s:ml-2 mobile-m:ml-16 mobile-s:w-[12rem] mobile-s:mt-16'>
        {/* accounts */}
        <div className='laptop-m:flex'>
           <div className='laptop-m:ml-16 mobile-l:ml-52 mobile-s:ml-4 laptop-m:mt-20 mobile-s:mt-2'>
              <span className='text-2xl mobile-s:text-xl font-medium ml-5 mobile-l:text-3xl'>Accounts</span>
              <p className='font-normal mobile-l:text-xl'>Where you Invest &<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;trade</p>
           </div>

           <div className='bg-black laptop-m:w-64 mobile-l:w-[28rem] mobile-l:ml-24 mobile-l:h-60 mobile-s:w-52 laptop-m:h-40 laptop-m:ml-12 mobile-s:ml-0 mt-12 rounded-3xl'>
               <div className='flex'>
                   <span className='laptop-m:text-2xl mobile-l:text-5xl mobile-s:text-xl text-white font-normal mt-7 laptop-m:ml-6 mobile-s:ml-2'>Binance</span>
                   <img className='laptop-m:w-12 laptop-m:ml-16 mobile-l:ml-40 mt-5' src="./assets/binance.png" alt="" />
               </div>
               <div className='flex'>
               <span className='laptop-m:text-2xl mobile-l:text-5xl mobile-l:mt-24 text-white font-normal laptop-m:mt-9 laptop-m:ml-7 mobile-s:ml-2'>.923</span>
               <span className='text-white laptop-m:text-lg mobile-l:mt-24 mobile-l:ml-44 mobile-l:text-5xl font-normal laptop-m:mt-10 laptop-m:ml-24 mobile-s:ml-16'>$2345</span>
               </div>
           </div>

           <div className='bg-[#FFB8B8] mobile-l:w-[28rem] mobile-l:ml-24 mobile-l:h-60 laptop-m:w-64 mobile-s:w-52 laptop-m:h-40 laptop-m:ml-12 mobile-s:ml-0 mt-12 rounded-3xl'>
           <div className='flex'>
                   <span className='laptop-m:text-2xl mobile-l:text-5xl mobile-s:text-xl text-black font-normal mt-7 laptop-m:ml-7 mobile-s:ml-2'>Delta</span>
                   <img className='laptop-m:w-12 laptop-m:ml-24 mobile-l:ml-52 mt-5' src="./assets/caution.png" alt="" />
               </div>
               <div className='flex'>
               <span className='laptop-m:text-2xl mobile-l:mt-24 mobile-l:text-5xl text-black font-normal laptop-m:mt-9 laptop-m:ml-7 mobile-s:ml-2'>1.345</span>
               <span className='text-black laptop-m:text-lg mobile-l:mt-24 mobile-l:ml-44 mobile-l:text-5xl font-normal laptop-m:mt-10 laptop-m:ml-24 mobile-s:ml-16'>$2345</span>
               </div>
           </div>

           <div className='bg-[#BE9AC5] mobile-l:w-[28rem] mobile-l:ml-24 mobile-l:h-60 laptop-m:w-64 mobile-s:w-52 laptop-m:h-40 laptop-m:ml-12 mobile-s:ml-0 mt-12 rounded-3xl'>
           <div className='flex'>
                   <span className='laptop-m:text-2xl mobile-l:text-5xl text-black font-normal mt-7 laptop-m:ml-6 mobile-s:ml-2'>Bitmart</span>
                   <img className='laptop-m:w-12 laptop-m:ml-20 mobile-l:ml-40 mobile-s:ml-12 mt-5' src="./assets/b.png" alt="" />
               </div>
               <div className='flex'>
               <span className='laptop-m:text-2xl mobile-l:mt-24 text-black mobile-l:text-5xl font-normal laptop-m:mt-9 laptop-m:ml-7 mobile-s:ml-2'>1.345</span>
               <span className='text-black mobile-l:mt-24 mobile-l:ml-44 mobile-l:text-5xl laptop-m:text-lg font-normal laptop-m:mt-10 laptop-m:ml-24 mobile-s:ml-16'>$2345</span>
               </div>
           </div>
        </div>
    </div>


<div className='laptop-m:flex laptop-m:mt-24 mobile-l:mt-[60rem] mobile-m:mt-[32rem] mobile-s:mt-[33rem] laptop-m:ml-36 laptop:ml-80 mobile-l:ml-44 mobile-s:ml-0 mobile-m:ml-16 relative'>
    <div>
        {/* statistics */}
        <div className='flex mobile-s:flex-col mobile-l:w-[30rem]'>
        <div className='w-52 mobile-l:w-72'>
        <h1 className='font-semibold laptop-m:text-3xl mobile-s:text-xl mobile-l:text-4xl laptop-m:mt-10'>Your Statistics</h1>
        </div>
        <div className='p-2 rounded-full w-40 h-12 bg-white laptop-m:mt-[-2.5rem] ml-40 mobile-s:ml-6 mobile-s:mt-6 mobile-l:ml-72 mobile-l:mt-[-2.5rem] border-2 border-[#E3FA84]'>
         <div className='flex'>
             <span className='ml-2 font-semibold text-lg'>April-June</span>
             <button><img className='ml-4 w-6 h-6 mt-1' src="./assets/halfarrowdown.png" alt="" /></button>
             </div>
         </div>
        </div>
        <div className='w-[41rem] mobile-l:w-[40rem] mobile-s:w-[12rem] mobile-m:w-[18rem] h-[30rem] mobile-l:h-[30rem] mobile-s:h-[12rem] mobile-m:h-[16rem] mb-6 rounded-2xl mt-8 border-b-4 border-[#C7C8C8] border-l-2 border-r-2'>
            <div className='flex'>
                 <img className='w-7 mobile-l:w-12 mobile-s:w-4 mt-5 ml-10 mobile-s:ml-2' src="./assets/binance.png" alt="" />
                 <img className='w-7 mobile-l:w-12 mobile-s:w-4 mt-5 ml-7' src="./assets/caution.png" alt="" />
                 <img className='w-7 mobile-l:w-12 mobile-s:w-4 mt-5 ml-7' src="./assets/b.png" alt="" />
            </div>
            <div className='flex'>
               <div className='p-0 mt-11 mobile-l:mt-20 ml-9'>
                  {/* <img className='w-full h-[24rem]' src="./assets/graph-bg.png" alt="" /> */}
                  <img className='w-[33rem] bg-[#EDF9DB]/75' src="./assets/graphline1.png" alt="" />
                  <img className='w-[33rem] bg-[#E2F4DD]/75' src="./assets/graphline2.png" alt="" />
               </div>
               <div className='laptop-m:mt-16 mobile-l:mt-28 mobile-s:mt-4 mobile-m:mt-12 ml-9 text-[#8D9088] laptop-m:text-xl mobile-s:text-xs mobile-l:text-2xl font-medium'>
                 <div>40</div>
                 <div className='laptop-m:mt-9 mobile-l:mt-3 mobile-s:mt-1'>30</div>
                 <div className='laptop-m:mt-9 mobile-l:mt-3 mobile-s:mt-1'>20</div>
                 <div className='laptop-m:mt-9 mobile-l:mt-3 mobile-s:mt-1'>10</div>
                 <div className='laptop-m:mt-9 mobile-l:mt-3 mobile-s:mt-1'>0</div>
               </div>
            </div>
            <div className='flex mt-6 mb-6 text-[#8D9088] laptop-m:text-xl mobile-l:text-2xl mobile-s:text-xs laptop-m:ml-10 mobile-s:ml-1 mobile-l:ml-24 mobile-m:ml-9 font-medium'>
                 <div>Jan</div>
                 <div className='laptop-m:ml-14 mobile-l:ml-8 mobile-s:ml-2'>Feb</div>
                 <div className='laptop-m:ml-14 mobile-l:ml-8 mobile-s:ml-2'>Mar</div>
                 <div className='laptop-m:ml-14 mobile-l:ml-8 mobile-s:ml-2'>April</div>
                 <div className='laptop-m:ml-14 mobile-l:ml-8 mobile-s:ml-2'>May</div>
                 <div className='laptop-m:ml-14 mobile-l:ml-8 mobile-s:ml-2'>June</div>
               </div>
        </div>
    </div>

    <div>
        {/* market */}
        <div className='flex ml-6 mobile-l:w-[36rem]'>
        <h1 className='font-semibold laptop-m:text-3xl mobile-l:text-5xl mobile-s:text-2xl absolute inset-y-2 right-[28rem] mobile-s:right-[16rem] mobile-m:right-[9rem] laptop-m:left-[54.5rem] mobile-l:left-[9rem] mobile-s:mt-[24rem] mobile-l:mt-[40rem] mobile-m:mt-[28rem] laptop-m:mt-[2rem]'>Market</h1>
        <div className='p-3 rounded-full w-44 mobile-l:w-40 mobile-s:w-24 bg-[#FFFFFF] laptop-m:ml-[28rem] mobile-l:ml-[24rem] mobile-s:ml-[4rem] mobile-m:ml-[8rem] laptop-m:mt-8 mobile-l:mt-14 mobile-s:mt-6 border-2 border-[#E3FA84]'>
         <div className='flex'>
             <span className='laptop-m:ml-0 mobile-s:ml-0 font-semibold text-xl mobile-s:text-base mobile-l:text-2xl mobile-l:ml-4'>Recent</span>
             <button><img className='ml-8 mobile-s:ml-1 w-6 mobile-s:w-4 h-6 mobile-l:w-6 mobile-l:h-6 mobile-l:ml-4 mobile-s:h-4 mt-1' src="./assets/halfarrowdown.png" alt="" /></button>
             </div>
         </div>
         </div>
        <div className='flex p-3 rounded-2xl h-[5rem] mobile-s:h-[3rem] mobile-l:h-[5rem] w-[30rem] mobile-s:w-[13rem] mobile-l:w-[30rem] bg-[#FFFFFF] laptop-m:ml-[11rem] mobile-s:ml-0 mobile-l:ml-32 mt-20 mobile-s:mt-12 border-4 border-[#F2F2F2]'>
        <div className='flex ml-1.5'>
        <div className='w-9 mobile-s:w-5 mobile-l:w-12 h-9 mt-1.5'>
         <img src="./assets/binance.png" alt="" />
         </div>
         <span className='ml-5 mobile-s:ml-1 mt-2 mobile-s:mt-1 text-2xl mobile-s:text-base font-medium mobile-l:text-3xl mobile-l:ml-12'>Binance</span>
         <span className='ml-20 mobile-s:ml-2 mt-2 mobile-s:mt-1 text-2xl mobile-s:text-base mobile-l:text-3xl mobile-l:ml-10 font-medium text-[#666666]'>BNB</span>
         <span className='ml-24 mobile-s:ml-2 text-black text-xl mobile-s:text-xs font-medium mt-3 mobile-s:mt-2 mobile-l:text-2xl mobile-l:ml-12'>
           $124654
         </span>
        </div>
         </div>
         <div className='flex p-3 rounded-2xl h-[5rem] mobile-s:h-[3rem] w-[30rem] mobile-l:h-[5rem] mobile-s:w-[13rem] mobile-l:w-[30rem] bg-[#FFFFFF] laptop-m:ml-[11rem] mobile-l:ml-32 mobile-s:ml-0 mt-7 border-4 border-[#F2F2F2]'>
        <div className='flex ml-1.5'>
        <div className='w-9 mobile-s:w-5 mobile-l:w-12 h-9 mt-1.5'>
         <img src="./assets/caution.png" alt="" />
         </div>
         <span className='ml-5 mobile-s:ml-1 mt-2 mobile-s:mt-1 text-2xl mobile-s:text-base font-medium mobile-l:text-3xl mobile-l:ml-12'>Delta</span>
         <span className='ml-28 mobile-s:ml-2 mobile-m:ml-6 mt-2 mobile-s:mt-1 text-2xl mobile-s:text-base mobile-l:text-3xl mobile-l:ml-20 font-medium text-[#666666]'>DLT</span>
         <span className='ml-28 mobile-s:ml-2 mobile-m:ml-4 text-black text-xl mobile-s:text-xs font-medium mt-3 mobile-s:mt-2 mobile-l:text-2xl mobile-l:ml-12'>
           $4,325
         </span>
        </div>
         </div>
         <div className='flex p-3 rounded-2xl h-[5rem] mobile-s:h-[3rem] w-[30rem] mobile-l:h-[5rem] mobile-s:w-[13rem] mobile-l:w-[30rem] bg-[#FFFFFF] laptop-m:ml-[11rem] mobile-l:ml-32 mobile-s:ml-0 mt-7 border-4 border-[#F2F2F2]'>
        <div className='flex ml-1.5'>
        <div className='w-9 mobile-s:w-5 mobile-l:w-12 h-9 mt-1.5'>
         <img src="./assets/b.png" alt="" />
         </div>
         <span className='ml-5 mobile-s:ml-1 mt-2 mobile-s:mt-1 text-2xl mobile-s:text-base mobile-l:text-3xl mobile-l:ml-12 font-medium'>Bitmart</span>
         <span className='ml-24 mobile-s:ml-2 mt-2 mobile-s:mt-1 text-2xl mobile-s:text-base font-medium text-[#666666] mobile-l:text-3xl mobile-l:ml-12'>BTM</span>
         <span className='ml-24 mobile-s:ml-2 text-black text-xl mobile-l:text-2xl mobile-l:ml-12 mobile-s:text-xs font-medium mt-3 mobile-s:mt-2'>
           $8,876
         </span>
        </div>
         </div>
    </div>
</div>




    </div>
  )
}

export default wallet;