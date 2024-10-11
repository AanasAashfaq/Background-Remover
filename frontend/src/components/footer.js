import { Wand2 } from "lucide-react";
function Footer()
{
    return(
        <div className="bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-white">

        <footer className="bg-black bg-opacity-30 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-center">
          <Wand2 className="h-6 w-6 text-purple-400 mr-2" />
          <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            MagicEraser
          </span>
        </div>
      </footer>
        </div>
    );
}
export default Footer;