import React from 'react'


const dataAPi = [
    {
        nama: 'Sabun Mandi',
        harga: 13000
    },
    {
        nama: 'Odol',
        harga: 15000
    },
    {
        nama: 'Sampo',
        harga: 35000
    },
    {
        nama: 'Sikat Gigi',
        harga: 30000
    }
]

export default class LifeCycleClass extends React.Component {
    constructor() {
        super()

        this.state = {
            totalHarga: 0,
            dataBelanjaan: [],
            daftarKeranjang: []
        }
    }

    componentDidMount() {
        console.log('ini componentDidMount')
        this.setState({ dataBelanjaan: dataAPi })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('ini componentDidUpdate')

        if (prevState.daftarKeranjang.length !== this.state.daftarKeranjang.length) {

            let initHarga = 0;

            for (let isiKeranjang of this.state.daftarKeranjang) {
                initHarga = initHarga + isiKeranjang.harga
            }

            this.setState({ totalHarga: initHarga })
        }

    }

    tambahDataKeranjang(produkYangDitambahkan) {
        const keranjangSekarang = [...this.state.daftarKeranjang] // destructor
        keranjangSekarang.push(produkYangDitambahkan)
        this.setState({ daftarKeranjang: keranjangSekarang })
    }

    // hapusDataKeranjang(dataYangDihapus) {
    //     const keranjangSekarang = [...this.state.daftarKeranjang]
    //     keranjangSekarang.splice(keranjangSekarang.IndexOf(dataYangDihapus),1)
    //     this.setState({ daftarKeranjang: keranjangSekarang })
    // }

    hapusDataKeranjang(dataYangDihapus) {
        const isiKeranjangSekarang = [...this.state.daftarKeranjang]
        isiKeranjangSekarang.splice(isiKeranjangSekarang.indexOf(dataYangDihapus), 1)
        this.setState({daftarKeranjang: isiKeranjangSekarang})
    }


    render() {
        return (
            <div>
                <p>Total Harga : Rp. {this.state.totalHarga}</p>
                Daftar Barang
                <ul>
                    {this.state.dataBelanjaan.map((belanjaan) => (
                        <li>
                            {belanjaan.nama} | {belanjaan.harga} |
                            <button onClick={() => this.tambahDataKeranjang(belanjaan)}>
                                Tambah Ke Keranjang
                            </button>

                        </li>
                    ))
                    }
                </ul>
                Daftar Keranjang
                <ul>
                    {
                        this.state.daftarKeranjang.map((daftarIsiKeranjang) =>
                        (
                            <li>
                                {daftarIsiKeranjang.nama} | {daftarIsiKeranjang.harga} |
                                <button
                                    onClick={() => this.hapusDataKeranjang(daftarIsiKeranjang)}>
                                    Hapus belanjaan
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
