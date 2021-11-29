import useLogin from '@/lib/useLogin';

interface Props {
  children?: React.ReactNode;
  className?: string;
}
interface ButtonProps extends Props {
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
}
const Button = ({ children, onClick, className = '', disabled }: ButtonProps) => (
  <button onClick={onClick} disabled={disabled} className={`${className} px-5 py-2 text-white text-xl rounded-lg border-2 border-cyan-500 bg-blue-600 hover:bg-blue-700`}>{children}</button>
);

const Badge = ({ children, className = '' }: Props) => (
  <span className={`${className} px-5 py-2 text-white text-xl rounded-lg border-2 border-cyan-500 bg-blue-600 hover:bg-blue-700`}>{children}</span>
);

const Login = () => {
  const { activate, connected, verified, verify, disconnect } = useLogin();

  if (verified) {
    return <Button onClick={() => disconnect()}>Desconectar</Button>;
  }

  if (connected) {
    return (<Button onClick={() => verify()}>Verify?</Button>);
  }

  // ethereum?.getSigner(wallet.account).sign('hola')
  return <Button onClick={() => activate()}>connect</Button>;
};

export default Login;
