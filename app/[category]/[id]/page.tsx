export default function PostPage({ params }: { params: { category: string, id: string } }) {
  return (
    <div>
      <h1>Post Page: {params.id}</h1>
    </div>
  );
}   