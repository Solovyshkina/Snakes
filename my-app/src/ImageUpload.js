import React, { useState } from 'react';
import './ImageUpload.css';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Тут будет логика для обработки изображения
    alert('Фото загружено!');
  };

  return (
    <div className="upload-page">
        <div className="upload-container">
        <h1>Загрузите фото змеи</h1>
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Распознать</button>
        </form>
        </div>
    </div>
  );
};

export default ImageUpload;
