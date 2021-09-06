import { tw, css } from 'twind/css';
import Page from '@/components/page';
import Check from '@/constants/svg/check.svg';
import CasesSection from '@/components/cases-section';

const headerStyle = css`
  background-color: #ffffff;
`;

export default function Aw83qed() {
  return (
    <Page>
      <header className={tw(headerStyle)}>
        <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-2`)}>
          <h1
            className={tw(
              `font-sans font-bold text-4xl md:text-5xl lg:text-7xl text-center leading-snug text-gray-800`,
            )}
          >
            Ilmu Pengetahuan Alam
          </h1>
          <div className={tw(`mx-auto`)}>
            <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
              Karakteristik Materi, Unsur, Senyawa, dan Campuran
            </p>
          </div>
        </div>
      </header>
      <main>
        <section className={tw(`lg:py-28 pt-28 overflow-hidden bg-blue-100`)}>
          <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
            <div className={tw(`mb-16 text-center`)}>
              <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Panduan Guru</h2>
              <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
                Rekomendasi Kegiatan Pembelajaran
              </p>
              <iframe
                className={tw(`mx-auto p-4 sm:p-6 lg:p-8`)}
                title="rpp"
                src="https://drive.google.com/file/d/17tVHUSf0zuL_sFGvzrxTtBezSO_1aTPT/preview"
                width="1280"
                height="720"
                allow="autoplay"
              />
            </div>
          </div>
        </section>
        <section className={tw(`lg:py-28 pt-28 overflow-hidden bg-blue-300`)}>
          <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
            <div className={tw(`mb-16 text-center`)}>
              <h2 className={tw(`text-base text-blue-800 font-semibold tracking-wide uppercase`)}>Panduan Guru</h2>
              <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
                Rekomendasi Kegiatan Pembelajaran
              </p>
              <iframe
                className={tw(`mx-auto p-4 sm:p-6 lg:p-8`)}
                title="crafting"
                src="https://docs.google.com/presentation/d/e/2PACX-1vSkJ5oRgJ05bVEuL27BjsHiaq7QS9XGgmv_G-EiZKOCgCNw-FoSWM4YF2bZl5Ccjg/embed?start=false&loop=false&delayms=30000"
                frameBorder="0"
                width="1280"
                height="720"
              />
            </div>
          </div>
        </section>
        <CasesSection />
        <section className={tw(`bg-white pb-6 min-h-screen pt-24`)}>
          <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
            <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
              <div className={tw(`mb-16 text-center`)}>
                <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>
                  Evaluasi Belajar
                </h4>
                <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
                  Statistik Pembelajaran Siswa
                </p>
              </div>
              <div className={tw(`flex flex-wrap my-12`)}>
                <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
                  <div className={tw(`flex items-center mb-6`)}>
                    <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
                    <div className={tw(`ml-4 text-xl`)}>Rata - rata durasi belajar</div>
                  </div>
                  <p className={tw(`leading-loose text-gray-500`)}>
                    Durasi rata - rata siswa dalam belajar di portal ini adalah 2 Jam 10 Menit
                  </p>
                </div>
                <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
                  <div className={tw(`flex items-center mb-6`)}>
                    <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
                    <div className={tw(`ml-4 text-xl`)}>Media Favorit</div>
                  </div>
                  <p className={tw(`leading-loose text-gray-500 `)}>
                    Media yang mendapat umpan balik positif dari siswa adalah video dan literasi
                  </p>
                </div>
                <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
                  <div className="flex items-center mb-6">
                    <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
                    <div className={tw(`ml-4 text-xl`)}>Tes Formatif</div>
                  </div>
                  <p className={tw(`leading-loose text-gray-500`)}>20 siswa telah melaksanakan tes formatif</p>
                </div>
                <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
                  <div className={tw(`flex items-center mb-6`)}>
                    <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
                    <div className={tw(`ml-4 text-xl`)}>Hasil Evaluasi</div>
                  </div>
                  <p className={tw(`leading-loose text-gray-500`)}>
                    30 Siswa merasa belajar dengan baik dan memiliki pemahaman yang cukup baik.
                  </p>
                </div>
                <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
                  <div className={tw(`flex items-center mb-6`)}>
                    <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
                    <div className={tw(`ml-4 text-xl`)}>Rata - rata nilai</div>
                  </div>
                  <p className={tw(`leading-loose text-gray-500`)}>
                    Hasil evaluasi siswa mendapatkan nilai dengan rata - rata sebesar 83
                  </p>
                </div>
                <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
                  <div className={tw(`flex items-center mb-6`)}>
                    <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
                    <div className={tw(`ml-4 text-xl`)}>Tingkat Kesulitan Materi</div>
                  </div>
                  <p className={tw(`leading-loose text-gray-500`)}>
                    2 Siswa merasa kesulitan dalam memahami materi yang disediakan pada platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Page>
  );
}
