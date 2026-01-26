import HeroSection from "@/components/pages/general/HeroSection";
import Container from "@/components/Container";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const breadcrumbs = [
  {
    id: "breadcrumb-cart",
    title: "Cart",
    link: null,
  },
];

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
];

export default function CartPage() {
  return (
    <>
      <HeroSection
        title="Cart"
        breadcrumbs={breadcrumbs}
        className="lg:mb-33.75"
      />

      <Container className="flex">
        <div className="w-full max-w-182.5">
          <p className="font-bold mb-8">Shopping Cart (04items)</p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Product Details</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Container>
    </>
  );
}
