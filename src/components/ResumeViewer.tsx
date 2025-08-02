import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, Eye, X, ZoomIn, ZoomOut } from 'lucide-react';
// We'll use the PDF from the public folder for iframe access
const resumePdf = '/src/assets/batta_chaitanyakishore.pdf';

interface ResumeViewerProps {
  children: React.ReactNode;
}

const ResumeViewer = ({ children }: ResumeViewerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Chaitanya_Kishore_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.6));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full h-[90vh] p-0">
        <DialogHeader className="p-4 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">My Resume</DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleZoomOut}
                disabled={zoom <= 0.6}
              >
                <ZoomOut size={16} />
              </Button>
              <span className="text-sm text-muted-foreground min-w-[60px] text-center">
                {Math.round(zoom * 100)}%
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleZoomIn}
                disabled={zoom >= 2}
              >
                <ZoomIn size={16} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownload}
                className="ml-2"
              >
                <Download size={16} className="mr-1" />
                Download
              </Button>
            </div>
          </div>
        </DialogHeader>
        
        <div className="flex-1 overflow-auto p-4">
          <div className="flex justify-center">
            <div 
              style={{ 
                transform: `scale(${zoom})`,
                transformOrigin: 'top center',
                transition: 'transform 0.2s ease-in-out'
              }}
            >
              <iframe
                src={`${resumePdf}#toolbar=0&navpanes=0&scrollbar=0`}
                width="800"
                height="1100"
                className="border border-border rounded-lg shadow-lg"
                title="Resume PDF Viewer"
              />
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t bg-muted/30">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Chaitanya Kishore - Resume</span>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownload}
              >
                <Download size={16} className="mr-1" />
                Download PDF
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                <X size={16} className="mr-1" />
                Close
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeViewer;