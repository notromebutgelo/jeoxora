import { Input } from "@/components/ui/input";

type SearchBarProps = {
  placeholder?: string;
  value: string;
};

export function SearchBar({ placeholder, value }: SearchBarProps) {
  return <Input placeholder={placeholder} readOnly value={value} />;
}
