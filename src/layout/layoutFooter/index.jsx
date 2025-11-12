import {Mail, Phone, MapPin, Facebook, Linkedin, Youtube} from 'lucide-react'
import LogoHtcSw from 'assets/logo/logo_sw.webp'

const LayoutFooter = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='bg-slate-900 text-slate-200'>
      <div className='mx-auto max-w-7xl px-6 py-12'>
        {/* Main Grid */}
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-12'>
          {/* Company Info - 4 cols */}
          <div className='lg:col-span-4 space-y-6'>
            <div className='flex items-center space-x-3'>
              <img src={LogoHtcSw} alt='HTC Software' loading='lazy' className='h-20 w-auto' />
            </div>
            <p className='text-sm leading-6 text-slate-300 max-w-md'>
              Công ty Cổ phần Giải pháp Phần mềm HTC — đối tác tin cậy về nền tảng eKYC, định danh
              và tích hợp hệ thống cho doanh nghiệp Việt Nam.
            </p>

            {/* Social Links */}
            <div className='flex space-x-4'>
              <a
                href='#top'
                aria-label='Facebook'
                className='p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors'
              >
                <Facebook className='h-5 w-5' />
              </a>
              <a
                href='#top'
                aria-label='LinkedIn'
                className='p-2 bg-slate-800 rounded-lg hover:bg-blue-700 transition-colors'
              >
                <Linkedin className='h-5 w-5' />
              </a>
              <a
                href='#top'
                aria-label='YouTube'
                className='p-2 bg-slate-800 rounded-lg hover:bg-red-600 transition-colors'
              >
                <Youtube className='h-5 w-5' />
              </a>
            </div>
          </div>

          {/* Solutions - 2 cols */}
          <div className='lg:col-span-2'>
            <h3 className='text-white font-semibold mb-6 text-lg'>Giải pháp</h3>
            <ul className='space-y-4 text-sm'>
              {[
                'Nền tảng eKYC',
                'Xác thực sinh trắc học',
                'SSO & Quản trị danh tính',
                'Kết nối & Chia sẻ dữ liệu',
                'Tư vấn tích hợp hệ thống',
                'Phát triển phần mềm',
              ].map(item => (
                <li key={item}>
                  <a href='#top' className='hover:text-white transition-colors hover:underline'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources - 2 cols */}
          <div className='lg:col-span-2'>
            <h3 className='text-white font-semibold mb-6 text-lg'>Tài nguyên</h3>
            <ul className='space-y-4 text-sm'>
              {[
                'Về chúng tôi',
                'Blog & Tin tức',
                'Tài liệu kỹ thuật',
                'Tuyển dụng',
                'Chính sách bảo mật',
                'Điều khoản sử dụng',
                'Hỗ trợ & Liên hệ',
                'SLA dịch vụ',
              ].map(item => (
                <li key={item}>
                  <a href='#top' className='hover:text-white transition-colors hover:underline'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - 4 cols */}
          <div className='lg:col-span-4'>
            <h3 className='text-white font-semibold mb-6 text-lg'>Liên hệ</h3>
            <div className='space-y-6'>
              {/* Contact Info */}
              <div className='space-y-4'>
                <div className='flex items-start space-x-3'>
                  <Mail className='h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0' />
                  <a
                    href='mailto:kinhdoanh@htcsoftware.vn'
                    className='hover:text-white transition-colors text-sm'
                  >
                    kinhdoanh@htcsoftware.vn
                  </a>
                </div>
                <div className='flex items-start space-x-3'>
                  <Phone className='h-5 w-5 text-green-400 mt-0.5 flex-shrink-0' />
                  <a href='tel:0848565555' className='hover:text-white transition-colors text-sm'>
                    084.856.5555
                  </a>
                </div>
              </div>

              {/* Office Addresses */}
              <div className='space-y-4'>
                <div className='flex items-start space-x-3'>
                  <MapPin className='h-5 w-5 text-red-400 mt-0.5 flex-shrink-0' />
                  <div>
                    <p className='text-white font-medium text-sm mb-1'>Văn phòng giao dịch</p>
                    <p className='text-sm text-slate-300'>
                      Tầng 4, Tòa Monaco, Ngách 6 ngõ 118 Nguyễn Khánh Toàn, Phường Nghĩa Đô, TP. Hà
                      Nội
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-3'>
                  <MapPin className='h-5 w-5 text-red-400 mt-0.5 flex-shrink-0' />
                  <div>
                    <p className='text-white font-medium text-sm mb-1'>Trụ sở chính</p>
                    <p className='text-sm text-slate-300'>
                      Số 15, Ngõ 29 phố Khương Hạ, Phường Khương Đình, TP. Hà Nội
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='mt-12 pt-8 border-t border-slate-700'>
          <div className='flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0'>
            <p className='text-sm text-slate-400 text-center lg:text-left'>
              © {year} Công ty Cổ phần Giải pháp Phần mềm HTC. Mã số DN: 0103925078
            </p>
            <div className='flex space-x-6 text-sm'>
              <a href='#top' className='text-slate-400 hover:text-white transition-colors'>
                Bảo mật
              </a>
              <a href='#top' className='text-slate-400 hover:text-white transition-colors'>
                Điều khoản
              </a>
              <a href='#top' className='text-slate-400 hover:text-white transition-colors'>
                Lên đầu trang
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default LayoutFooter
