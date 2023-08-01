import api from "./api";

export const findPenggunaById = async (id) => {
    return await api.get(`/api/penggunas/${id}`)
}

export const updateProfile = async (pengguna) => {
    return await api.put("/api/profile", pengguna);
}