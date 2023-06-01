import { useEffect } from 'react';

const BlockRightClickPage = () => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      window.alert("Hayo ngapain di klik kanan🤨");
    };
    
    window.addEventListener('contextmenu', handleContextMenu);
    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
    };
    
  }, []);
  
  return <div>
  </div>;
};

export default BlockRightClickPage;