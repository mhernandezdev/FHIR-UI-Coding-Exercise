import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';


class SortableTable extends React.Component {

    state = {
        order: 'asc',
        orderBy: 0,
    }

    sortClicked = (index) => {
        const {order, orderBy} = this.state;

        // if selected toggle order 'asc' 'desc'
        if(index===orderBy){
            this.setState({ order: order==='asc' ? 'desc' : 'asc' });

        //else change order by to this index
        }else{
            this.setState({ orderBy: index });
        }
    }

    render() {
        const { header, data } = this.props;
        const { order, orderBy } = this.state;

        const dataSorted = _.orderBy(data, header[orderBy].id, order);

        return (
            <Table className="table-sortable">
                <TableHead className="light-gray">
                    <TableRow>
                    {header.map((row, index) =>
                        <TableCell
                            key={row.id}
                            sortDirection={orderBy === row.index ? order : false}
                        >
                        { !row.sortable ? row.label :
                            <Tooltip title="Sort" placement='bottom-start'>
                                <TableSortLabel
                                    active={ orderBy===index }
                                    direction={ order }
                                    onClick={ () => this.sortClicked(index) }
                                >
                                    { row.label }
                                </TableSortLabel>
                            </Tooltip>
                        }
                        </TableCell>
                    )}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {dataSorted.map(item =>
                        <TableRow key={ item.id }>{
                            header.map( (row) => <TableCell key={ item.id+row.id }>{ item[row.id] }</TableCell> )
                        }</TableRow>
                    )}
                </TableBody>
            </Table>
        );
    }
}

SortableTable.propTypes = {
    header: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
};

export default SortableTable;
