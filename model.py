from transformers import pipeline
from PIL import Image
import requests
from io import BytesIO
import torch
from IPython.display import display

#Check if GPU is available and set the device accordingly
device = 0 if torch.cuda.is_available() else -1

# Load the model pipeline and pass the device argument
pipe = pipeline("image-segmentation", model="briaai/RMBG-1.4", trust_remote_code=True, device=device)

# # Example image URL
# #image_url = "https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg"
# image_url = "https://farm5.staticflickr.com/4007/4322154488_997e69e4cf_z.jpg"
# # image_url = "https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg"

# # Load the image from URL
# response = requests.get(image_url)
# img = Image.open(BytesIO(response.content))

# # Perform background removal and return the mask and the processed image


# # Display the original mask and the processed image
# print("Displaying the mask (background removed):")
# # display(pillow_mask)  # Show the mask

# print("Displaying the processed image:")
# # display(pillow_image)  # Show the image with the background removed



def process_image(file):
    img = Image.open(file.stream)  # Open the image
    pillow_mask = pipe(img, return_mask=True)  # Get the mask
    pillow_image = pipe(img)  # Get the masked image

    # Here you can  perform any processing on the image
    pillow_image.show()  # This will display the image
    # You might want to save or modify the image
    return {"message": "Image processed successfully!"}  # Return a response