"use client"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useRouter } from "next/navigation";
import { addBook } from '@/services/BookService';
import axios from 'axios';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const NewBook = ({ categories }) => {
    const router = useRouter();
    const [files, setFiles] = useState([]);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [published, setPublished] = useState("");
    const [description, setDescription] = useState("");
    const [pages, setPages] = useState("");
    const [image, setImage] = useState("");
    const [prix, setPrice] = useState("");
    const [nomcategorie, setNomCategorie] = useState("");
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === true) {
            const newBook = {
                title,
                author,
                published,
                description,
                pages,
                image,
                prix,
                nomcategorie
            };
            // Add to database
            addBook(newBook)
                .then(res => {
                    router.push('/admin/products')
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
                        setImage(data.url);
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
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h2>Ajout Livre</h2>
                <div className="container w-100 d-flex justify-content-center">
                    <div>
                        <div className='form mt-3'>
                            <Row className="mb-2">
                                <Form.Group as={Col} md="6" >
                                    <Form.Label >Titre *</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Titre"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Saisir le titre du livre
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Auteur *</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Auteur"
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Saisir l'auteur du livre
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-2">
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Date de publication *</Form.Label>
                                    <Form.Control
                                        required
                                        type="date"
                                        value={published}
                                        onChange={(e) => setPublished(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Saisir la date de publication
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Description *</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Saisir la description du livre
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-2">
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Pages *</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="Pages"
                                        value={pages}
                                        onChange={(e) => setPages(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Saisir le nombre de pages
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Prix *</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="Prix"
                                        value={prix}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Saisir le prix du livre
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Image</Form.Label>
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
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Catégorie</Form.Label>
                                    <Form.Control
                                        as="select"
                                        type="select"
                                        value={nomcategorie}
                                        onChange={(e) => setNomCategorie(e.target.value)}
                                    >
                                        <option></option>
                                        {categories.map((cat) => <option key={cat._id}
                                            value={cat._id}>{cat.nomcategorie}</option>
                                        )}
                                    </Form.Control>
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

export default NewBook;
