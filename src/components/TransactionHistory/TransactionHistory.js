import PropTypes from "prop-types";
import {
  TransactionHistoryTable,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableCell
} from './TransactionHistory.styled.js'

export function TransactionHistory({ items }) {
    return (
        <TransactionHistoryTable>
  <TableHead>
    <tr>
      <TableHeaderCell>Type</TableHeaderCell>
      <TableHeaderCell>Amount</TableHeaderCell>
      <TableHeaderCell>Currency</TableHeaderCell>
    </tr>
            </TableHead>
            <tbody>
{items.map(item => ( <TableRow key = {items.id} >
      <TableCell>{item.type}</TableCell>
      <TableCell>{item.amount}</TableCell>
      <TableCell>{item.currency}</TableCell>
    </TableRow>))}
</tbody>  
</TransactionHistoryTable>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type:PropTypes.string.isRequired,
            amount:PropTypes.string.isRequired,
            currency:PropTypes.string.isRequired
        })
    ).isRequired,
}