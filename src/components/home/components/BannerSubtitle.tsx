import classNames from "classnames";

interface BannerSubtitleProps {
    children: React.ReactNode;
    className?: string;
  }
  

export const BannerSubtitle = ({ children, className }: BannerSubtitleProps) => {
    return (
      <p
        className={classNames(
          "mb-12 text-lg text-primary-text md:text-xl",
          className
        )}
      >
        {children}
      </p>
    );
  };