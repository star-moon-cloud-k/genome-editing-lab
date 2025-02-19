import { Button } from "@workspace/ui/components/button";

export default function detailPage({ params }: { params: { id: string } }) {
  console.log(params.id);
  return (
    <div className="basic_page">
      <div className="basic_contents">
        <h1 className="text-2xl font-bold">{params.id}</h1>
        <Button size="sm">Button</Button>
      </div>
    </div>
  );
}
