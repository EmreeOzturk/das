export async function GET() {
  const url = "";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response("Error fetching data", { status: 500 });
  }
}
