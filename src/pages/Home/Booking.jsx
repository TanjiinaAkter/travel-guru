import Navbar from "../shared/Navbar/Navbar";

const Booking = () => {
  return (
    <div className=" bg-home-bg bg-cover bg-no-repeat lg:mx-auto w-full lg:h-[100vh]">
      <Navbar></Navbar>
      <div className="grid grid-cols-2 w-full mx-auto  gap-1 mt-24">
        <div className="lg:w-2/3 p-4 md:ml-5 md:p-0 text-white col-span-full md:col-span-1">
          <h1 className="my-8 text-white font-bold text-3xl md:text-5xl text-">COXS BAZAR</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            dolorem officia sapiente nemo quibusdam cumque, esse quae adipisci
            eum enim nulla ea id expedita quas praesentium saepe eveniet ipsum
            consequuntur, nam recusandae, commodi nisi. Odio, libero. Possimus
            sunt repellat dolores?
          </p>
        </div>
        <div className="m-3 col-span-full md:col-span-1  flex justify-center">
          <div className="card shrink-0 w-full rounded-md max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Origin</span>
                </label>
                <input
                  type="text"
                  placeholder="division"
                  name="division"
                  className="input border-none input-bordered rounded-md bg-gray-100 font-bold text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Destination</span>
                </label>
                <input
                  type="text"
                  name="destination"
                  placeholder="Destination"
                  className="input border-none bg-gray-100 input-bordered font-bold text-black rounded-md"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn rounded-sm btn-warning">
                  Start Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
