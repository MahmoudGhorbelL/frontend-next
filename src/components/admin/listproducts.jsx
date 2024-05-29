"use client"
import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box } from '@mui/material';
import Image from "next/image"
import Button from 'react-bootstrap/Button';
import { deleteBook } from "@/services/BookService"
import { useRouter } from "next/navigation";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Link from 'next/link';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
const Listproducts = ({ produits }) => {
    const router = useRouter();
    const deletearticle = (id) => {
        if (window.confirm("supprimer le produit O/N")) {
            deleteBook(id)
                .then((res) => {
                    console.log(res)
                    router.refresh()
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
    const columns = useMemo(
        () => [
            {
                accessorKey: 'image', //access nested data with dot notation
                header: 'Image',
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
                            alt="product anme"
                            height="50"
                            width="50"
                        />

                    </Box>),
            },
            {
                accessorKey: 'title', //access nested data with dot notation
                header: 'Titre',
                size: 100,
            },
            {
                accessorKey: 'author',
                header: 'Auteur',
                size: 100,
            },
            
            {
                accessorKey: 'pages',
                header: 'Pages',
                size: 100,
            },
            {
                accessorKey: 'prix',
                header: 'Prix',
                size: 100,
            },
            {
                accessorKey: 'nomcategorie',
                header: 'Categorie',
                size: 100,
            },
            {
                accessorKey: '_id',
                header: 'actions',
                size: 100,
                Cell: ({ cell, row }) => (
                    <div >

                        <Button
                            size="md"
                            className="text-primary btn-link edit"
                        >
                            <Link href={`/admin/products/updateProduct/${cell.row.original._id}`}>
                                <EditOutlinedIcon />
                            </Link>
                        </Button>
                        <Button
                            onClick={(e) => {
                                deletearticle(cell.row.original._id, e);
                            }}
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
        [produits],
    );
    return (
        <div className="container">
            <Button
                variant='dark'
                size="sm"
            >
                <Link
                    href="/admin/products/newProduct"
                    style={{
                        textDecoration: 'none',
                        color: 'aqua',
                        fontSize: 14,
                    }}
                >
                    <AddCircleOutlineIcon /> Nouveau
                </Link>
            </Button>
            <MaterialReactTable columns={columns} data={produits} />;

        </div>
    )
}
export default Listproducts