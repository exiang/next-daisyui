import {Image} from 'next/image'
import { useState } from "react";

// upload example: https://codesandbox.io/s/thyb0?file=/pages/index.js:708-712
export default function UploadImage(props) {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {
    
    const body = new FormData();

    const base64 = await convertToBase64(image);
    const base64Pure = base64.substring(base64.indexOf("base64,")+"base64,".length);
    body.append("base64", base64Pure);
    console.log('pure base64', base64Pure);

    // api doc: https://freeimage.host/page/api?lang=en
    // freeimage api will throw cors error if request from from client side, so i wrote a proxy code to map under http://misc.dlab.work/freeimage_proxy/api.php
    const response = await fetch("https://misc.dlab.work/freeimage_proxy/api.php", {
      method: "POST",
      body: body
    });
    const data = await response.json();
    setImageUrl(data.image.url)
  };

  const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
          resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
          reject(error);
      };
      });
  };

  return (
    <div>
      <div>
        <img src={createObjectURL} />
        <h4>Select Image</h4>
        <input type="file" name="myImage" onChange={uploadToClient} />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button>

        <p><a href="{imageUrl}">{imageUrl}</a></p>
      </div>
    </div>
  );
}
