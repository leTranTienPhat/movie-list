const LoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="container mx-auto h-full flex justify-center items-center">{children}</div>;
};

export default LoginLayout;
