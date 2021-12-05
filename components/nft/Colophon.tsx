import { RRow } from './Layout';


interface Props {
  children: React.ReactNode;
  className?: string;
}
const Colophon = ({ children, className = '' }: Props) => (
  <RRow className={`${className} shadow-xl mx-auto p-10 bg-[#FF4242] box-sixing rounded-xl bg-opacity-25`}>
    {children}
  </RRow>
);

export default Colophon;
