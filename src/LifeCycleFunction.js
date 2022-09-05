import { useEffect, useState } from 'react'

const dataAPi = [
  {
    nama: 'Sikat Gigi',
    harga: 5000
  },
  {
    nama: 'Pasta Gigi',
    harga: 10000
  },
  {
    nama: 'Sabun Mandi',
    harga: 3500
  },

]

export default function LifeCycleFunction() {
  const [dataBelanjaan, setDataBelanjaan] = useState([])
  const [dataKeranjang, setDataKeranjang] = useState([])
  const [totalHarga, setTotalHarga] = useState(0)

  function tambahDataKeranjang(produkYangDitambahkan) {
    const keranjangSekarang = [...dataKeranjang]
    keranjangSekarang.push(produkYangDitambahkan)
    setDataKeranjang(keranjangSekarang)
  }

  function hapusDataKeranjang(dataYangDihapus) {
    const keranjangSekarang = [...dataKeranjang]
    keranjangSekarang.splice(dataYangDihapus, 1)
    setDataKeranjang(keranjangSekarang)
  }

  function hapusSemuaData(produknya) {
    const keranjangSekarang = [...dataKeranjang]
    keranjangSekarang.length = 0
    setDataKeranjang(keranjangSekarang)
  }

  useEffect(() => {
    setDataBelanjaan(dataAPi)
  }, [])

  useEffect(() => {
    let hitungHargaTotal = 0;

    for (const data of dataKeranjang) {
      hitungHargaTotal = hitungHargaTotal + data.harga
    }

    setTotalHarga(hitungHargaTotal)
  }, [dataKeranjang])


  return <>
    <h1>LifeCycle function</h1>

    <p>Total Harga: Rp. {totalHarga}</p>
    <ul>
      {dataBelanjaan.map(belanjaan =>
        <li>
          {belanjaan.nama} | Rp. {belanjaan.harga}
          <button onClick={() => tambahDataKeranjang(belanjaan)}>
            + Tambah Barang
          </button>
        </li>)}
    </ul>
    

    <p>Daftar Keranjang</p>

    <ul>
      {dataKeranjang.map((data) =>
        <li>
          {data.nama} | Rp. {data.harga}

          <button onClick={() => hapusDataKeranjang(data)}>
            Hapus
          </button>

        </li>
        
      )}
            <button onClick={() => hapusSemuaData(dataKeranjang)}>
        Bersihkan Keranjang
      </button>

    </ul>
  </>

}
