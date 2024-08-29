import "../index.css";

const Home = () => {
  return (
    <div className="container-image  py-32 lg:pt-40 lg:pb-50 md:py-48">
      <div className="pl-20 flex flex-col gap-7">
        <div>
          <p className="text-2xl text-blue-600 mb-20">Commited To success</p>
          <p className="uppercase font-bold text-5xl mb-10 ">
            We care about{" "}
            <span className="block mt-2">
              {" "}
              your <span className="text-blue-700">HealthCare </span>
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-20 items-start">
          <p className="w-3/5 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            sunt maiores dolores, error eius ea, officia, earum accusantium
            ducimus omnis itaque reiciendis minima vel veniam odio iusto
            quibusdam quae aspernatur illo ipsum adipisci labore assumenda
            tempora vero? Fugit, earum odio. Fugiat optio aut dicta nulla sed
            quas consequuntur. Accusantium, reprehenderit!
          </p>
          <button className="text-lg transition-all duration-500 py-4 px-14 rounded-md bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white ">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
