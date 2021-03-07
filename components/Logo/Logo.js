import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`d-block ${className}`} {...rest}>
        {white ? (
          <Image
            quality="100"
            src="/assets/images/logo.svg"
            alt="AronWorks"
            width={200}
            height={40}
          />
        ) : (
          <Image
            quality="100"
            src="/assets/images/logo.svg"
            alt="AronWorks"
            width={200}
            height={40}
          />
        )}
      </a>
    </Link>
  );
};

export default Logo;
