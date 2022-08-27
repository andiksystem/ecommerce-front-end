import React, { useEffect, useState } from "react";
import MainPage from "../../components/MainPage";
import { useParams, useNavigate } from "react-router-dom";
import { deleteProdukById, findProdukById } from "../../services/ProdukService";
import { ProgressBar } from "primereact/progressbar";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { ConfirmDialog } from "primereact/confirmdialog";

const ProdukAdminDetailPage = () => {

    const [produk, setProduk] = useState();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [delDialog, setDelDialog] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loadProduk = async () => {
            try {
                const response = await findProdukById(id);
                const _produk = response.data;
                setProduk(_produk);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        loadProduk();
    }, [id]);

    const handleDelete = async () => {
        try {
            await deleteProdukById(id);
            navigate("/admin/produk", {
                replace: true
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <MainPage>
            {loading ?
                <ProgressBar mode="indeterminate"
                    className="my-progress-bar" /> :
                <div className="main-content">
                    <div className="content">
                        <div className="content-inner">
                            <div className="content-header">
                                <h2>Detail Produk {produk.nama}</h2>
                                <div>
                                    <Link to="/admin/produk"
                                        style={{ textDecoration: "none" }}>
                                        <Button label="Kembali"
                                            icon="pi pi-chevron-left"
                                            className="mr-2" />
                                    </Link>

                                    <Link to={`/admin/produk/edit/${produk.id}`}
                                        style={{ textDecoration: "none" }}>
                                        <Button label="Edit"
                                            icon="pi pi-pencil"
                                            className="mr-4" />
                                    </Link>

                                    <Button icon="pi pi-trash"
                                        label="Hapus"
                                        className="p-button-danger"
                                        onClick={() => setDelDialog(true)}
                                    />
                                </div>
                            </div>
                            <div className="content-body">
                                <div className="content-detail shadow-1">
                                    <div className="grid">
                                        <div className="col-fixed detail-label">Nama Produk</div>
                                        <div className="col">{produk.nama}</div>
                                    </div>
                                    <div className="grid">
                                        <div className="col-fixed detail-label">Kategori</div>
                                        <div className="col">{produk.kategori.nama}</div>
                                    </div>
                                    <div className="grid">
                                        <div className="col-fixed detail-label">Deskripsi</div>
                                        <div className="col">{produk.deskripsi}</div>
                                    </div>
                                    <div className="grid">
                                        <div className="col-fixed detail-label">Harga</div>
                                        <div className="col">{produk.harga}</div>
                                    </div>
                                    <div className="grid">
                                        <div className="col-fixed detail-label">Stok</div>
                                        <div className="col">{produk.stok}</div>
                                    </div>
                                </div>
                            </div>

                            <ConfirmDialog visible={delDialog}
                                onHide={() => setDelDialog(false)}
                                message="Apakah anda yakin akan menghapus data ini?"
                                header="Konfirmasi"
                                icon="pi pi-exclamation-triangle"
                                accept={handleDelete}
                            />
                        </div>
                    </div>
                </div>
            }
        </MainPage>
    )
}

export default ProdukAdminDetailPage;