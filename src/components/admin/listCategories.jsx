"use client";
import { useMemo, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box } from '@mui/material';
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import { deleteCategorie, fetchCategories } from "@/services/CategorieService";
import { useRouter } from "next/navigation";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Link from 'next/link';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const ListCategories = () => {
    const router = useRouter();
    const [categories, setCategories] = useState([]);

    const loadCategories = async () => {
        const data = await fetchCategories();
        setCategories(data);
    };

    useEffect(() => {
        loadCategories();
    }, []);

    const deleteArticle = async (id) => {
        if (window.confirm("supprimer categorie O/N")) {
            try {
                await deleteCategorie(id);
                loadCategories(); // Refresh the list after deletion
            } catch (error) {
                console.error('Error deleting category:', error);
            }
        }
    };

    const columns = useMemo(
        () => [
            {
                accessorKey: 'imagecategorie', // Access nested data with dot notation
                header: 'Image Categorie',
                Cell: ({ cell }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >
                        <Image
                            src={cell.getValue()}
                            alt="Categorie image"
                            height="50"
                            width="50"
                        />
                    </Box>
                ),
            },
            {
                accessorKey: 'nomcategorie', // Access nested data with dot notation
                header: 'Nom Categorie',
                size: 100,
            },
            {
                accessorKey: '_id',
                header: 'Actions',
                size: 100,
                Cell: ({ cell }) => (
                    <div>
                        <Link href={`/admin/categories/updateCategorie/${cell.row.original._id}`} passHref>
                            <Button size="md" className="text-primary btn-link edit">
                                <EditOutlinedIcon />
                            </Button>
                        </Link>
                        <Button
                            onClick={() => deleteArticle(cell.row.original._id)}
                            variant="danger"
                            size="md"
                            className="text-danger btn-link delete"
                        >
                            <DeleteForeverIcon />
                        </Button>
                    </div>
                ),
            },
        ],
        []
    );

    return (
        <div className="container">
            <Link href="/admin/categories/newCategorie" passHref>
                <Button variant='dark' size="sm">
                    <AddCircleOutlineIcon /> Nouveau
                </Button>
            </Link>
            <MaterialReactTable columns={columns} data={categories} />
        </div>
    );
};

export default ListCategories;
