import DescribeTitle from 'layout/DescribeTitle'
import CallToAction from 'layout/CallToAction'
import Solution from './components/solution'
import Banner from 'assets/page_HomePage/bannerHomePage.webp'
const Index = () => {
  return (
    <div className='overflow-hidden '>
      <section className='relative h-screen overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <img
            src={Banner}
            alt='Căn cước công dân gắn chip'
            className='w-full h-full object-cover transform scale-105'
          />
        </div>
        {/* Main Content */}
        <div className='relative z-10 h-full flex items-center'>
          <div className='px-8 md:px-16 lg:px-24 xl:px-40 w-full'>
            <div className='max-3xl'>
              {/* Main Title */}
              <h1 className='text-5xl md:text-6xl lg:text-8xl font-bold leading-tight text-white mb-6'>
                <span className='block font-roboto'>Định Danh</span>
                <span className='block font-roboto bg-gradient-to-r from-cyan-400 h-[7rem]  to-blue-500 bg-clip-text text-transparent'>
                  Điện Tử
                </span>
              </h1>

              {/* Decorative Line với hiệu ứng */}
              <div className='relative mb-12'>
                <div className='w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/25'></div>
                <div className='absolute -bottom-2 left-0 w-12 h-0.5 bg-cyan-300/60 rounded-full'></div>
              </div>

              {/* Description Text */}
              <p className='text-xl font-roboto md:text-2xl text-white/90 leading-relaxed max-w-xl mb-8 font-light'>
                Giải pháp định danh điện tử tiên tiến, bảo mật và tiện lợi cho công dân số
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
          <div className='flex flex-col items-center space-y-2'>
            <span className='text-sm text-cyan-300 font-medium tracking-wider'>KHÁM PHÁ</span>
            <div className='animate-bounce'>
              <svg
                className='w-6 h-6 text-white'
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
            <div className='w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent'></div>
          </div>
        </div>
      </section>
      {/* CCCD Section */}
      <div className='container max-w-6xl m-auto'>
        {/* Giải pháp định danh  */}
        <section className='py-16 px-4 md:px-8 '>
          <div className='max-w-6xl mx-auto'>
            {/* Section 1 */}
            <div className='mb-16'>
              <DescribeTitle title='Định danh điện tử (e-ID)' />
              <div className='bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300'>
                <div className='space-y-6 text-gray-700 leading-relaxed'>
                  <p className='font-roboto text-lg'>
                    Định danh điện tử (e-ID) là một dạng tài khoản số được cấp bởi cơ quan có thẩm
                    quyền, thường là cơ quan nhà nước, nhằm xác minh danh tính của cá nhân hoặc tổ
                    chức trong các giao dịch trực tuyến. Tại Việt Nam, định danh điện tử đã được
                    triển khai thông qua hệ thống định danh và xác thực điện tử quốc gia, tích hợp
                    trên ứng dụng VNeID do Bộ Công an phát triển.
                  </p>

                  {/* Nội dung mới bổ sung */}
                  <div className='mt-8'>
                    <p className='font-roboto text-blue-900 mb-6 text-lg'>
                      Tài khoản định danh điện tử cá nhân hiện nay được chia thành 2 mức độ là Tài
                      khoản định danh điện tử mức độ 1 và Tài khoản định danh điện tử mức độ 2 với
                      nhiều điểm khác biệt. Cụ thể:
                    </p>
                  </div>

                  <div className='bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500'>
                    <p className='font-semibold text-blue-800 mb-2'>Thông tin bao gồm:</p>
                    <ul className='list-disc list-inside space-y-1 text-blue-700'>
                      <li className='font-roboto'>Họ tên, ngày sinh, số CCCD/CMND</li>
                      <li className='font-roboto'>Dữ liệu sinh trắc học (vân tay, khuôn mặt)</li>
                      <li className='font-roboto'>Thông tin cá nhân được xác thực</li>
                    </ul>
                  </div>

                  <div className='grid md:grid-cols-2 gap-8 mt-8'>
                    <div className='space-y-4'>
                      <h4 className='font-semibold text-gray-900 text-lg flex items-center'>
                        <div className='w-2 h-2 bg-green-500 font-roboto rounded-full mr-3'></div>
                        Tiện ích vượt trội
                      </h4>
                      <ul className='space-y-3 text-gray-600'>
                        <li className='flex items-start font-roboto'>
                          <span className='text-green-500 mr-2'>✓</span>
                          Tiết kiệm thời gian thủ tục hành chính
                        </li>
                        <li className='flex items-start font-roboto'>
                          <span className='text-green-500 mr-2'>✓</span>
                          Tăng cường bảo mật với sinh trắc học
                        </li>
                        <li className='flex items-start font-roboto'>
                          <span className='text-green-500 mr-2'>✓</span>
                          Thúc đẩy chuyển đổi số quốc gia
                        </li>
                      </ul>
                    </div>
                    <div className='space-y-4'>
                      <h4 className='font-semibold text-gray-900 text-lg flex items-center'>
                        <div className='w-2 h-2 font-roboto bg-blue-500 rounded-full mr-3'></div>
                        Ứng dụng thực tế
                      </h4>
                      <ul className='space-y-3 text-gray-600'>
                        <li className='flex items-start font-roboto'>
                          <span className='text-blue-500 mr-2'>•</span>
                          Đăng ký bảo hiểm, khai thuế trực tuyến
                        </li>
                        <li className='flex items-start font-roboto'>
                          <span className='text-blue-500 mr-2'>•</span>
                          Gia hạn giấy phép lái xe
                        </li>
                        <li className='flex items-start font-roboto'>
                          <span className='text-blue-500 mr-2'>•</span>
                          Các dịch vụ công trực tuyến
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 - Chi tiết các cấp độ */}
            <div>
              <DescribeTitle title='Chi tiết cấp độ tài khoản định danh điện tử' />
              <div className='bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300'>
                <div className='space-y-8'>
                  {/* Cấp độ 1 */}
                  <div className='bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200'>
                    <div className='flex items-center mb-4'>
                      <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3'>
                        <span className='text-white font-bold text-sm'>1</span>
                      </div>
                      <h4 className='font-roboto text-gray-900 text-lg'>
                        Tài khoản định danh mức độ 1
                      </h4>
                    </div>

                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <p className='font-semibold text-gray-800 mb-3'>📋 Thông tin bao gồm:</p>
                        <ul className='list-disc list-inside space-y-2 text-gray-600'>
                          <li className='font-roboto'>Thông tin cá nhân</li>
                          <li className='font-roboto'>Số định danh cá nhân</li>
                          <li className='font-roboto'>Họ, chữ đệm và tên</li>
                          <li className='font-roboto'>Ngày tháng năm sinh</li>
                          <li className='font-roboto'>Giới tính</li>
                          <li className='font-roboto'>Ảnh chân dung</li>
                        </ul>
                      </div>

                      <div>
                        <p className='font-semibold text-gray-800 mb-3'>⏱️ Thời hạn cấp:</p>
                        <ul className='space-y-2 text-gray-600'>
                          <li className='font-roboto'>
                            • Có CCCD gắn chíp:{' '}
                            <span className='font-semibold'>1 ngày làm việc</span>
                          </li>
                          <li className='font-roboto'>
                            • Chưa có CCCD gắn chíp:{' '}
                            <span className='font-semibold'>7 ngày làm việc</span>
                          </li>
                        </ul>

                        <p className='font-semibold text-gray-800 mt-4 mb-2'>📝 Thủ tục đăng ký:</p>
                        <p className='text-gray-600 font-roboto'>
                          Đăng ký qua ứng dụng VNeID với thẻ CCCD gắn chíp
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Cấp độ 2 */}
                  <div className='bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200'>
                    <div className='flex items-center mb-4'>
                      <div className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3'>
                        <span className='text-white font-bold text-sm'>2</span>
                      </div>
                      <h4 className='font-roboto text-gray-900 text-lg'>
                        Tài khoản định danh mức độ 2
                      </h4>
                    </div>

                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <p className='font-semibold text-gray-800 mb-3'>📋 Thông tin bao gồm:</p>
                        <ul className='list-disc list-inside space-y-2 text-gray-600'>
                          <li className='font-roboto'>Thông tin cá nhân</li>
                          <li className='font-roboto'>Số định danh cá nhân</li>
                          <li className='font-roboto'>Họ, chữ đệm và tên</li>
                          <li className='font-roboto'>Ngày tháng năm sinh</li>
                          <li className='font-roboto'>Giới tính</li>
                          <li className='font-roboto'>
                            Ảnh chân dung <span className='font-semibold'>và Vân tay</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className='font-semibold text-gray-800 mb-3'>⏱️ Thời hạn cấp:</p>
                        <ul className='space-y-2 text-gray-600'>
                          <li className='font-roboto'>
                            • Có CCCD gắn chíp:{' '}
                            <span className='font-semibold'>3 ngày làm việc</span>
                          </li>
                          <li className='font-roboto'>
                            • Chưa có CCCD gắn chíp:{' '}
                            <span className='font-semibold'>7 ngày làm việc</span>
                          </li>
                        </ul>

                        <p className='font-semibold text-gray-800 mt-4 mb-2'>📝 Thủ tục đăng ký:</p>
                        <p className='text-gray-600 font-roboto'>
                          Trực tiếp đến Công an xã/phường/thị trấn
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* So sánh giá trị sử dụng */}
                  <div className='bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200'>
                    <h4 className='font-semibold text-gray-900 text-xl mb-4 flex items-center'>
                      <span className='text-purple-500 font-roboto mr-3'>⚖️</span>
                      So sánh giá trị sử dụng
                    </h4>

                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <p className='font-semibold text-blue-600 mb-3'>Mức độ 1:</p>
                        <ul className='list-disc list-inside space-y-2 text-gray-600'>
                          <li className='font-roboto'>Chứng minh thông tin cá nhân cơ bản</li>
                          <li className='font-roboto'>
                            Sử dụng trong giao dịch yêu cầu cung cấp thông tin
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className='font-semibold text-green-600 mb-3'>Mức độ 2:</p>
                        <ul className='list-disc list-inside space-y-2 text-gray-600'>
                          <li className='font-roboto'>Tương đương thẻ CCCD khi xuất trình</li>
                          <li className='font-roboto'>Giá trị như giấy tờ truyền thống</li>
                          <li className='font-roboto'>Sử dụng cho giao dịch điện tử quan trọng</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Lưu ý quan trọng */}
                  <div className='bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500'>
                    <div className='flex items-start'>
                      <span className='text-yellow-500 text-xl mr-3'>💡</span>
                      <div>
                        <p className='font-semibold text-yellow-800 mb-2'>Lưu ý quan trọng:</p>
                        <p className='text-yellow-700 font-roboto'>
                          Tài khoản định danh điện tử mức độ 1 và mức độ 2 có nhiều điểm khác biệt
                          quan trọng. Hy vọng với những thông tin mà chúng tôi đã tổng hợp sẽ giúp
                          cho bạn có thêm nhiều kiến thức bổ ích hội nhập trong thời đại số.
                        </p>
                        <p className='text-yellow-700 mt-2 font-semibold'>
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
        {/* Bộ giải pháp của HTC  */}
        <section className='py-16 px-4 md:px-8 '>
          <Solution />
        </section>
      </div>
      <CallToAction />
    </div>
  )
}

export default Index
