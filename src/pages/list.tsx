import { Table } from '@material-ui/core';  
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import {MovieType, ListPropsType} from '../types';

const headCells = [
    {_id: 1, label: 'Title'},
    {_id: 2, label: 'Year'},
    {_id: 3, label: 'Type'},
]

const List = <T extends MovieType>({data = []}: ListPropsType<T>)=>{
    return (
        <Paper >
            <Table>
                <TableHead>
                    <TableRow>
                        {headCells.map((headCell, i)=>(
                            <TableCell key={i*Math.random()*10000000}>
                                {headCell.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map(movie=>(
                            <TableRow>
                                {headCells.map((headCell, i)=>(
                                    <TableCell key={i*Math.random()*10000000}>
                                        <Link to={'/movie/'+movie.imdbID}> {movie[headCell.label]}</Link>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </Paper>
    )
}

export default List;