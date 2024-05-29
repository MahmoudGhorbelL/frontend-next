"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

import { editCategorie } from "@/services/CategorieService";  // Utilisez "editCategory"

const UpdateCategorie = ({ categorie }) => {
    const [files, setFiles] = useState([]);
    const router = useRouter();
    const [nomcategorie, setNomCategorie] = useState("");
    const [imagecategorie, setImageCategorie] = useState("");
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        setNomCategorie(categorie.nomcategorie);
        setImageCategorie(categorie.imagecategorie);
        setFiles([
            {
                source: categorie.imagecategorie,
                options: { type: "local" },
            },
        ]);
    }, [categorie]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            const categorieEdited = {
                _id: categorie._id,
                nomcategorie,
                imagecategorie,
            };
            await editCategorie(categorieEdited)  // Utilisez "editCategory"
                .then((res) => {
                    router.push("/admin/categories");
                    router.refresh();
                })
                .catch((error) => {
                    console.log(error);
                    alert("Erreur ! Modification non effectuée");
                });
        }
        setValidated(true);
    };

    const serverOptions = () => {
        return {
            load: (source, load, error, progress, abort, headers) => {
                fetch(source)
                    .then((response) => response.blob())
                    .then((blob) => {
                        load(blob);
                    })
                    .catch((fetchError) => {
                        console.error("Error loading file:", fetchError);
                        error("Load failed");
                        abort();
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
    };

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h2>Modification Categories</h2>
                <div className="container w-100 d-flex justify-content-center">
                    <div>
                        <div className="form mt-3">
                            <Row className="mb-2">
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Nom Categorie *</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Nom categorie"
                                        value={nomcategorie}
                                        onChange={(e) => setNomCategorie(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Saisir Désignation
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Image Categorie</Form.Label>
                                    <div style={{ width: "100%", height: "100%", padding: "1%" }}>
                                        <FilePond
                                            files={files}
                                            acceptedFileTypes="image/*"
                                            onupdatefiles={setFiles}
                                            allowMultiple={false}
                                            server={serverOptions()}
                                            name="file"
                                        />
                                    </div>
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

export default UpdateCategorie;
