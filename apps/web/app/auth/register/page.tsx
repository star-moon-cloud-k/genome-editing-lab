import StockTable from "@/components/stock-table";
import { Button } from "@workspace/ui/components/button";
import stockData from "@config/stock.json";
import { RegisterForm } from "@/app/auth/register/register-form";

export default function RegisterPage() {
  return (
    <div className="basic_page">
      <div className="basic_contents">
        <RegisterForm />
      </div>
    </div>
  );
}
