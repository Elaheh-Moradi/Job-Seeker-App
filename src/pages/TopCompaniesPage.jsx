import React from 'react'
import TopCompanies from '../components/companies/TopCompanies'
import Image from "../assets/images/topCompanies.jpg"
function TopCompaniesPage() {
  return (
    <div>
      <div className='relative'>
      <img src={Image} className='sm:h-96' />
      <div className='absolute inset-0 flex flex-col items-center justify-center leading-10'>
        <div className='text-[#FFFFFF] text-[32px] sm:text-center sm:pb-[10%]'>فهرست برترین شرکت‌های ایران برای کار</div>
        <div className='text-[#FFFFFF] text-[24px]  sm:text-center'>پیش از انتخاب شغل و مسیر حرفه‌ای خود، رتبه‌بندی شرکت‌های برتر ایران را در جابیاب مشاهده کنید</div>
      </div>
      </div>
      <TopCompanies/>
    </div>
  )
}

export default TopCompaniesPage
