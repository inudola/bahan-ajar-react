import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import Navigation from './Navigation';
const dataObject = {
  id: 1,
  nama: 'Inu',
  alamat: 'Pramuka',
  ruang: 3,
  nilai: '10'
}

const dataList = [
  {
    id: 1,
    nama: 'Inu',
    ruang: 3
  },
  {
    id: 2,
    nama: 'Fahrul',
    ruang: 11
  },
  {
    id: 3,
    nama: 'Mugi',
    ruang: 10
  },
  {
    id: 4,
    nama: 'Coki',
    ruang: 3
  }
]
function Home() {
  const navigate = useNavigate()
  const [dataObj, setDataObj] = useState({
    id: 1,
    nama: 'Inu',
    alamat: 'Pramuka',
    ruang: 3,
    nilai: '10'
  })
  const [dataHook, setDataHook] = useState([
    {
      id: 1,
      nama: 'Inu',
      ruang: 3
    },
    {
      id: 2,
      nama: 'Fahrul',
      ruang: 11
    },
    {
      id: 3,
      nama: 'Mugi',
      ruang: 10
    },
    {
      id: 4,
      nama: 'Coki',
      ruang: 3
    }
  ])

  useEffect(() => {
    if (!localStorage.getItem('isLogin')) {
      navigate('/')
    }
  }, [])

  const addData = () => {
    console.log('r');
    setDataObj({
      ...dataObj,
      nomor_telepon: '0808118',
      nama: 'Telah diubah',
    })
  }
  return (
    <div>
      <Navigation />
      <h1>Halo, {dataObject.nama}</h1>
      <h2>Ruang: {dataObject.ruang}</h2>
      <h2>Nilai: {dataObject.nilai}</h2>
      <h2>Ruang+Nilai: {Number(dataObject.nilai) + dataObject.ruang}</h2>
      <h1>Mengambil 1 data dari list</h1>
      <h2>{dataList[1].nama}</h2>
      <h1>Looping Data</h1>
      {
        dataHook.map((el, index) => {
          return (
            <div key={el.id}>
              <h4>NAMA: {el.nama}</h4>
              <h4>RUANG: {el.ruang} <button onClick={() =>
                setDataObj({
                  ...dataObj,
                  nama_adik: el.nama
                })
              }>Lihat Data</button></h4>

            </div>
          )
        })
      }

      <h1>Tambah Data Hook <button onClick={() => addData()} >Add Data</button></h1>
      <pre>
        {JSON.stringify(dataObj, null, 3)}
      </pre>
    </div>
  )
}

export default Home;
