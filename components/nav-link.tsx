import NextLink from 'next/link';
import { ReactElement } from 'react';

/**
 * Navigation link component.
 *
 * @param props - Component props
 */
export const NavLink = (props: LinkProps): ReactElement => {
  const { href, children, ...rest } = props;

  return (
    <NextLink href={href}>
      <a className='nav-link' {...rest}>
        {children}
      </a>
    </NextLink>
  );
};
