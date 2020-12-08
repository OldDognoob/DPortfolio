import { useEffect } from 'react';
import useLocalStorage from './use-local-storage';
import useMedia from './use-media';

function useDarkMode(){
    // we are using a localStorage hook to refresh the page by pushing the state through
    const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');
    // 
    const prefersDarkMode = usePrefersDarkMode();
    // we define the enabledState otherwise fallback to prefersDarkMode
    const enabled = typeof enabledState != 'undefined' ? enabledState : prefersDarkMode;

    // the fire of effect adds or remove the dark mode mood
    useEffect(
        () => {
          const className = 'dark-mode';
          const element = window.document.body;
          if (enabled) {
            element.classList.add(className);
          } else {
            element.classList.remove(className);
          }
        },
        [enabled] // Only re-call effect when value changes
      );
    
      // Return enabled state and setter
      return [enabled, setEnabledState];
    }

    function usePrefersDarkMode() {
        return useMedia(['(prefers-color-scheme: dark)'], [true], false);
      }
      
      export default useDarkMode;
      