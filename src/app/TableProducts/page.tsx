import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import React from 'react';

const TableProducts = () => {
    const invoices = [
        {
            invoice: 'INV001',
            paymentStatus: 'Paid',
            paymentMethod: 'Credit Card',
            totalAmount: '$1,200.00',
        },
        {
            invoice: 'INV002',
            paymentStatus: 'Pending',
            paymentMethod: 'PayPal',
            totalAmount: '$500.00',
        },
        {
            invoice: 'INV003',
            paymentStatus: 'Failed',
            paymentMethod: 'Bank Transfer',
            totalAmount: '$800.00',
        },
    ];

    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
};

export default TableProducts;
