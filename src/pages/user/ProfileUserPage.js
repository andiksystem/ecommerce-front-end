import React, { useEffect, useRef, useState } from "react";
import MainPage from "../../components/MainPage";
import { useAuth } from "../../auth/useAuth";
import { findPenggunaById, updateProfile } from "../../services/PenggunaService";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const ProfileUserPage = () => {
    const toast = useRef(null);
    const { user } = useAuth();
    const emptyPengguna = {
        id: null,
        nama: "",
        alamat: "",
        email: ""
    }

    const [pengguna, setPengguna] = useState(emptyPengguna);

    useEffect(() => {
        load();
        // eslint-disable-next-line
    }, []);

    const load = async () => {
        try {
            const response = await findPenggunaById(user.username);
            setPengguna(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const saveProfile = async () => {
        try {
            const response = await updateProfile(pengguna);
            const data = response.data;
            setPengguna(data);
            toast.current.show({
                severity: "info",
                summary: "Info",
                detail: "Profile sukses diupdate"
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <MainPage>
            <Toast ref={toast} />
            <div className="main-content">
                <div className="content">
                    <div className="content-inner">
                        <div className="content-header">
                            <h2>Profile</h2>
                        </div>
                        <div className="content-body">
                            <div className="content-form shadow-1">
                                <div className="p-fluid">
                                    <div className="p-field">
                                        <label htmlFor="nama">Nama</label>
                                        <InputText id="nama"
                                            required={true}
                                            value={pengguna.nama}
                                            onChange={(e) => {
                                                const val = (e.target && e.target.value) || '';
                                                const _pengguna = { ...pengguna };
                                                _pengguna.nama = val;
                                                setPengguna(_pengguna);
                                            }}
                                        />
                                        {!pengguna.nama && <small className="p-error">Nama harus diisi</small>}
                                    </div>

                                    <div className="p-field">
                                        <label htmlFor="alamat">Alamat</label>
                                        <InputText id="alamat"
                                            required={true}
                                            value={pengguna.alamat}
                                            onChange={(e) => {
                                                const val = (e.target && e.target.value) || '';
                                                const _pengguna = { ...pengguna };
                                                _pengguna.alamat = val;
                                                setPengguna(_pengguna);
                                            }}
                                        />
                                        {!pengguna.alamat && <small className="p-error">Alamat harus diisi</small>}
                                    </div>

                                    <div className="p-field">
                                        <label htmlFor="email">Email</label>
                                        <InputText id="email"
                                            required={true}
                                            value={pengguna.email}
                                            onChange={(e) => {
                                                const val = (e.target && e.target.value) || '';
                                                const _pengguna = { ...pengguna };
                                                _pengguna.email = val;
                                                setPengguna(_pengguna);
                                            }}
                                        />
                                        {!pengguna.email && <small className="p-error">Email harus diisi</small>}
                                    </div>

                                    <div className="p-field">
                                        <label htmlFor="telepon">Telepon</label>
                                        <InputText id="telepon"
                                            required={true}
                                            value={pengguna.hp}
                                            onChange={(e) => {
                                                const val = (e.target && e.target.value) || '';
                                                const _pengguna = { ...pengguna };
                                                _pengguna.hp = val;
                                                setPengguna(_pengguna);
                                            }}
                                        />
                                        {!pengguna.hp && <small className="p-error">Telepon harus diisi</small>}
                                    </div>
                                </div>

                                <div>
                                    <Button onClick={saveProfile}
                                        disabled={!pengguna.nama || !pengguna.alamat || !pengguna.email || !pengguna.hp}
                                    >Simpan</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </MainPage>
    )
}

export default ProfileUserPage;