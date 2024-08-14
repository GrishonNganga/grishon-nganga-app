type CategoryLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: CategoryLayoutProps) {
  return <main>{children}</main>;
}
