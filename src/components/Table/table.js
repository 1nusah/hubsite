import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

export default function SimpleTable() {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>What you looking for in a Finance Partner</TableCell>
						<TableCell>Africa Skills Hub Support Fund</TableCell>
						<TableCell>Bank</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>Medium to Long term tenor on your loan</TableCell>
						<TableCell>Yes</TableCell>
						<TableCell>No</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							Repayments structured according to your cash flows
						</TableCell>
						<TableCell>Yes</TableCell>
						<TableCell>No</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Focus on the viability of your business </TableCell>
						<TableCell>Yes</TableCell>
						<TableCell>No</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Pre-and-Post Finance Business Support </TableCell>
						<TableCell>Yes</TableCell>
						<TableCell>No</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
