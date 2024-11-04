import Banner from 'assets/homePage/banner.webp'
import iconFeatureRead from 'assets/homePage/iconFeature/4.svg'
import iconFeatureCheck from 'assets/homePage/iconFeature/1.svg'
import iconFeatureVerify from 'assets/homePage/iconFeature/3.svg'
import iconFeatureCompare from 'assets/homePage/iconFeature/2.svg'
import iconFeatureCompareCard from 'assets/homePage/iconFeature/5.svg'
import iconFeatureCompareAvatar from 'assets/homePage/iconFeature/6.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import useCheckMobile from 'hooks/useCheckMobile'
const PosterPage = () => {
  useEffect(() => {
    AOS.init({})
  }, [])
  const isMobile = useCheckMobile()
  return (
    <div>
      <section className='flex max-w-full flex-col justify-between lg:flex-row'>
        <div className='container m-auto box-border px-2'>
          <h1 className='m-2 text-center text-4xl font-bold italic text-main-colors md:text-[3.2rem] xl:text-6xl'>
            RAR CHIP TOOTKIT
          </h1>
          <div className='text-center sm:m-2'>
            <span className='text-md text-main-colors xl:text-2xl'>
              Xác thực căn cước công dân gắn chip chính xác{' '}
              <span className='text-base font-bold text-green-600 xl:text-2xl'>100%</span> với cơ sở
              dữ liệu
              <span className='text-base font-bold text-green-600 xl:text-2xl'> RAR-C06</span> của
              Bộ Công An
            </span>
          </div>
          <div>
            <span className='text-md ml-1 text-gray-400'>
              Giải pháp Ứng dụng dịch vụ xác thực thông tin công dân trong chip của thẻ CCCD trong
              việc xác minh thông tin nhân thân, đối sánh ảnh chân dung và xác minh thông tin/đánh
              giá hồ sơ, người dùng/khách hàng ứng dụng cơ sở dữ liệu gốc quốc gia về dân cư, căn
              cước công dân và các tính năng/dữ liệu trong chíp điện tử trên thẻ CCCD gắn chip để tự
              động xác minh thông tin nhân thân (kiểm tra giấy tờ tùy thân), đối sánh ảnh chân dung
              (đối chiếu sinh trắc học) và xác minh thông tin/đánh giá hồ sơ người dùng/khách hàng.
            </span>
          </div>
        </div>
        <div className='container p-2'>
          <img className='w-[80%] m-auto' src={Banner} alt='logo banner' />
        </div>
      </section>
      <section className='m-auto lg:w-[85%] mt-20'>
        <div data-aos='zoom-in' data-aos-duration='1000' className='mt-10 '>
          <h2 className='base_title'>Tính năng của Rar Chip Tootkit</h2>
        </div>
        <div className='grid gap-2 md:grid-cols-2 mx-auto'>
          <div
            data-aos={isMobile ? 'fade-down' : 'zoom-out-right'}
            data-aos-duration={isMobile ? '1000' : '1000'}
            className='flex items-center gap-4 rounded-lg border-2 border-sky-500 px-1 w-[99%]'
          >
            <img className='w-1/3' src={iconFeatureRead} alt='hình ảnh xác thực nhanh chóng' />
            <span className='text-main-colors'>
              - Đọc và giải mã toàn bộ thông tin dữ liệu lưu trong chip điện tử trên thẻ CCCD gắn
              chip theo chuẩn ICAO qua NFC.
            </span>
          </div>
          <div
            data-aos={isMobile ? 'fade-down' : 'zoom-out-left'}
            data-aos-duration={isMobile ? '1200' : '1000'}
            className='flex items-center gap-4 rounded-lg border-2 border-sky-500 px-1 w-[99%]'
          >
            <img src={iconFeatureCheck} alt='hình ảnh tăng cường bảo mật ' />
            <span className='text-main-colors'>
              - Kiểm tra tính đầy đủ và toàn vẹn của dữ liệu lưu trữ trong chip điện tử.
            </span>
          </div>
          <div
            data-aos={isMobile ? 'fade-down' : 'fade-right'}
            data-aos-duration={isMobile ? '1400' : '1100'}
            className='flex items-center gap-4 rounded-lg border-2 border-sky-500 px-1 w-[99%]'
          >
            <img src={iconFeatureVerify} alt='hình ảnh tiết kiệm chi phí' />
            <span className='text-main-colors'>
              - Chứng thực chữ ký số trong chip điện tử là do Bộ Công An ký số.
            </span>
          </div>
          <div
            data-aos={isMobile ? 'fade-down' : 'fade-left'}
            data-aos-duration={isMobile ? '1600' : '1100'}
            className='flex items-center gap-4 rounded-lg border-2 border-sky-500 px-1 w-[99%]'
          >
            <img src={iconFeatureCompare} alt='hình ảnh cải thiện trải nghiệm' />
            <span className='text-main-colors'>
              - Đối chiếu thông tin nhân thân trong chip điện tử với: thông tin nhân thân in trên
              mặt thẻ CCCD gắn chíp; thông tin nhân thân mã hóa trong mã QR và thông tin nhân thân
              mã hóa trong vùng MRZ để đảm bảo thông tin nhân thân là trùng khớp và nhất quán.
            </span>
          </div>
          <div
            data-aos={isMobile ? 'fade-down' : 'zoom-out-right'}
            data-aos-duration={isMobile ? '1800' : '1200'}
            className='flex items-center gap-4 rounded-lg border-2 border-sky-500 px-1 w-[99%]'
          >
            <img src={iconFeatureCompareCard} alt='hình ảnh tuân thủ quy định' />
            <span className='text-main-colors'>
              - Đối sánh ảnh chân dung khách hàng với ảnh chân dung lưu trữ trong chip điện tử trên
              thẻ CCCD gắn chip.
            </span>
          </div>
          <div
            data-aos={isMobile ? 'fade-down' : 'zoom-out-left'}
            data-aos-duration={isMobile ? '2000' : '1200'}
            className='flex items-center gap-4 rounded-lg border-2 border-sky-500 px-1 w-[99%]'
          >
            <img src={iconFeatureCompareAvatar} alt='hình ảnh dữ liệu minh bạch' />
            <span className='text-main-colors'>
              -- Đối sánh ảnh chân dung in trên mặt thẻ với ảnh chân dung lưu trong chip điện tử.
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PosterPage
