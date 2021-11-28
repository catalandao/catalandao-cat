import useLogin from "@/lib/useLogin";

const Wallet = () => {
  const { verified, address } = useLogin();

  if (!verified) {
    return null;
  }

  return (
    <div className="fixed bottom-2 right-2 p-2 rounded-xl bg-blue-200 inline-flex text-xs lg:text-xl">
      <span className="mx-2">Connectat com:</span>
      <span className="truncate cursor-pointer max-w-24 hover:max-w-120 transition-all ease-in duration-100">{address}</span>
    </div>
  );
};

export default Wallet;
