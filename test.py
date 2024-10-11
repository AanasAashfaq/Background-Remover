from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from PIL import Image
from model import process_image

app = Flask(__name__)
CORS(app)

# Directory to save uploaded images
UPLOAD_FOLDER = 'test-images'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

ALLOWED_EXTENSIONS = {'jpg', 'jpeg', 'png'}  # Define allowed file extensions

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload-image', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['image']
    
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    if file and allowed_file(file.filename):
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(file_path)  # Save image to test-images folder
        
        
        try:
            # Process the image to remove background
            res = process_image(file)
            return jsonify({"processedImage": res["processed_image"]}), 200
        except Exception as e:
            return jsonify({"error": f"Processing failed: {str(e)}"}), 500
    else:
        return jsonify({"error": "File type not allowed. Allowed types: jpg, jpeg, png"}), 400

if __name__ == "__main__":
    app.run(debug=True)
