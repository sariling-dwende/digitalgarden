from PIL import Image
import os

for filename in os.listdir():
    if filename.endswith((".jpeg", ".png")):  # Process JPGs and PNGs
        try:
            img = Image.open(filename)
            resized_img = img.resize((2560, 1440)) 
            resized_img.save(f"{filename}")  
        except IOError:
            print(f"Error processing {filename}")
