import Image from "next/image";
import StartingPage from "../components/shared/startingPage";
import NewEmployee from "../components/shared/newEmployee";
import Department from "../components/shared/department";
import Form from "@/components/ui/Form";
import { createEmployee } from "./actions/todoActions";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main>
      <NewEmployee />
    </main>
  );
}
