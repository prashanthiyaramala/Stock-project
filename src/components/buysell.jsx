import React from "react";

const buysell = () => {
  return (
    <div>
      <div className="mt-32 laptop:pl-0 mobile-l:pl-16 mobile-l:pr-0 tablet:pr-12 flex justify-center items-center tablet tablet:ml-24 space-x-14 mobile-m:pr-0">
        <button className="rounded-lg mobile-l:px-7 laptop:px-9 laptop:py-3 laptop-s:mr-20 laptop-s:px-20 laptop-s:py-4 bg-black py-3 px-9 tablet:px-12">
          <h1 className="text-center mobile-s:text-xl laptop-s:text-2xl text-white">Get Started</h1>
        </button>
        <button className="rounded-lg mobile-l:px-12 laptop:px-16 laptop:py-3 tablet:px-12 laptop-s:px-20 laptop-s:py-4 border py-3 px-14 border-solid border-black">
          <h1 className="text-center laptop-s:text-2xl font-medium">Sign In</h1>
        </button>
      </div>

      <div className="tablet:pl-14 tablet:pr-1 mt-10 flex justify-center items-center mobile-s:pl-8 mobile-s:pr-4 mobile-m:pl-0 mobile-m:pr-10 mobile-l:pr-28">
        <div className="w-10/12 laptop-s:w-11/12 h-96 laptop:w-11/12 mobile-l:ml-52 tablet-m:ml-0 laptop:ml-0 tablet-l:w-8/12 tablet-m:w-10/12 laptop-s:h-[32rem] tablet:w-max tablet:h-[22rem] rounded-2xl p-4 bg-[#EFFDBA] mobile-s:w-11/12 mobile-l:w-11/12 mobile-s:h-80 mobile-m:w-9/12 ">
          <div className="float-left ml-1">
            <div className="flex">
              <h1 className="text-3xl laptop-s:ml-10 tablet:ml-20 tablet:text-5xl ml-8 mt-6 mobile-s:text-2xl mobile-s:ml-1">Buy</h1>
              <h1 className="text-3xl tablet:text-5xl font-thin ml-20 mt-6 mobile-s:text-2xl mobile-s:mx-8 laptop:ml-16">Sell</h1>
            </div>
            <div>
              <h1 className="text-lg laptop:text-2xl laptop-s:ml-16 laptop-s:text-3xl laptop-s:mt-16 tablet:text-2xl tablet:ml-20 mt-10 ml-16 mobile-s:ml-4 mobile-s:text-base">I will spend</h1>
              <input
                className="ml-24 laptop:text-xl laptop-s:ml-20 laptop-s:text-2xl laptop:w-[35rem] laptop-s:w-96 laptop-s:h-16 tablet:ml-20 mt-4 h-10 pl-2 mobile-s:ml-4 mobile-s:w-44 placeholder-black"
                type="text"
                placeholder="Enter Amount"
              />
              <h1 className="text-lg laptop:text-2xl laptop-s:ml-16 laptop-s:text-3xl laptop-s:mt-10 tablet:ml-20 tablet:text-2xl mt-10 ml-16 mobile-s:ml-4 mobile-s:text-base mobile-s:mt-5">I will receive</h1>
              <input
                className="ml-24 laptop-s:ml-20 laptop:text-xl laptop-s:text-2xl laptop:w-[35rem]  laptop-s:w-96 laptop-s:h-16 tablet:ml-20 mt-4 w-96 h-10 mobile-s:ml-4 mobile-s:w-44 pl-2 placeholder-black"
                type="text"
                placeholder="Enter Amount"
              />
            </div>
          </div>
          <div className="tablet:w-[30rem] laptop-s:mr-2 laptop-s:mt-6 float-right mr-24 tablet:mr-28 mobile-s:mr-0 mobile-s:w-56">
            <div className="">
              <h1 className="mt-20 tablet:ml-28 text-xl tablet:text-4xl laptop:text-2xl laptop:ml-8 laptop:mt-28">Transaction Details</h1>
              <div className="flex mt-12 tablet:text-3xl tablet:ml-20 laptop:ml-8 laptop:text-xl">
                <h1>Service Provider</h1>
                <span className="ml-52 mobile-s:ml-16 laptop:ml-40">--</span>
              </div>
              <div className="flex mt-2 tablet:text-3xl tablet:ml-20 laptop:ml-8 laptop:text-xl">
                <h1>Deposit to Acount</h1>
                <span className="ml-48 mobile-s:ml-12 laptop:ml-36">--</span>
              </div>
              <div className="flex mt-2 tablet:text-3xl tablet:ml-20 laptop:ml-8 laptop:text-xl">
                <h1>Estimated Spend</h1>
                <span className="ml-44 mobile-s:ml-14 laptop:ml-28">0 &nbsp;USD</span>
              </div>
              <div className="flex mt-2 tablet:text-3xl tablet:ml-20 laptop:ml-8 laptop:text-xl">
                <h1>Estimated receive</h1>
                <span className="ml-44 mobile-s:ml-12 laptop:ml-28">0 &nbsp;BTC</span>
              </div>
              <button className="bg-[#C7F609] tablet:ml-20 laptop:ml-8 tablet:w-80 tablet:h-10 laptop:w-96 h-8 rounded-md mt-7 font-medium mobile-s:w-48">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="">
          <div className="tablet:flex laptop-s:mt-10 mobile-s:mt-96">
            <img
              className="w-4/12 mt-48 ml-52 laptop:w-3/12 laptop:ml-60 laptop-s:ml-32 tablet:w-5/12 mobile-s:ml-16 mobile-s:w-7/12 mobile-l:ml-40"
              src="./assets/phone.png"
              alt=""
            />
            <div className="border-1 w-[28rem] h-44 mobile-s:h-4">
              <button className="border laptop-s:w-[30rem] laptop-s:h-60 laptop:ml-36 ml-20 laptop:w-[35rem] laptop:h-52 mt-44 w-[30rem] h-48 border-[#202020] mobile-s:ml-10 mobile-s:mt-36 mobile-s:w-[20rem] mobile-s:h-40">
                <div className="flex h-1/3">
                  <img className="ml-6" src="./assets/banxa.png" alt="" />
                  <h1 className="font-normal text-3xl mt-2 ml-6 mobile-s:text-2xl mobile-s:ml-3 laptop:text-4xl">BANXA</h1>
                  <h1 className="font-light text-3xl mt-2 ml-32 mobile-s:text-2xl mobile-s:ml-12 laptop:ml-52 laptop:text-3xl">0 BTC</h1>
                </div>
                <div className="flex h-1/3 mt-10">
                  <h1 className="ml-6 mb-48 text-[#a19b9b] font-normal text-lg">
                    Accepts
                  </h1>
                  <img
                    className="w-1/12 h-10 ml-6 mobile-s:w-2/12 mobile-s:ml-2"
                    src="./assets/pay.png"
                    alt=""
                  />
                  <img
                    className="w-1/12 h-10 ml-6 mobile-s:ml-2"
                    src="./assets/visa.png"
                    alt=""
                  />
                  <img
                    className="w-1/12 h-10 ml-6 mobile-s:ml-3"
                    src="./assets/mastercard.png"
                    alt=""
                  />
                  <img
                    className="w-1/12 h-10 ml-6 mobile-s:w-2/12 mobile-s:ml-4"
                    src="./assets/gpay.png"
                    alt=""
                  />
                </div>
              </button>
              <button className="border laptop-s:w-[30rem] laptop-s:h-60 ml-20 laptop:ml-36 laptop:w-[35rem] laptop:h-52 mt-4 w-[30rem] h-48 border-[#202020] mobile-s:ml-10 mobile-s:mt-4 mobile-s:w-[20rem] mobile-s:h-40">
                <div className="flex h-1/3">
                  <img
                    className="ml-6 mt-4"
                    src="./assets/simplex.png"
                    alt=""
                  />
                  <h1 className="font-normal text-3xl mt-2 ml-6 mobile-s:text-2xl mobile-s:ml-3 laptop:text-4xl">Simplex</h1>
                  <h1 className="font-light text-3xl mt-1 ml-28 mobile-s:text-2xl mobile-s:ml-12 laptop:ml-44 laptop:text-3xl">0 BTC</h1>
                </div>
                <div className="flex mt-12">
                  <h1 className="ml-6 mb-44 w-[4rem]  text-[#a19b9b] font-normal text-lg">
                    Accepts
                  </h1>
                  <img
                    className="w-1/12 h-10 ml-6 mobile-s:w-2/12 mobile-s:ml-2"
                    src="./assets/pay.png"
                    alt=""
                  />
                  <img
                    className="w-1/12 h-10 ml-6 mobile-s:ml-2"
                    src="./assets/visa.png"
                    alt=""
                  />
                  <img
                    className="w-1/12 h-10 ml-6 mobile-s:ml-3"
                    src="./assets/mastercard.png"
                    alt=""
                  />
                  <img
                    className="w-1/12 h-10 ml-6 mobile-s:w-2/12 mobile-s:ml-4"
                    src="./assets/gpay.png"
                    alt=""
                  />
                </div>
              </button>
              <button className="border laptop-s:w-[30rem] laptop-s:h-60 laptop:w-[35rem] laptop:h-52 laptop:ml-36 ml-20 mt-4 w-[30rem] h-48 border-[#202020] mobile-s:ml-10 mobile-s:mt-4 mobile-s:w-[20rem] mobile-s:h-40">
                <div className="flex h-1/3">
                  <img
                    className="ml-6"
                    src="./assets/legend trading.png"
                    alt=""
                  />
                  <h1 className="font-normal text-3xl mt-2 mobile-s:text-xl mobile-s:mt-2 laptop:text-4xl">Legend Trading</h1>
                  <h1 className="font-light text-3xl mt-2 ml-16 mobile-s:text-2xl mobile-s:ml-6 laptop:ml-28 laptop:text-3xl">0 BTC</h1>
                </div>
                <div className="flex h-1/3 mt-10">
                  <h1 className="ml-6 text-[#a19b9b] font-normal text-lg">
                    Accepts
                  </h1>
                  <img
                    className="w-1/12 h-10 ml-6 mobile-s:w-2/12 mobile-s:ml-2"
                    src="./assets/pay.png"
                    alt=""
                  />
                  <img
                    className="w-1/12 h-10 ml-6 mobile-s:ml-2"
                    src="./assets/visa.png"
                    alt=""
                  />
                  <img
                    className="w-1/12 h-10 ml-6 mobile-s:ml-3"
                    src="./assets/mastercard.png"
                    alt=""
                  />
                  <img
                    className="w-1/12 h-10 ml-6 mobile-s:w-2/12 mobile-s:ml-4"
                    src="./assets/gpay.png"
                    alt=""
                  />
                </div>
              </button>
            </div>
          </div>
          <h1 className="mobile-l:ml-36 text-3xl laptop-s:text-3xl laptop:ml-72 laptop-s:mt-24 laptop-s:ml-36 font-medium ml-60 tracking-wide w-96 mt-24 mobile-s:mt-12 mobile-s:ml-10 mobile-s:text-2xl">
            Choose Service Providers
          </h1>
        </div>
      </div>

      <div className="w-full laptop:w-full mobile-l:w-[40rem] laptop-s:mt-96 tablet-m:w-[62rem] tablet:mt-80 tablet:w-[47rem] tablet:h-[30rem] h-96 bg-black mt-64 pt-12 mobile-s:mt-[38rem] mobile-s:pt-6 tablet-l:w-[81rem]">
        <span className="text-3xl mobile-l:text-4xl tablet:text-4xl tablet:ml-20 text-[#e7e5e5] ml-52 mobile-s:ml-12 mobile-l:ml-12"> Q & A</span>
        <p className="text-[#e7e5e5] ml-52 tablet:text-2xl tablet:ml-20 mt-14 mobile-s:ml-12 mobile-l:ml-12 mobile-l:text-2xl">what is this service?</p>
        <p className="mt-10 text-[#e7e5e5] ml-52 tablet:text-2xl tablet:ml-20 mobile-s:ml-12 mobile-l:ml-12 mobile-l:text-2xl">
          
          Are there any fees to use this service?
        </p>
        <p className="text-[#e7e5e5] ml-52 tablet:text-2xl tablet:ml-20 mt-10 mobile-s:ml-12 mobile-l:ml-12 mobile-l:text-2xl">
          who is this service provided by ?
        </p>
        <p className="text-[#e7e5e5] ml-52 tablet:text-2xl tablet:ml-20 mt-10 mobile-s:ml-12 mobile-l:ml-12 mobile-l:text-2xl">
          I have more questions, how can i get additional help?
        </p>
      </div>

      <div>
        <h1 className="text-5xl laptop-s:text-6xl laptop-s:mt-20 mobile-s:text-4xl mobile-s:mt-10 mt-20 text-black flex justify-center items-center mobile-l:ml-36 tablet-m:ml-16 tablet-l:mr-24">
          Our Partners
        </h1>
        <div className="mt-28 mobile-s:mt-8">
          <div className="flex ml-20 tablet:ml-20 mobile-s:ml-3 mobile-l:ml-10">
               <img className="w-2/12 mobile-l:w-3/12" src="./assets/europak.png" alt="" />
               <img className="w-2/12 ml-9 mobile-l:w-3/12 mobile-s:ml-2 mobile-l:ml-4" src="./assets/go2group.png" alt="" />
               <img className="w-2/12 ml-9 mobile-l:w-3/12 laptop-s:w-2/12 mobile-s:ml-2 mobile-l:ml-0" src="./assets/cisco.png" alt="" />
               <img className="w-2/12 ml-9 mobile-l:w-3/12 mobile-s:ml-2 mobile-l:ml-4" src="./assets/primesurgeons.png" alt="" />
               <img className="w-2/12 ml-9 mobile-l:w-3/12 mobile-s:ml-2 mobile-l:ml-4" src="./assets/heptagon.png" alt="" />
          </div>
          <div className="flex ml-20 tablet:ml-20 mobile-s:ml-3 mobile-l:ml-10">
               <img className="w-2/12" src="./assets/green.png" alt="" />
               <img className="w-2/12 ml-9 mobile-s:ml-2 mobile-l:w-3/12 mobile-l:ml-4" src="./assets/idt.png" alt="" />
               <img className="w-2/12 ml-9 mobile-s:ml-2 mobile-l:w-3/12 mobile-l:ml-4" src="./assets/pancal.png" alt="" />
               <img className="w-2/12 ml-9 mobile-s:ml-2 mobile-l:w-3/12 mobile-l:ml-4" src="./assets/club.png" alt="" />
               <img className="w-2/12 ml-9 mobile-s:ml-2 mobile-l:w-3/12 mobile-l:ml-4" src="./assets/roundfusion.png" alt="" />
          </div>
          <div className="flex ml-20 tablet:ml-20 mobile-s:ml-3 mobile-l:ml-10">
               <img className="w-2/12" src="./assets/aehr.png" alt="" />
               <img className="w-2/12 ml-9 mobile-s:ml-2 mobile-l:w-3/12 mobile-l:ml-4" src="./assets/acc.png" alt="" />
               <img className="w-2/12 ml-9 mobile-s:ml-2 mobile-l:w-3/12 mobile-l:ml-4" src="./assets/optimized.png" alt="" />
               <img className="w-2/12 ml-9 mobile-s:ml-2 mobile-l:w-3/12 mobile-l:ml-4" src="./assets/morgan.png" alt="" />
               <img className="w-2/12 ml-9 mobile-s:ml-2 mobile-l:w-3/12 mobile-l:ml-4" src="./assets/therababy.png" alt="" />
          </div>
          <div className="flex justify-center items-center">
              <img className="w-2/12 mobile-l:w-3/12 mobile-l:ml-32" src="./assets/omnicell.png" alt="" />
          </div>
        </div>
      </div>

      
      <div className="w-full laptop:w-full tablet-l:w-[81rem] mobile-l:w-[40rem] tablet-m:w-[61rem] tablet:w-[47rem] h-96 laptop:h-[26rem] tablet-m:h-96 bg-black pt-6 mobile-s:h-[36rem]">
          <div>
            <img className="ml-6 laptop-s:w-3/12 mobile-l:ml-48 laptop-s:ml-6 w-2/12 mobile-s:w-4/12 mobile-s:ml-28 laptop:w-2/12" src="./assets/stoxg.png" alt="" />
          </div>
          <div className="tablet:float-right mr-24 laptop-s:mr-10 mobile-s:mr-0">
              <span className="text-white laptop:ml-24 mobile-l:mr-12 mobile-l:text-2xl tablet-m:mr-12 text-2xl mobile-s:text-lg mobile-s:mt-5 mobile-s:flex mobile-s:justify-center mobile-s:items-center laptop-s:text-3xl laptop:text-2xl laptop:mt-0">Follow Us</span>
              <div className="flex mt-4 laptop:ml-48 mobile-l:ml-40 tablet-m:mr-12 laptop-s:mt-10 laptop:mt-4">
                <img className="w-2/12 mobile-l:w-1/12 laptop-s:ml-10 h-8 mobile-s:w-1/11 mobile-s:ml-16 laptop:w-1/12" src="./assets/facebook.png" alt="" />
                <img className="ml-6 w-2/12 mobile-l:w-1/12 laptop-s:ml-8 h-8 mobile-s:w-1/11 mobile-s:ml-4 laptop:w-1/12" src="./assets/twitter.png" alt="" />
                <img className="ml-6 w-2/12 mobile-l:w-1/12 h-8 laptop-s:ml-8  mobile-s:w-1/11 mobile-s:ml-3 laptop:w-1/12" src="./assets/instagram.png" alt="" />
              </div>
              <div className="mt-24 mobile-l:ml-56 mobile-s:mt-9 mobile-s:ml-24 tablet-m:mr-12">
              <p className="text-white text-xl mobile-s:text-base laptop-s:mt-20 laptop-s:mr-20 laptop-s:text-3xl">&nbsp;&nbsp;&nbsp;&nbsp;Email Us at:</p>
              <p className="text-white text-xl mt-3 mobile-s:text-lg laptop-s:text-2xl">StoxG34@gmail.com</p>
              </div>
          </div>
          <div className="mt-7 mobile-l:ml-32">
          <div className="flex">
            <span className="text-white laptop-s:text-2xl laptop-s:ml-16 text-xl ml-48 mobile-s:ml-6 laptop:ml-48">Company</span>
            <span className="text-white text-2xl laptop-s:ml-16 laptop-s:text-2xl ml-28">Support</span>
          </div>
          <div className="flex mt-6">
            <span className="text-white laptop-s:text-2xl laptop-s:ml-16 text-xl ml-48 mobile-s:ml-6 laptop:ml-48">About Us</span>
            <span className="text-white laptop-s:text-2xl laptop-s:ml-16 text-xl ml-28">Help Center</span>
          </div>
          <div className="flex mt-6">
            <span className="text-white laptop-s:text-2xl laptop-s:ml-16 text-xl ml-48 mobile-s:ml-6 laptop:ml-48">Carrier</span>
            <span className="text-white laptop-s:text-2xl laptop-s:ml-16 text-xl ml-32">&nbsp;Official Verification</span>
          </div>
          <div className="flex mt-6 w-[40rem]">
            <span className="text-white text-xl laptop-s:text-2xl laptop-s:ml-16 ml-48 mobile-s:ml-6 laptop:ml-48">Partners</span>
            <span className="text-white laptop-s:text-2xl laptop-s:ml-16 text-xl ml-28">&nbsp;&nbsp;Contact Us</span>
          </div>
          </div>

      </div>


    </div>
  );
};

export default buysell;
