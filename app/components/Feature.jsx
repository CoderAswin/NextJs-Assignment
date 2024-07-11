import Image from 'next/image';
import  useState  from 'react';

const Feature = () => {

   

    // const styles = {
    //     maxWidth: "608px", 
    //     height: "297px", 
    //     padding: "30px", 
    //     display: "flex", 
    //     gap: "20px",
    //     backgroundColor: hover? "#8064A2" : "#FFFFFF"

    // }
    return (

        <div className="container" style={{ marginTop: "103px" }}>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-6 mb-3">
          <div className="card h-100" style={{ padding: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Image src="/assets/people.png" width={40} height={40} alt="People" />
              <span>People</span>
            </div>
            <div>
              <p>Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.</p>
            </div>
            <div>
              <button style={{ borderColor: "#8064A2" }} type="button" className="btn">Connect</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 mb-3">
          <div className="card h-100" style={{ padding: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Image src="/assets/location.png" width={40} height={40} alt="Place" />
              <span>Place</span>
            </div>
            <div>
              <p>Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.</p>
            </div>
            <div>
              <button style={{ borderColor: "#8064A2" }} type="button" className="btn">Meet Up</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-lg-6 mb-3">
          <div className="card h-100" style={{ padding: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Image src="/assets/shopping.png" width={40} height={40} alt="Product" />
              <span>Product</span>
            </div>
            <div>
              <p>Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.</p>
            </div>
            <div>
              <button style={{ borderColor: "#8064A2" }} type="button" className="btn">Get It</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 mb-3">
          <div className="card h-100" style={{ padding: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Image src="/assets/event.png" width={40} height={40} alt="Program" />
              <span>Program</span>
            </div>
            <div>
              <p>Find events, meetups and workshops related to your hobby. Register or buy tickets online.</p>
            </div>
            <div>
              <button style={{ borderColor: "#8064A2" }} type="button" className="btn">Attend</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        // <div style={{ marginTop: "103px" }}>
        //     <div class='row' style={{ display: "flex", marginLeft: "100px", gap: "20px" }}>
                
        //             <div class='card'  style={{ maxWidth: "608px", height: "297px", padding: "30px", display: "flex", gap: "20px" }}>
        //                 <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        //                     <Image src="/assets/people.png" width={40} height={40} />
        //                     <span>People</span>
        //                 </div>
        //                 <div>
        //                     <p>Find a teacher, coach, or expert for your hobby interest in <br /> your locality.  Find a partner, teammate, accompanist or <br /> collaborator.</p>
        //                 </div>
        //                 <div>
        //                     <button style={{borderColor:"#8064A2"}}type="button" class="btn ">Connect</button>
        //                 </div>
        //             </div>
                
        //             <div class='card' style={{ maxWidth: "608px", height: "297px", padding: "30px", display: "flex", gap: "20px" }}>
        //                 <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        //                     <Image src="/assets/location.png" width={40} height={40} />
        //                     <span>Place</span>
        //                 </div>
        //                 <div>
        //                     <p>Find a class, school, playground, auditorium, studio, shop <br /> or an event venue. Book a slot at venues that allow <br /> booking through hobbycue.</p>
        //                 </div>
        //                 <div>
        //                     <button style={{borderColor:"#8064A2"}} type="button" class="btn ">Meet Up</button>
        //                 </div>
        //             </div>
                
        //     </div>

        //     <div class='row' style={{ display: "flex", marginLeft: "100px", gap: "20px", marginTop: "20px" }}>
                
        //             <div class='card '  style={{ maxWidth: "608px", height: "297px", padding: "30px", display: "flex", gap: "20px" }}>
        //                 <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        //                     <Image src="/assets/shopping.png" width={40} height={40} />
        //                     <span>Product</span>
        //                 </div>
        //                 <div>
        //                     <p>Find equipment or supplies required for your hobby. Buy, <br /> rent or borrow from shops, online stores or from <br /> community members.</p>
        //                 </div>
        //                 <div>
        //                     <button style={{borderColor:"#8064A2"}} type="button" class="btn ">Get It</button>
        //                 </div>
        //             </div>
                
        //             <div class='card ' style={{ maxWidth: "608px", height: "297px", padding: "30px", display: "flex", gap: "20px" }}>
        //                 <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        //                     <Image src="/assets/event.png" width={40} height={40} />
        //                     <span>Program</span>
        //                 </div>
        //                 <div>
        //                     <p>Find events, meetups and workshops related to your <br /> hobby. Register or buy tickets online.</p>
        //                 </div>
        //                 <div>
        //                     <button style={{borderColor:"#8064A2"}} type="button" class="btn ">Attend</button>
        //                 </div>
        //             </div>
                
        //     </div>
        // </div>
    )
}

export default Feature