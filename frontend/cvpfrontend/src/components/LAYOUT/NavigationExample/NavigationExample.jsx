import React, { useState, useEffect } from 'react';
import './NavigationExample.scss'
import useSticky from '../../hooks/useScroll';
import classNames from "classnames";

export default function NavigationExample() {
    const { sticky, stickyRef } = useSticky();
  return (
    <>
      <nav ref={stickyRef} className={classNames('nav', { sticky })}>
        Sticky nav
      </nav>
    </>
  );
}
