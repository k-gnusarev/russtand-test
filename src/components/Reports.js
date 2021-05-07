import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

// Данные таблицы
function createData(id, platform, manufacturer, totalDevices, inUse, etc) {
  return { id, platform, manufacturer, totalDevices, inUse, etc };
}

const rows = [
  createData(0, 'Платформа не указана', 'CISCO', '30', '0', 'и т. д.'),
  createData(1, '1234', 'CISCO', '12', '34', 'и т. д.'),
  createData(2, '5678', 'CISCO', '56', '78', 'и т. д.'),
];

// Таблица со вкладками

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Reports() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="По платформам" {...a11yProps(0)} />
          <Tab label="По модулям" {...a11yProps(1)} />
          <Tab label="По ПО" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Платформа</TableCell>
            <TableCell>Производитель</TableCell>
            <TableCell>Всего устройств</TableCell>
            <TableCell>Активных</TableCell>
            <TableCell align="right">И т.д.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.platform}</TableCell>
              <TableCell>{row.manufacturer}</TableCell>
              <TableCell>{row.totalDevices}</TableCell>
              <TableCell>{row.inUse}</TableCell>
              <TableCell align="right">{row.etc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Здесь будет Таблица "По модулям"
      </TabPanel>
      <TabPanel value={value} index={2}>
        Здесь будет Таблица "По ПО"
      </TabPanel>
    </div>
  );
}