import Image from 'next/image';

const End = () => {
  return (

    <div className="container-fluid" style={{ marginTop: "103px", padding: "90px 15px" }}>
  <div className="row">
    <div className="col-12 col-md-6 d-flex flex-column align-items-start">
      <h1>Your Hobby, Your Community...</h1>
      <button style={{ marginTop: "10px", backgroundColor: "#8064A2" }} type="button" className="btn btn-primary">
        Get Started
      </button>
    </div>
    <div className="col-12 col-md-6 mt-4 mt-md-0">
      <Image src="/assets/Group99.png" width={1440} height={662} alt="Hobby Community" style={{ width: '100%', height: 'auto' }} />
    </div>
  </div>
</div>
    // <div style={{marginTop:"103px",padding:"90px"}}>
    //     <div >
    //         <h1>Your Hobby, Your Community...</h1>
    //         <button style={{marginTop:"10px" , backgroundColor:"#8064A2"}} type="button" class="btn btn-primary">Get Started</button>
    //     </div>
    //     <div>
    //         <Image src="/assets/Group99.png" width={1440} height={662}/>
    //     </div>
    // </div>
  )
}

export default End