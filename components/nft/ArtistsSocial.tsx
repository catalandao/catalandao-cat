import { LogoInstagram, LogoTwitter } from '@/styles/assets/svgs/logos';

interface Props {
  className?: string;
  website: string;
  twitter?: string;
  instagram: string;
}
const ArtistsSocial = ({ website, twitter, instagram, className = '' }: Props) => (
  <div className={`${className} space-y-6 pb-10`}>
    <p><a href={website} target="_blank" rel="noreferrer" className="underline underline-black"><span className="mr-2">🌎</span>{website}</a></p>
    <p>
      <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noreferrer" className="inline-flex items-center underline underline-black">
        <LogoInstagram className="w-5 h-5 mr-2" />{instagram}
      </a>
    </p>
    {twitter && (
      <p>
        <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noreferrer" className="inline-flex items-center underline underline-black">
          <LogoTwitter className="w-5 h-5 mr-2 fill-[#1d9bf0]" />{twitter}
        </a>
      </p>
    )}
  </div>
);

export default ArtistsSocial;
