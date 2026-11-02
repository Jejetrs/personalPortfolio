import { useEffect } from 'react';
import { showProjectCategory } from './aiml.js';

export default function useAiMlBehavior() {
  useEffect(() => {
    showProjectCategory('aiml');
  }, []);
}
