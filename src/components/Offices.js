import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Данные для таблицы
function createData(id, regCenter, region, city, office, etc) {
  return { id, regCenter, region, city, office, etc };
}

const rows = [
  createData(0, 'ЦФО', 'Архангельск', 'Архангельск', 'Архангельск-Троицкий', 'и т. д.'),
];

// Структура таблицы
export default function Orders() {
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Рег. центр</TableCell>
            <TableCell>Регион</TableCell>
            <TableCell>Город</TableCell>
            <TableCell>Офис</TableCell>
            <TableCell align="right">И т.д.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.regCenter}</TableCell>
              <TableCell>{row.region}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.office}</TableCell>
              <TableCell align="right">{row.etc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}