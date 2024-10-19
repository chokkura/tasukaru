import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="sm:items-start">
        <div className="flex gap-4">
          <h1 className="text-4xl">抗血栓薬の分類検索</h1>
        </div>
        <div className="">
        <form action="" method="get" className="form-example">
          <div className="form-example">
            <p>商品名を記入して下さい</p>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="form-example">
            <input type="submit" value="調べる" />
          </div>
        </form>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-3xl">tasukaru</p>
      </footer>
    </div>
  );
}
