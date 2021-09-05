import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="AsaurusEdu Platform"
        description="Layanan pembuatan media pembelajaran dengan pendekatan karakteristik siswa."
      />
      <Header />

      <main>
        <ListSection />
        <FeatureSection />
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
