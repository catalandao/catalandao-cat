import BaseImage from 'next/image';


interface CaptionProps {
  caption: React.ReactText
}
const Caption = ({ caption }: CaptionProps) => (
  <figcaption className="text-lg lg:text-xl justify-center my-3 flex">{caption}</figcaption>
);

interface ImageProps {
  className?: string;
  reversed?: boolean;
  caption?: string;
  width?: React.ReactText;
  height?: React.ReactText;
  src: string;
}
const Image = ({ src, width, height, caption, reversed, className = '' }: ImageProps) => {
  return (
    <figure className={`${className} w-full`}>
      {reversed && caption && <Caption caption={caption} />}
      <div className="rounded-xl shadow-xl">
        {src && <BaseImage width={width} height={height} unoptimized src={src} alt={caption} layout="responsive" objectFit="cover" className="rounded-xl" />}
      </div>
      {!reversed && caption && <Caption caption={caption} />}
    </figure>
  );
};

export default Image;
