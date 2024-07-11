import Image from 'next/image';

const Add = () => {
  return (

    <div className="container-fluid" style={{ marginTop: "103px", backgroundColor: "#F7FDFF", padding: "20px" }}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card" style={{ padding: "30px", display: "flex", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Image src="/assets/Add.png" width={40} height={40} alt="Add" />
              <span>Add your own</span>
            </div>
            <div>
              <p>Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page</p>
            </div>
            <div>
              <button style={{ borderColor: "#8064A2" }} type="button" className="btn">Add New</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div style={{ marginTop: "103px" , backgroundColor:"#F7FDFF" , padding:"20px"}}>
    //   <div class='row'>
    //     <div class='col-md-6' style={{paddingLeft:"100px"}}>
    //     <div class="card" style={{ width: "1240px", height: "284px", padding: "30px", display: "flex", gap: "20px" }}>
    //       <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
    //         <Image src="/assets/Add.png" width={40} height={40} />
    //         <span>Add your own</span>
    //       </div>
    //       <div>
    //         <p>Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page</p>
    //       </div>
    //       <div>
    //         <button style={{borderColor:"#8064A2"}} type="button" class="btn ">Add New</button>
    //       </div>
    //     </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Add

//width:"1240px" , height:"284px"