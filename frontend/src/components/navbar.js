import { Wand2 } from "lucide-react";
function Navbar()
{
    return(
        <div className="bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-white">
              <nav className="bg-black bg-opacity-30 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wand2 className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              MagicEraser
            </span>
          </div>
        </div>
      </nav>
        </div>
    );
}
export default Navbar;