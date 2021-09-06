import { tw } from 'twind';

const articles = [
  {
    title: `Video`,
    image: `/images/case-1.webp`,
    alt: `Cocok untuk kalian yang memiliki karakteristik kinestetik,
    audio maupun visual, dan juga dapat dipercepat dan diperlambat`,
  },
  {
    title: `Literasi`,
    image: `/images/case-2.webp`,
    alt: `Cocok untuk kalian yang memiliki karakteristik literasi 
    dan keingin tahuan referensi yang tinggi, dan juga dapat menyesuaikan dengan kecepatan berpikir`,
  },
  {
    title: `Audio`,
    image: `/images/case-3.webp`,
    alt: `Cocok untuk kalian yang memiliki karakteristik visual
    yang tinggi, dan juga dapat mengonstruk pengetahuan melalui poin-poin konsep yang disajikan`,
  },
];

const CasesSection = () => (
  <section>
    <div className={tw(`w-full min-h-screen bg-blue-500 relative`)}>
      <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)} />
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
        <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>Sumber Belajar Siswa</h1>
        <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>
          Cek sumber belajar siswa yang untuk siswa anda sebelum mengajar
        </p>
        <div className={tw(`mx-auto pt-24`)}>
          <div className={tw(`w-full flex flex-wrap justify-around`)}>
            {articles.map((article) => (
              <div
                key={article.title}
                className={tw(
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`,
                )}
              >
                <div className={tw(`h-64 z-20`)}>
                  <img
                    src={article.image}
                    alt={article.alt}
                    className={tw(`h-full w-full object-cover overflow-hidden rounded`)}
                    width={400}
                    height={300}
                  />
                </div>
                <div className={tw(`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                  <p className={tw(`uppercase text-gray-700 text-center pb-1 font-bold text-2xl`)}>{article.title}</p>
                  <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{article.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
