import { useState } from "react";
import { Highlight } from "prism-react-renderer";
import { Copy, Check, Code, Eye } from "lucide-react";

export default function PreviewComponent({ title, code, language = "jsx", children }) {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 border rounded-lg shadow-md bg-white mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>

      {/* Tabs */}
      <div className="flex border-b">
        {[{ label: "Preview", value: "preview", icon: <Eye size={18} /> },
          { label: "Code", value: "code", icon: <Code size={18} /> },
        ].map(({ label, value, icon }) => (
          <button
            key={value}
            className={`flex-1 py-2 flex items-center justify-center gap-2 text-sm font-medium transition-all ${
              activeTab === value ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
            }`}
            onClick={() => setActiveTab(value)}
          >
            {icon} {label}
          </button>
        ))}
      </div>

      {/* Preview / Code */}
      <div className="p-4 mt-3 relative">
        {activeTab === "preview" ? (
          <div className="flex flex-wrap justify-center gap-4 w-full">{children}</div>
        ) : (
          <div className="relative">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm flex items-center gap-1 hover:bg-gray-300"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied!" : "Copy"}
            </button>

            {/* Code Block - White Theme */}
            <Highlight code={code.trim()} language={language}>
              {({ tokens, getLineProps, getTokenProps }) => (
                <pre className="p-4 rounded-md overflow-auto text-sm leading-relaxed bg-white text-gray-800 border border-gray-200">
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })} className="whitespace-pre-wrap">
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} className="text-blue-600" />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        )}
      </div>
    </div>
  );
}
