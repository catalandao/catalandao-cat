
interface Props {
  className?: string;
  children: React.ReactNode;
}

const Hero = ({ children, className = '' }: Props) => (
  <div className={`${className} overflow-y-hidden max-h-xl max-w-6xl flex`}>{children}</div>
);

export default Hero;
