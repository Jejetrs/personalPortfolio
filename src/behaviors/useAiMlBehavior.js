import { useEffect } from 'react';
import { showProjectCategory } from './aiml.js';

/** Shows the AI/ML category when the page mounts. */
export default function useAiMlBehavior() {
  useEffect(() => {
    showProjectCategory('aiml');
  }, []);
}
