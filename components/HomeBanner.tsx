import { HomeHeaderBanner } from '@/styles/assets/svgs/logos';

interface Props {
  className?: string;
}
const HomeBanner = ({ className = '' }: Props) => (
  <div className={`${className} max-w-screen max-h-auto`}>
    <HomeHeaderBanner className="h-60 lg:h-auto flex flex-grow flex-1 w-full" />
  </div>
);

export default HomeBanner;
