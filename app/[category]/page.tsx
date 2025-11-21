export default function CategoryPage({ params }: { params: { category: string } }) {
  return (
    <div>
      <h1>Category Page: {params.category}</h1>
    </div>
  );
}