import React, {useState} from "react";
import { Upload, Download, Trash2 } from "lucide-react";
import './spinner.css';



function Remover()
{
    const [selectedImage, setSelectedImage] = useState(null)
  const [processedImage, setProcessedImage] = useState(null)
    const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setSelectedImage(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = processedImage; // The processed image URL
    link.download = 'processed-image.png'; // Set the desired file name
    link.click(); // Programmatically click the link to trigger the download
};

  const handleRemoveBackground = async () => {
    // Placeholder for actual background removal API call
    console.log("Removing background...")
    setLoading(true);
    // Simulating API call with a timeout
    setTimeout(() => {
      setProcessedImage(selectedImage)
      setLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    setSelectedImage(null)
    setProcessedImage(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-white">

      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Remove Image Backgrounds with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              AI Magic
            </span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your images instantly with our cutting-edge AI technology.
            Perfect for e-commerce, design projects, and more!
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Try It Now
          </button>
        </section>

        <section className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Remove Background</h2>
          <div className="flex flex-col items-center space-y-6">
            <label htmlFor="imageUpload" className="w-full max-w-md">
              <div className="border-2 border-dashed border-purple-400 rounded-lg p-8 text-center cursor-pointer hover:bg-purple-900 hover:bg-opacity-20 transition-all duration-300">
                <Upload className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                <p className="text-lg">Click to upload or drag and drop</p>
                <p className="text-sm text-purple-300">PNG, JPG, WEBP up to 10MB</p>
              </div>
              <input
                id="imageUpload"
                type="file"
                className="hidden"
                onChange={handleImageUpload}
                accept="image/*"
              />
            </label>

            {selectedImage && (
              <div className="space-y-4 w-full max-w-md">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={handleRemoveBackground}
                    className="bg-gradient-to-r p-2 rounded-lg from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600"
                  >
                    Remove Background
                  </button>
                  <button variant="outline" className="border p-2 rounded-lg" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
        {loading && (
            <section className="flex justify-center items-center flex-col bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8">
          
            <div className="loader text-center"></div>
            </section>
        )

        }

        {processedImage && (
          <section className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Processed Image</h2>
            <div className="flex flex-col items-center space-y-6">
              <img
                src={processedImage}
                alt="Processed"
                className="w-full max-w-md h-64 object-cover rounded-lg"
              />
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r p-2 rounded-lg from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600"
                          onClick={handleDownload}
                >
                  <Download className="mr-2 h-4 w-4" /> Download
                </button>
                <button variant="outline" className="border rounded-lg p-2" onClick={() => setProcessedImage(null)}>
                  <Trash2 className="mr-2 h-4 w-4" /> Discard
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

    </div>
  )
}
export default Remover;