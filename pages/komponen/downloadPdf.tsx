import React from 'react';
import Link from 'next/link';

const DownloadPdf = () => {
  const handleDownload = () => {
    const fileUrl = '/ppt-mikrotik.pptx';
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'ppt-mikrotik.pptx';
    a.click();
  };

  return (
    <div>
      <Link href="/ppt-mikrotik.pptx" download>
      <p>Here</p>
      </Link>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default DownloadPdf;
