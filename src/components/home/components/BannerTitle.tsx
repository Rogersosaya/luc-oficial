import classNames from "classnames";

interface BannerTitleProps {
    children: React.ReactNode;
    className?: string;
  }
export const BannerTitle = ({ children, className }: BannerTitleProps) => {
    return (
      <h1
        className={classNames(
          "text-white my-6 text-6xl md:text-8xl",
          className
        )}
      >
        {children}
      </h1>
    );
  };