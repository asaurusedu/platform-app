import { tw, css } from 'twind/css';
import Button from '@/components/button';
import { PopupButton } from '@typeform/embed-react';

const headerStyle = css`
  background-color: #ffffff;
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-7xl text-center leading-snug text-gray-800`)}>
        Membuat media pembelajaran dengan artificial intelligence
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Media dengan pendekatan karakteristik dan gaya belajar yang dipersonalisasi.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <PopupButton
          id="EIfs6cUG"
          style={{ fontSize: 20 }}
          className={tw(
            `font-sans font-medium py-2 px-4 border rounded bg-blue-600 text-white border-blue-500 hover:bg-blue-700`,
          )}
        >
          Buat Media
        </PopupButton>
        <span className={tw(`mx-2`)}>or</span>
        <Button>Hubungi Kami</Button>
      </div>
    </div>
  </header>
);

export default Header;
