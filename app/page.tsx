export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-500 p-4 font-mono">
      <div className="max-w-4xl mx-auto">
        {/* Terminal header */}
        <div className="border border-green-500 rounded-t-lg">
          <div className="bg-green-500 text-black px-2 py-1 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xs">Terminal - tanmai@web</span>
            </div>
            <div className="flex space-x-1">
              <span className="text-xs">─</span>
              <span className="text-xs">□</span>
              <span className="text-xs">×</span>
            </div>
          </div>
        </div>
        
        {/* Terminal content */}
        <div className="border-l border-r border-b border-green-500 rounded-b-lg p-4 min-h-[600px]">
          <div className="space-y-4">
            {/* ASCII Art Header */}
            <pre className="text-green-400 text-xs sm:text-sm">
{`╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  ████████╗ █████╗ ███╗   ██╗███╗   ███╗ █████╗ ██╗       ║
║  ╚══██╔══╝██╔══██╗████╗  ██║████╗ ████║██╔══██╗██║       ║
║     ██║   ███████║██╔██╗ ██║██╔████╔██║███████║██║       ║
║     ██║   ██╔══██║██║╚██╗██║██║╚██╔╝██║██╔══██║██║       ║
║     ██║   ██║  ██║██║ ╚████║██║ ╚═╝ ██║██║  ██║██║       ║
║     ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝       ║
║                                                            ║
║                    KALISIPUDI                              ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝`}
            </pre>

            {/* Command prompt info */}
            <div className="space-y-2">
              <div>
                <span className="text-green-300">$ </span>
                <span className="text-white">whoami</span>
              </div>
              <div className="pl-2 text-gray-300">
                Tanmai Kalisipudi - CS & Math @ UVA
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <span className="text-green-300">$ </span>
                <span className="text-white">cat about.txt</span>
              </div>
              <div className="pl-2 text-gray-300 space-y-2">
                <p>
                  Third year studying CS and Math at UVA. Previously graduated from{" "}
                  <a href="https://tjhsst.fcps.edu" target="_blank" rel="noopener noreferrer" 
                     className="text-cyan-400 hover:text-cyan-300 underline">
                    TJHSST
                  </a>.
                </p>
                <p>
                  Work experience: {" "}
                  <a href="https://cisco.com" target="_blank" rel="noopener noreferrer"
                     className="text-cyan-400 hover:text-cyan-300 underline">
                    Cisco
                  </a>, {" "}
                  <a href="https://lineaje.com" target="_blank" rel="noopener noreferrer"
                     className="text-cyan-400 hover:text-cyan-300 underline">
                    Lineaje
                  </a>, {" "}
                  <a href="https://suitable.co" target="_blank" rel="noopener noreferrer"
                     className="text-cyan-400 hover:text-cyan-300 underline">
                    Suitable
                  </a>
                </p>
                <p>
                  Founded {" "}
                  <a href="https://gradsteps.com" target="_blank" rel="noopener noreferrer"
                     className="text-cyan-400 hover:text-cyan-300 underline">
                    GradSteps
                  </a>
                  {" "}+ 28 other ventures (26 failed)
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <span className="text-green-300">$ </span>
                <span className="text-white">ls interests/</span>
              </div>
              <div className="pl-2 text-gray-300 grid grid-cols-2 sm:grid-cols-4 gap-2">
                <span className="text-yellow-400">artificial_intelligence/</span>
                <span className="text-yellow-400">startups/</span>
                <span className="text-yellow-400">economics/</span>
                <span className="text-yellow-400">politics/</span>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <span className="text-green-300">$ </span>
                <span className="text-white">contact --list</span>
              </div>
              <div className="pl-2 text-gray-300 space-y-1">
                <div>
                  <span className="text-green-400">[email]</span>{" "}
                  <a href="mailto:tanmai.kalisipudi@gmail.com" 
                     className="text-cyan-400 hover:text-cyan-300 underline">
                    tanmai.kalisipudi@gmail.com
                  </a>
                </div>
                <div>
                  <span className="text-green-400">[github]</span>{" "}
                  <a href="https://github.com/tanmaik" target="_blank" rel="noopener noreferrer"
                     className="text-cyan-400 hover:text-cyan-300 underline">
                    github.com/tanmaik
                  </a>
                </div>
                <div>
                  <span className="text-green-400">[linkedin]</span>{" "}
                  <a href="https://linkedin.com/in/tanmaikalisipudi" target="_blank" rel="noopener noreferrer"
                     className="text-cyan-400 hover:text-cyan-300 underline">
                    linkedin.com/in/tanmaikalisipudi
                  </a>
                </div>
                <div>
                  <span className="text-green-400">[huggingface]</span>{" "}
                  <a href="https://huggingface.co/tanmaik" target="_blank" rel="noopener noreferrer"
                     className="text-cyan-400 hover:text-cyan-300 underline">
                    huggingface.co/tanmaik
                  </a>
                </div>
              </div>
            </div>

            {/* Blinking cursor */}
            <div>
              <span className="text-green-300">$ </span>
              <span className="animate-pulse">█</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}