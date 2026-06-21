"use client";

export default function Home() {

  return (
    <main>
      <form action="/api/image" method="post" encType="multipart/form-data">
        <input type="file" name="image" id="image" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
