console.log("entered in the file")
const api = 'jina_0a632d5ab3454e619a77dc40d0802cb7XA8XV6tnKvgZiMe4O2nHxCVcqulH';
async function testJinaEmbedding() {
  console.log("inside the function");
  const response = await fetch(
    "https://api.jina.ai/v1/embeddings",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${api}`,
      },
      body: JSON.stringify({
        model: "jina-embeddings-v5-omni-small",
        input: ["Hello"],
      }),
    }
  );

  const data = await response.json();

  console.log(data);

  const embedding = data.data[0].embedding;
  console.log(embedding);
  console.log("Dimension:", embedding.length);
}
testJinaEmbedding();
console.log("left the file")