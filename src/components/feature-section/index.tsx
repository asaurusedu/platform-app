import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Fitur</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            Bagaimana kami menguasai pasar
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Personalisasi</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Setiap paket media telah dipersonalisai dengan karakteristik siswa dan mata pelajaran.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Kreator Terlisensi</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
              Seluruh mitra AsaurusEdu adalah kreator media yang berlisensi di bidang pendidikan.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Siap Analisis</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Evaluasi pembelajaran semakin mudah karena sistem analitik yang terintegrasi dengan AI.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Berorientasi Siswa</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Media yang dibuat berorientasi pada karakteristik siswa serta bersumber data dari real world experience.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Mendukung Berbagai Platform</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Asaurusedu dapat diakses melalui berbagai perangkat baik gawai maupun komputer jinjing.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Terjangkau</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Paket yang ada pada AsaurusEdu sangat terjangkau untuk guru maupun sekolah yang ingin menghadirkan media
              belajar yang berkualitas bagi siswa.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
