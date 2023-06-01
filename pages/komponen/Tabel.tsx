import React from 'react';
import { NextPage } from 'next';

interface TableData {
    id: number;
    name: string;
    age: number;
    classs: string;
    school: string;
    add: string;
    hobby: string;
    exp: string;
  }

  interface TableProps {
    data: TableData[];
  }
  
  const Table: NextPage<TableProps> = ({ data }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Umur</th>
            <th>Kelas</th>
            <th>Sekolah</th>
            <th>Alamat</th>
            <th>Hobi</th>
            <th>Pengalaman</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.classs}</td>
              <td>{row.school}</td>
              <td>{row.add}</td>
              <td>{row.hobby}</td>
              <td>{row.exp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

export default Table;