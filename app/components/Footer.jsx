
import Image from 'next/image';
const Footer = () => {
    return (

        <div className="container" style={{ maxWidth: "1440px", marginTop: "20px" }}>
  <div className="row">
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <ul>
        <li>Hobbycue</li>
      </ul>
      <ul>
        <li>About Us</li>
        <li>Our Services</li>
        <li>Work with Us</li>
        <li>FAQ</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <ul>
        <li>How Do I</li>
      </ul>
      <ul>
        <li>Sign Up</li>
        <li>Add a Listing</li>
        <li>Claim Listing</li>
        <li>Post a Query</li>
        <li>Add a Blog Post</li>
        <li>Other Queries</li>
      </ul>
    </div>
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <ul>
        <li>How Do I</li>
      </ul>
      <ul>
        <li>Listings</li>
        <li>Blog Posts</li>
        <li>Shop / Store</li>
        <li>Community</li>
      </ul>
    </div>
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div>
        <span>Social Media</span>
        <div style={{ marginTop: "20px" }}>
          <img src="/assets/Group 64.png" width={360} height={24} alt="Social Media Icons" />
        </div>
        <div style={{ marginTop: "40px" }}>
          <span>Invite Friends</span>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Email ID" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button style={{ backgroundColor: "#8064A2" }} className="btn" type="button" id="button-addon2">Button</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        // <div style={{ display: "flex", width: "1440px", height: "380px" , marginLeft:"102px" , display:"flex" , gap:"180px" , marginTop:"20px"}}>
        //     <div>
        //         <ul>
        //             <li>Hobbycue</li>
        //         </ul>

        //         <ul>
        //             <li>About Us</li>
        //             <li>Our Services</li>
        //             <li>Work with Us</li>
        //             <li>FAQ</li>
        //             <li>Contact Us</li>
        //         </ul>
        //     </div>
        //     <div>
        //         <ul>
        //         <li>How Do I</li>
        //         </ul>
                
        //         <ul>
        //             <li>Sign Up</li>
        //             <li>Add a Listing</li>
        //             <li>Claim Listing</li>
        //             <li>Post a Query</li>
        //             <li>Add a Blog Post</li>
        //             <li>Other Queries</li>
        //         </ul>
        //     </div>
        //     <div>
        //         <ul>
        //         <li>How Do I</li>
        //         </ul>
                
        //         <ul>
        //             <li>Listings</li>
        //             <li>Blog Posts</li>
        //             <li>Shop / Store</li>
        //             <li>Community</li>
        //         </ul>
        //     </div>
        //     <div>
        //         <span>Social Media</span>
        //         <div style={{marginTop:"20px"}}>
        //             <Image src="/assets/Group 64.png" width={360} height={24}/>
        //         </div>
        //         <div style={{marginTop:"40px"}}>
        //             <span>Invite Friends</span>
        //             <div style={{ width: "360px", height: "40px" }} class="input-group mb-3">
        //                 <input type="text" class="form-control" placeholder="Email ID" aria-label="Recipient's username" aria-describedby="button-addon2" />
        //                 <button style={{backgroundColor:"#8064A2"}} class="btn " type="button" id="button-addon2">Button</button></div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Footer