import { useEffect } from 'react';
import { mountWorkExperience } from './work.js';
import { switchInaprocTab } from './workTabs.js';

/** Boots the experience page widgets (company switcher, training panels, galleries, viewers). */
export default function useWorkBehavior() {
  useEffect(() => {
    const unmount = mountWorkExperience();
    switchInaprocTab('overview');
    return unmount;
  }, []);
}
