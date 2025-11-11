import { useEffect } from 'react';

export const useDisableCopyPaste = (isEnabled: boolean = true) => {
  useEffect(() => {
    if (!isEnabled) return;

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    const handlePaste = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    const handleCut = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    const handleSelectStart = (e: Event) => {
      e.preventDefault();
    };

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    const originalUserSelect = document.body.style.userSelect;
    document.body.style.userSelect = 'none';

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('paste', handlePaste);
    document.addEventListener('cut', handleCut);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('paste', handlePaste);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);

      document.body.style.userSelect = originalUserSelect;
    };
  }, [isEnabled]);
};