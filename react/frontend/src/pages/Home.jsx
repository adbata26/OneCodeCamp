import pic1 from "../assets/images/date.png";
import A1_images from "../components/A1_images";
export default function Home() {
  return (
    <div>
      <div
        className="row px-4"
        style={{ backgroundColor: "#ff4d01", height: "400px" }}
      >
        <div className="col-md-6">
          <div
            style={{
              fontFamily: "Fantasy,Copperplate",
              fontSize: "70px",
              color: "#C4FAD3",
            }}
          >
            DATING FOR EVERY
          </div>
          <div
            style={{
              fontFamily: "Fantasy,Copperplate",
              fontSize: "70px",
              color: "#C4FAD3",
            }}
          >
            SINGLE PERSON
          </div>

          <div className="text-light w-75">
            OMEGLE is the only dating app that matches you on what matters to
            you. You deserve to find who you’re looking for. Meet them today!
          </div>
          <div>
            <button className="mt-3 btn btn-dark btn-lg rounded rounded-0 w-75">
              JOIN NOW
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <img src={pic1} />
        </div>
      </div>

      <div className="row p-3 justify-content-center">
        <div
          className="text-center my-3"
          style={{
            fontFamily: "Fantasy,Copperplate",
            fontSize: "70px",
            color: "#fa8005",
          }}
        >
          HOME OF THE MOST PRETTY SINGLE LADIES
        </div>
        <div className="col-md-3">
          <A1_images path="aa.jpg" />
       
          <button className="mt-2 btn btn-warning btn-lg rounded rounded-0 w-100">
              GET MY NAME
            </button>
        </div>
        <div className="col-md-3">
          <A1_images path="bb.jpg" />

          <button className="mt-2 btn btn-warning btn-lg rounded rounded-0 w-100">
          GET MY NAME
            </button>
        </div>
        <div className="col-md-3">
          <A1_images path="cc.jpg" />

          <button className="mt-2 btn btn-warning btn-lg rounded rounded-0 w-100">
          GET MY NAME
            </button>
        </div>
      </div>

  




      
    </div>
  );
}
