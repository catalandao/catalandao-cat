interface Props {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className = '' }: Props) => (
  <h1 className={`${className} justify-center flex text-3xl lg:text-5xl my-8`}>{children}</h1>
);

export default Title;
