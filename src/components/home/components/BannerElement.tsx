
interface BannerProps {
    children: React.ReactNode;
    className?: string;
  }

export const BannerElement = ({ children }: BannerProps) => {
    return <div className="text-center">{children}</div>;
  };