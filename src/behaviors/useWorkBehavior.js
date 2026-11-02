import { useEffect } from 'react';
import { mountWorkExperience } from './work.js';
import { switchInaprocTab } from './workTabs.js';

export default function useWorkBehavior() {
  useEffect(() => {
    const unmount = mountWorkExperience();
    switchInaprocTab('overview');
    return unmount;
  }, []);
}
