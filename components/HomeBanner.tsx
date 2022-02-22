import { HomeHeaderBanner } from '@/styles/assets/svgs/logos';

interface Props {
  className?: string;
}
const HomeBanner = ({ className = '' }: Props) => (
  <div className={`${className} max-w-screen max-h-auto`}>

  </div>
);

export default HomeBanner;
