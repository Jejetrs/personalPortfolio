/* Tab switchers for the experience case studies. */

export function switchInaprocTab(tabId) {
    const tabs = ['overview', 'ws1', 'ws2', 'ws3', 'metrics'];
    tabs.forEach(t => {
      const btn = document.getElementById(`tab-btn-${t}`);
      const content = document.getElementById(`content-${t}`);
      if (btn && content) {
        if (t === tabId) {
          btn.classList.add('bg-surface-container-lowest', 'text-primary', 'shadow-sm', 'font-semibold');
          btn.classList.remove('text-on-surface-variant', 'font-medium');
          content.classList.remove('hidden');
        } else {
          btn.classList.remove('bg-surface-container-lowest', 'text-primary', 'shadow-sm', 'font-semibold');
          btn.classList.add('text-on-surface-variant', 'font-medium');
          content.classList.add('hidden');
        }
      }
    });
  }

  

export function switchDbsTab(tabId) {
    const tabs = ['activities', 'scope', 'journey', 'retro'];
    tabs.forEach(t => {
      const btn = document.getElementById(`tab-btn-dbs-${t}`);
      const content = document.getElementById(`content-dbs-${t}`);
      if (btn && content) {
        if (t === tabId) {
          btn.classList.add('bg-surface-container-lowest', 'text-primary', 'shadow-sm', 'font-semibold');
          btn.classList.remove('text-on-surface-variant', 'font-medium');
          content.classList.remove('hidden');
        } else {
          btn.classList.remove('bg-surface-container-lowest', 'text-primary', 'shadow-sm', 'font-semibold');
          btn.classList.add('text-on-surface-variant', 'font-medium');
          content.classList.add('hidden');
        }
      }
    });
  }
