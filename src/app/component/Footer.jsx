import Image from "next/image";

function Footer() {
  return (
    <footer className="p-6 border-t border-gray-400">
      <div className="flex">
        <div className="w-full">
          <h2>E-Commerce</h2>
        </div>
        <div className="w-full">
          <h3 className="text-3xl font-bold mb-4">Category</h3>
          <ul className="flex flex-col gap-2">
            <li>Technology</li>
            <li>Fashion</li>
          </ul>
        </div>
        <div className="w-full">
          <h3 className="text-3xl font-bold mb-4">Social Media</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="https://instagram.com/gmnovrial">Instagram</a>
            </li>
            <li>
              <a href="https://github.com/gmn26">GitHub</a>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <Image
            src={"/img/footer.jpg"}
            alt="Footer Image"
            width={300}
            height={300}
          />
        </div>
      </div>
      <hr />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        rerum?
      </p>
    </footer>
  );
}

export default Footer;
