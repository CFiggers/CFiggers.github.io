/** @jsx jsx */
import React from 'react';
import { Styled, jsx, Box } from 'theme-ui';

import ReferredBlock from '../../../node_modules/gatsby-theme-andy/src/components/ReferredBlock';

const Footer = ({ references }) => {
  return (
    <Box p={3} sx={{ borderRadius: 2 }} mb={2} bg="accent" color="text-light">
      <ReferredBlock references={references} />
      <p sx={{ m: 0, fontSize: 1 }}>
      I'd love to hear from you! You can {' '}
        <Styled.a
          sx={{ textDecoration: 'underline', color: 'text-light' }}
          href="https://twitter.com/messages/compose?recipient_id=1236760268727889921"
        >
          direct message me
        </Styled.a>{' '}
        on Twitter or {' '}
        <Styled.a sx={{ textDecoration: 'underline', color: 'text-light' }} href="mailto:cdfiggers@gmail.com">
          email me
        </Styled.a>{' '}
        any time.{' '}
        <Styled.a 
          sx={{ textDecoration: 'underline', color: 'text-light' }} href="https://ko-fi.com/calebfiggers">
          Support me on Ko-fi {'<3'}
        </Styled.a>{''}
      </p>
    </Box>
  );
};

export default Footer;
