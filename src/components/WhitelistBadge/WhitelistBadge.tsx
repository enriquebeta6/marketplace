// Dependencies
import React from 'react';

// Style
import './WhitelistBadge.scss';

// Custom Hooks
import useFeatureFlags from '../../hooks/useFeatureFlags';

const WhitelistBadge: React.FC = () => {
  const {
    flags: { WHITELIST_ONLY },
  } = useFeatureFlags();

  if (!WHITELIST_ONLY) return null;

  return <span className='whitelist-badge'>WHITELIST MODE</span>;
};

export default WhitelistBadge;
