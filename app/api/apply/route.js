// app/api/apply/route.js
let applications = []; // temporary storage

export async function POST(req) {
  try {
    const data = await req.json();

    // Save the submission
    applications.push(data);

    console.log("APPLICATION RECEIVED:", data);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Application submitted successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Invalid request",
      }),
      { status: 400 }
    );
  }
}

// New GET endpoint to fetch applications
export async function GET() {
  return new Response(JSON.stringify(applications), { status: 200 });
}
