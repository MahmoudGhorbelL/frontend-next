"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

import InputGroup from 'react-bootstrap/InputGroup';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { editBook } from "@/services/BookService";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const UpdateBook = ({ book, categories }) => {
    const [files, setFiles] = useState([]);
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [published, setPublished] = useState("");
    const [description, setDescription] = useState("");
    const [pages, setPages] = useState("");
    const [image, setImage] = useState("");
    const [prix, setPrix] = useState("");
    const [nomcategorie, setNomcategorie] = useState("");
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        setTitle(book.title);
        setAuthor(book.author);
        setPublished(book.published);
        setDescription(book.description);
        setPages(book.pages);
        setImage(book.image);
        setPrix(book.prix);
        setNomcategorie(book.nomcategorie);
        setFiles([
            {
                source: book.image,
                options: { type: 'local' }
            }
        ]);
    }, [book]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            const bookEdited = {
                _id: book._id,
                title,
                author,
                published,
                description,
                pages,
                image,
                prix,
                nomcategorie
            };
            await editBook(bookEdited)
                .then(() => {
                    router.push("/admin/products");
                    router.refresh();
                })
                .catch(() => {
                    alert("Erreur ! Modification non effectuée");
                });
        }
        setValidated(true);
    };

    const serverOptions = {
        load: (source, load, error, progress, abort, headers) => {
            var myRequest = new Request(source);
            fetch(myRequest).then(function (response) {
                response.blob().then(function (myBlob) {
                    load(myBlob);
                });
            });
        },
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

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h2>Modification Livre</h2>
                <div className="container w-100 d-flex justify-content-center">
                    <div>
                        <div className='form mt-3'>
                            <Row className="mb-2">
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Titre *</Form.Label>
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
                                <Form.Group className="col-md-6">
                                    <Form.Label>Publié *</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            type="date"
                                            required
                                            value={published}
                                            onChange={(e) => setPublished(e.target.value)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Date de publication incorrecte
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Prix</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Prix"
                                        value={prix}
                                        onChange={(e) => setPrix(e.target.value)}
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group className="col-md-6">
                                    <Form.Label>Pages *</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        value={pages}
                                        onChange={(e) => setPages(e.target.value)}
                                        placeholder="Nombre de pages"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Nombre de pages incorrect
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Image</Form.Label>
                                    <div style={{ width: "80%", margin: "auto", padding: "1%" }}>
                                        <FilePond
                                            files={files}
                                            acceptedFileTypes="image/*"
                                            onupdatefiles={setFiles}
                                            allowMultiple={false}
                                            server={serverOptions}
                                            name="file"
                                        />
                                    </div>
                                </Form.Group>
                                <Form.Group as={Col} md="12">
                                    <Form.Label>Description *</Form.Label>
                                    <Form.Control
                                        required
                                        as="textarea"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Description"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Saisir une description
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12">
                                    <Form.Label>Catégorie</Form.Label>
                                    <Form.Control
                                        as="select"
                                        type="select"
                                        value={nomcategorie}
                                        onChange={(e) => setNomcategorie(e.target.value)}
                                    >
                                        <option></option>
                                        {categories?.map((cat) => (
                                            <option key={cat._id} value={cat.nomcategorie}>
                                                {cat.nomcategorie}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Row>
                        </div>
                    </div>
                </div>
                <Button type="submit">Valider</Button>
            </Form>
        </div>
    );
};
export default UpdateBook;
