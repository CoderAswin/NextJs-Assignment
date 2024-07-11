
import Image from 'next/image';
const Testimonials = () => {
  return (
    <div className="container-fluid" style={{ marginTop: "103px", backgroundColor: "#F7F5F9", paddingTop: "50px", paddingBottom: "50px" }}>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="d-flex align-items-center mb-3">
            <Image src="/assets/quote.png" width={40} height={40} alt="Quote" />
            <span className="ms-3">Testimonials</span>
          </div>
          <p className="text-justify" style={{ fontSize: "18px", lineHeight: "30px" }}>
            In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
          </p>
          <div className="d-flex flex-column flex-md-row gap-4 mt-4">
            <div className="flex-grow-1">
              <Image src="/assets/AudioTrack.png" width={776} height={100} alt="Audio Track" />
            </div>
            <div className="flex-grow-1">
              <Image src="/assets/Group108.png" width={304} height={100} alt="Group 108" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div style={{ marginTop:"103px" , display:"flex" , gap:"20px" , flexDirection:"column" , backgroundColor:"#F7F5F9" , paddingLeft:"100px" , paddingTop:"50px" , paddingBottom:"50px"}}>
    //     <div style={{ display:"flex" , gap:"20px" , alignItems:"center"}}>
    //         <Image src="/assets/quote.png" width={40} height={40}/>
    //         <span>Testimonials</span>
    //     </div>
    //     <div>
    //         <p style={{fontSize:"18px" , lineHeight:"30px"}}>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like <br /> minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and <br /> exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I <br /> can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have <br /> discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an <br /> excellent idea and I highly recommend it.</p>
    //     </div>
    //     <div style={{display:"flex" , gap:"40px"}}>
    //         <div>
    //             <Image src="/assets/AudioTrack.png" width={776} height={100}/>
    //         </div>
    //         <div>
    //         <Image src="/assets/Group108.png" width={304} height={100}/>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Testimonials