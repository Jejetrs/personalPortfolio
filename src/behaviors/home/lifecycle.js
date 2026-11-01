/**
 * Tracks everything an imperative behaviour module attaches outside of React's tree
 * (global listeners, nodes appended to <body>, observers, timers) so it can be undone on unmount.
 */
export function createScope() {
  const disposers = [];
  return {
    on(target, type, handler, options) {
      target.addEventListener(type, handler, options);
      disposers.push(() => target.removeEventListener(type, handler, options));
    },
    append(parent, node) {
      parent.appendChild(node);
      disposers.push(() => node.remove());
      return node;
    },
    observer(instance) {
      disposers.push(() => instance.disconnect());
      return instance;
    },
    add(dispose) {
      disposers.push(dispose);
    },
    dispose() {
      while (disposers.length) disposers.pop()();
    },
  };
}
