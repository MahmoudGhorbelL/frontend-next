"use client";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useRouter } from "next/navigation";
import { addCategorie } from '@/services/CategorieService';
import axios from 'axios';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const NewCategorie = ({}) => {
    const router = useRouter();
    const [files, setFiles] = useState([]);
    const [imagecategorie, setImagecategorie] = useState("");
    const [nomcategorie, setNomCategorie] = useState("");
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === true) {
            const newCategorie = {
                imagecategorie,
                nomcategorie
            };
            // Add to database
            addCategorie(newCategorie)
                .then(res => {
                    router.push('/admin/categories')
                    router.refresh();
                })
                .catch(error => {
                    alert("Erreur ! Insertion non effectuée");
                });
        }
        setValidated(true);
    };

    const serverOptions = () => {
        return {
            process: (fieldName, file, metadata, load, error, progress, abort) => {
                const data = new FormData();
                data.append('file', file);
                data.append('upload_preset', 'dqrbo1nq9');
                data.append('cloud_name', 'dqrbo1nq9');
                data.append('public_id', file.name);
                axios.post('https://api.cloudinary.com/v1_1/dqrbo1nq9/image/upload', data)
                    .then((response) => response.data)
                    .then((data) => {
                        setImagecategorie(data.url);
                        load(data);
                    })
                    .catch((error) => {
                        console.error('Error uploading file:', error);
                        error('Upload failed');
                        abort();
                    });
            },
        };
    };

    return (
        <div>
            <style jsx>{`
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f9;
                    color: #333;
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                .container {
                    max-width: 900px;
                    margin: 50px auto;
                    padding: 20px;
                    background-color: #fff;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                }

                h2 {
                    text-align: center;
                    margin-bottom: 20px;
                    color: #5a5a5a;
                }

                .form {
                    width: 100%;
                }

                .mb-3 {
                    margin-bottom: 1rem !important;
                }

                .form-label {
                    display: block;
                    font-weight: 500;
                    margin-bottom: 5px;
                }

                .form-control {
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 10px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                }

                .btn {
                    display: inline-block;
                    padding: 10px 20px;
                    font-size: 16px;
                    border-radius: 5px;
                    text-align: center;
                    text-decoration: none;
                    transition: background-color 0.3s;
                }

                .btn-primary {
                    background-color: #007bff;
                    border: none;
                    color: white;
                }

                .btn-primary:hover {
                    background-color: #0056b3;
                }

                .btn-warning {
                    background-color: #ffc107;
                    border: none;
                    color: white;
                }

                .btn-warning:hover {
                    background-color: #e0a800;
                }

                .filepond--root {
                    width: 100% !important;
                    margin-bottom: 10px;
                }

                .filepond--drop-label {
                    color: #4c4e53;
                }

                .filepond--label-action {
                    text-decoration-color: #babdc0;
                }

                .filepond--panel-root {
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .filepond--item-panel {
                    background-color: #f4f4f9;
                }

                .filepond--file-action-button {
                    background-color: #007bff;
                    color: white;
                }

                .filepond--file-action-button:hover {
                    background-color: #0056b3;
                }
            `}</style>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h2>Ajout Livre</h2>
                <div className="container w-100 d-flex justify-content-center">
                    <div>
                        <div className='form mt-3'>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Image Categorie</Form.Label>
                                    <div style={{ width: "80%", margin: "auto", padding: "1%" }}>
                                        <FilePond
                                            files={files}
                                            acceptedFileTypes="image/*"
                                            onupdatefiles={setFiles}
                                            allowMultiple={false}
                                            server={serverOptions()}
                                            name="file"
                                        />
                                    </div>
                                    <Form.Control
                                        type="text"
                                        placeholder="Image"
                                        value={imagecategorie}
                                        onChange={(e) => setImagecategorie(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Catégorie</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="nom de catégorie"
                                        value={nomcategorie}
                                        onChange={(e) => setNomCategorie(e.target.value)}
                                    />
                                </Form.Group>
                            </Row>
                        </div>
                    </div>
                </div>
                <Button type="submit">Enregistrer</Button>
                <Button type="button" className="btn btn-warning" onClick={() => handleReset()}>Annuler</Button>
            </Form>
        </div>
    );
};

export default NewCategorie;
