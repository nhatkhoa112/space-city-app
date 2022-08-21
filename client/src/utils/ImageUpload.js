import React from 'react'
import axios from 'axios'



console.log(process.env.REACT_APP_CLOUDINARY_URL)

function ImageUploadField({ onChange, labelText, name, value }) {
  console.log(labelText, name, value)
  const handleUpload = async event => {

    const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL
    const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', uploadPreset)
    console.log(data)
    const res = await axios.post(uploadUrl, data)
    onChange({ target: { name, value: res.data.url } })
  }


  return (
    <>
      {value ?
        <div style={{ width: '300px' }}>
          <img src={value} alt="selected" style={{ width: '100%', height: 'auto' }} />
        </div>
        :
        <>
          <label>{labelText || 'Upload Image'}</label>
          <input

            type="file"
            onChange={handleUpload}
            name={name}
          />
        </>
      }
    </>
  )
}

export default ImageUploadField