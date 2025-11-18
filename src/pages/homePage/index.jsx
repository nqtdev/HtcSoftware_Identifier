import DescribeTitle from 'layout/DescribeTitle'
import CallToAction from 'layout/CallToAction'
import Solution from './components/solution'
import Banner from 'assets/page_HomePage/bannerHomePage.webp'

const Index = () => {
  return (
    <div className='overflow-hidden'>
      {/* Hero Section */}
      <section className='relative h-screen min-h-[600px] lg:h-screen overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <img
            src={Banner}
            alt='Căn cước công dân gắn chip'
            className='w-full h-full object-cover transform scale-105'
          />
          {/* Overlay for better text readability */}
          <div className='absolute inset-0 bg-black/30'></div>
        </div>

        {/* Main Content */}
        <div className='relative z-10 h-full flex items-center'>
          <div className='px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 w-full max-w-7xl mx-auto'>
            <div className='max-w-3xl'>
              {/* Main Title */}
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white mb-4 sm:mb-6'>
                <span className='block font-roboto'>Định Danh</span>
                <span className='block h-28 font-roboto bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                  Điện Tử
                </span>
              </h1>

              {/* Decorative Line */}
              <div className='relative mb-8 sm:mb-12'>
                <div className='w-24 sm:w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/25'></div>
                <div className='absolute -bottom-2 left-0 w-8 sm:w-12 h-0.5 bg-cyan-300/60 rounded-full'></div>
              </div>

              {/* Description Text */}
              <p className='text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl mb-6 sm:mb-8 font-light'>
                Giải pháp định danh điện tử tiên tiến, bảo mật và tiện lợi cho công dân số
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10'>
          <div className='flex flex-col items-center space-y-2'>
            <span className='text-xs sm:text-sm text-cyan-300 font-medium tracking-wider'>
              KHÁM PHÁ
            </span>
            <div className='animate-bounce'>
              <svg
                className='w-5 h-5 sm:w-6 sm:h-6 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 14l-7 7m0 0l-7-7m7 7V3'
                ></path>
              </svg>
            </div>
            <div className='w-px h-6 sm:h-8 bg-gradient-to-b from-cyan-400 to-transparent'></div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* e-ID Section */}
        <section className='py-12 sm:py-16 lg:py-20'>
          <div className='max-w-6xl mx-auto'>
            {/* Section 1 */}
            <div className='mb-12 sm:mb-16'>
              <DescribeTitle title='Định danh điện tử (e-ID)' />
              <div className='bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300'>
                <div className='space-y-4 sm:space-y-6 text-gray-700 leading-relaxed'>
                  <p className='font-roboto text-base sm:text-lg'>
                    Định danh điện tử (e-ID) là một dạng tài khoản số được cấp bởi cơ quan có thẩm
                    quyền, thường là cơ quan nhà nước, nhằm xác minh danh tính của cá nhân hoặc tổ
                    chức trong các giao dịch trực tuyến.
                  </p>

                  <div className='mt-6 sm:mt-8'>
                    <p className='font-roboto text-blue-900 mb-4 sm:mb-6 text-base sm:text-lg'>
                      Tài khoản định danh điện tử cá nhân hiện nay được chia thành 2 mức độ với
                      nhiều điểm khác biệt:
                    </p>
                  </div>

                  <div className='bg-blue-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border-l-4 border-blue-500'>
                    <p className='font-semibold text-blue-800 mb-2 sm:mb-3'>Thông tin bao gồm:</p>
                    <ul className='list-disc list-inside space-y-1 sm:space-y-2 text-blue-700'>
                      <li className='font-roboto text-sm sm:text-base'>
                        Họ tên, ngày sinh, số CCCD/CMND
                      </li>
                      <li className='font-roboto text-sm sm:text-base'>
                        Dữ liệu sinh trắc học (vân tay, khuôn mặt)
                      </li>
                      <li className='font-roboto text-sm sm:text-base'>
                        Thông tin cá nhân được xác thực
                      </li>
                    </ul>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8'>
                    <div className='space-y-3 sm:space-y-4'>
                      <h4 className='font-semibold text-gray-900 text-base sm:text-lg flex items-center'>
                        <div className='w-2 h-2 bg-green-500 rounded-full mr-3'></div>
                        Tiện ích vượt trội
                      </h4>
                      <ul className='space-y-2 sm:space-y-3 text-gray-600'>
                        {[
                          'Tiết kiệm thời gian thủ tục hành chính',
                          'Tăng cường bảo mật với sinh trắc học',
                          'Thúc đẩy chuyển đổi số quốc gia',
                        ].map((item, index) => (
                          <li
                            key={index}
                            className='flex items-start font-roboto text-sm sm:text-base'
                          >
                            <span className='text-green-500 mr-2 mt-1 flex-shrink-0'>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='space-y-3 sm:space-y-4'>
                      <h4 className='font-semibold text-gray-900 text-base sm:text-lg flex items-center'>
                        <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
                        Ứng dụng thực tế
                      </h4>
                      <ul className='space-y-2 sm:space-y-3 text-gray-600'>
                        {[
                          'Đăng ký bảo hiểm, khai thuế trực tuyến',
                          'Gia hạn giấy phép lái xe',
                          'Các dịch vụ công trực tuyến',
                        ].map((item, index) => (
                          <li
                            key={index}
                            className='flex items-start font-roboto text-sm sm:text-base'
                          >
                            <span className='text-blue-500 mr-2 mt-1 flex-shrink-0'>•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 - Account Levels */}
            <div>
              <DescribeTitle title='Chi tiết cấp độ tài khoản định danh điện tử' />
              <div className='bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300'>
                <div className='space-y-6 sm:space-y-8'>
                  {/* Level 1 */}
                  <div className='bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-blue-200'>
                    <div className='flex items-center mb-3 sm:mb-4'>
                      <div className='w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0'>
                        <span className='text-white font-bold text-xs sm:text-sm'>1</span>
                      </div>
                      <h4 className='font-roboto text-gray-900 text-base sm:text-lg'>
                        Tài khoản định danh mức độ 1
                      </h4>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
                      <div>
                        <p className='font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base'>
                          📋 Thông tin bao gồm:
                        </p>
                        <ul className='list-disc list-inside space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base'>
                          {[
                            'Thông tin cá nhân',
                            'Số định danh cá nhân',
                            'Họ, chữ đệm và tên',
                            'Ngày tháng năm sinh',
                            'Giới tính',
                            'Ảnh chân dung',
                          ].map((item, index) => (
                            <li key={index} className='font-roboto'>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className='font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base'>
                          ⏱️ Thời hạn cấp:
                        </p>
                        <ul className='space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base'>
                          <li className='font-roboto'>
                            • Có CCCD gắn chíp:{' '}
                            <span className='font-semibold'>1 ngày làm việc</span>
                          </li>
                          <li className='font-roboto'>
                            • Chưa có CCCD gắn chíp:{' '}
                            <span className='font-semibold'>7 ngày làm việc</span>
                          </li>
                        </ul>

                        <p className='font-semibold text-gray-800 mt-3 sm:mt-4 mb-1 sm:mb-2 text-sm sm:text-base'>
                          📝 Thủ tục đăng ký:
                        </p>
                        <p className='text-gray-600 font-roboto text-sm sm:text-base'>
                          Đăng ký qua ứng dụng VNeID với thẻ CCCD gắn chíp
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Level 2 */}
                  <div className='bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-green-200'>
                    <div className='flex items-center mb-3 sm:mb-4'>
                      <div className='w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0'>
                        <span className='text-white font-bold text-xs sm:text-sm'>2</span>
                      </div>
                      <h4 className='font-roboto text-gray-900 text-base sm:text-lg'>
                        Tài khoản định danh mức độ 2
                      </h4>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
                      <div>
                        <p className='font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base'>
                          📋 Thông tin bao gồm:
                        </p>
                        <ul className='list-disc list-inside space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base'>
                          {[
                            'Thông tin cá nhân',
                            'Số định danh cá nhân',
                            'Họ, chữ đệm và tên',
                            'Ngày tháng năm sinh',
                            'Giới tính',
                            'Ảnh chân dung và Vân tay',
                          ].map((item, index) => (
                            <li key={index} className='font-roboto'>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className='font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base'>
                          ⏱️ Thời hạn cấp:
                        </p>
                        <ul className='space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base'>
                          <li className='font-roboto'>
                            • Có CCCD gắn chíp:{' '}
                            <span className='font-semibold'>3 ngày làm việc</span>
                          </li>
                          <li className='font-roboto'>
                            • Chưa có CCCD gắn chíp:{' '}
                            <span className='font-semibold'>7 ngày làm việc</span>
                          </li>
                        </ul>

                        <p className='font-semibold text-gray-800 mt-3 sm:mt-4 mb-1 sm:mb-2 text-sm sm:text-base'>
                          📝 Thủ tục đăng ký:
                        </p>
                        <p className='text-gray-600 font-roboto text-sm sm:text-base'>
                          Trực tiếp đến Công an xã/phường/thị trấn
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Usage Comparison */}
                  <div className='bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-purple-200'>
                    <h4 className='font-semibold text-gray-900 text-lg sm:text-xl mb-3 sm:mb-4 flex items-center'>
                      <span className='text-purple-500 mr-3'>⚖️</span>
                      So sánh giá trị sử dụng
                    </h4>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
                      <div>
                        <p className='font-semibold text-blue-600 mb-2 sm:mb-3 text-sm sm:text-base'>
                          Mức độ 1:
                        </p>
                        <ul className='list-disc list-inside space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base'>
                          {[
                            'Chứng minh thông tin cá nhân cơ bản',
                            'Sử dụng trong giao dịch yêu cầu cung cấp thông tin',
                          ].map((item, index) => (
                            <li key={index} className='font-roboto'>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className='font-semibold text-green-600 mb-2 sm:mb-3 text-sm sm:text-base'>
                          Mức độ 2:
                        </p>
                        <ul className='list-disc list-inside space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base'>
                          {[
                            'Tương đương thẻ CCCD khi xuất trình',
                            'Giá trị như giấy tờ truyền thống',
                            'Sử dụng cho giao dịch điện tử quan trọng',
                          ].map((item, index) => (
                            <li key={index} className='font-roboto'>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Important Note */}
                  <div className='bg-yellow-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border-l-4 border-yellow-500'>
                    <div className='flex items-start'>
                      <span className='text-yellow-500 text-lg sm:text-xl mr-3 mt-1 flex-shrink-0'>
                        💡
                      </span>
                      <div>
                        <p className='font-semibold text-yellow-800 mb-2 text-sm sm:text-base'>
                          Lưu ý quan trọng:
                        </p>
                        <p className='text-yellow-700 font-roboto text-sm sm:text-base'>
                          Tài khoản định danh điện tử mức độ 1 và mức độ 2 có nhiều điểm khác biệt
                          quan trọng. Hy vọng với những thông tin mà chúng tôi đã tổng hợp sẽ giúp
                          cho bạn có thêm nhiều kiến thức bổ ích hội nhập trong thời đại số.
                        </p>
                        <p className='text-yellow-700 mt-2 font-semibold text-sm sm:text-base'>
                          * Công dân chưa có CCCD gắn chíp sẽ được cấp tài khoản mức 2 cùng lúc với
                          thẻ CCCD.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className='py-12 sm:py-16 lg:py-20'>
          <Solution />
        </section>
      </div>

      <CallToAction />
    </div>
  )
}

export default Index
