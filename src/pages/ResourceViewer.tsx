// components/ResourceViewer.tsx
import { Card } from "../components/ui/card";
import { Download, FileText } from "lucide-react";

interface Props {
  title: string;
  description: string;
  fileId: string;
}

export function ResourceViewer({ title, description, fileId }: Props) {
  const handleDoubleClick = () => {
    window.open(
      `https://drive.google.com/file/d/${fileId}/preview`,
      "_blank"
    );
  };

  return (
    <Card 
      onDoubleClick={handleDoubleClick}
      className="p-6 bg-white cursor-pointer hover:shadow-lg transition-shadow group"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="w-12 h-12 rounded-lg bg-[#ECF3E6] flex items-center justify-center flex-shrink-0">
          <FileText className="w-6 h-6 text-[#134C28]" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-[#134C28] mb-1 line-clamp-2 group-hover:text-[#0f3f21] transition">
            {title}
          </h3>
          <p className="text-sm text-[#628B35] line-clamp-2">
            {description}
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Double-click to preview
          </p>
        </div>

        {/* Download Button */}
        <a
          href={`https://drive.google.com/uc?export=download&id=${fileId}`}
          onClick={(e) => e.stopPropagation()}
          className="w-10 h-10 rounded-lg bg-[#628B35] text-white flex items-center justify-center hover:bg-[#4a6428] transition flex-shrink-0"
          title="Download"
        >
          <Download className="w-5 h-5" />
        </a>
      </div>
    </Card>
  );
}
