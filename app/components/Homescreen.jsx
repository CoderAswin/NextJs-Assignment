import Image from 'next/image';


const Homescreen = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-6" style={{ marginTop: "100px" }}>
                    <div className="ms-lg-5">
                        <h1 className="text-center text-lg-start">Explore your hobby or passion</h1>
                        <p>
                            Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers,
                            suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be
                            about visual or performing arts, sports, games, gardening, model making, cooking, indoor or
                            outdoor activities…
                        </p>
                        <p>
                            If you are an expert or a seller, you can Add your Listing and promote yourself, your students,
                            products, services or events. Hop on your hobbyhorse and enjoy the ride.
                        </p>
                        <div className="text-center">
                            <Image src="/assets/Group 27.png" width={697.07} height={216} sizes="(max-width: 697.07px)" alt="Group 27" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-5 mt-4 mt-lg-5">
                    <div className="d-flex justify-content-center justify-content-lg-start gap-3 mb-3">
                        <span>Sign In</span>
                        <span>Join In</span>
                    </div>
                    <div className="d-flex flex-column align-items-center mb-3">
                        <button type="button" className="btn btn-outline-dark w-100 mb-3" style={{ position: "relative" }}>
                            Continue with Google
                            <Image src="/assets/Google.png" width={16} height={16} style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)" }} alt="Google" />
                        </button>
                        <button type="button" className="btn btn-outline-dark w-100" style={{ position: "relative" }}>
                            Continue with Facebook
                            <Image src="/assets/Facebook.png" width={16} height={16} style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)" }} alt="Facebook" />
                        </button>
                    </div>
                    <div className="text-center my-3">Or connect with</div>
                    <div className="d-flex flex-column gap-3">
                        <input type="email" className="form-control" placeholder="Email" />
                        <input type="password" className="form-control" placeholder="Password" />
                        <div className="d-flex justify-content-between">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                                <label className="form-check-label" htmlFor="rememberMe">
                                    Remember me
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="forgotPassword" />
                                <label className="form-check-label" htmlFor="forgotPassword">
                                    Forgot password
                                </label>
                            </div>
                        </div>
                        <button type="button" className="btn btn-outline-dark w-100">Continue</button>
                    </div>
                </div>
            </div>
        </div>

        //     <div className="container-fluid">
        //   <div className="row justify-content-between">
        //     <div className="col-12 col-lg-6" style={{ marginTop: "100px" }}>
        //       <div className="ms-lg-5">
        //         <h1>Explore your hobby or passion</h1>
        //         <p>
        //           Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers,
        //           suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be
        //           about visual or performing arts, sports, games, gardening, model making, cooking, indoor or
        //           outdoor activities…
        //         </p>
        //         <p>
        //           If you are an expert or a seller, you can Add your Listing and promote yourself, your students,
        //           products, services or events. Hop on your hobbyhorse and enjoy the ride.
        //         </p>
        //         <div className="text-center">
        //           <Image src="/assets/Group 27.png" width={697.07} height={216} sizes="(max-width: 697.07px)" alt="Group 27" />
        //         </div>
        //       </div>
        //     </div>
        //     <div className="col-12 col-lg-5 mt-4 mt-lg-5">
        //       <div className="d-flex justify-content-end gap-3 mb-3">
        //         <span>Sign In</span>
        //         <span>Join In</span>
        //       </div>
        //       <div className="d-flex flex-column align-items-center mb-3">
        //         <button type="button" className="btn btn-outline-dark w-100 mb-3" style={{ position: "relative" }}>
        //           Continue with Google
        //           <Image src="/assets/Google.png" width={16} height={16} style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)" }} alt="Google" />
        //         </button>
        //         <button type="button" className="btn btn-outline-dark w-100" style={{ position: "relative" }}>
        //           Continue with Facebook
        //           <Image src="/assets/Facebook.png" width={16} height={16} style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)" }} alt="Facebook" />
        //         </button>
        //       </div>
        //       <div className="text-center my-3">Or connect with</div>
        //       <div className="d-flex flex-column gap-3">
        //         <input type="email" className="form-control w-100" placeholder="Email" />
        //         <input type="password" className="form-control w-100" placeholder="Password" />
        //         <div className="d-flex justify-content-between">
        //           <div className="form-check">
        //             <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
        //             <label className="form-check-label" htmlFor="rememberMe">
        //               Remember me
        //             </label>
        //           </div>
        //           <div className="form-check">
        //             <input className="form-check-input" type="checkbox" value="" id="forgotPassword" />
        //             <label className="form-check-label" htmlFor="forgotPassword">
        //               Forgot password
        //             </label>
        //           </div>
        //         </div>
        //         <button type="button" className="btn btn-outline-dark w-100">Continue</button>
        //       </div>
        //     </div>
        //   </div>
        // </div>



        // <div style={{ display: "flex", justifyContent: "space-between", width: "1440px" }}>
        //     <div  style={{ marginLeft: "100px", marginTop: "100px" }}>
        //         <div>
        //             <h1>Explore your hobby or passion</h1>
        //         </div>
        //         <div>
        //             <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, <br /> suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be <br /> about visual or performing arts, sports, games, gardening, model making, cooking, indoor or <br /> outdoor activities…</p>

        //         </div>
        //         <div>
        //             <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, <br /> products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
        //         </div>
        //         <div>
        //             <Image  src="/assets/Group 27.png" width={697.07} height={216} sizes="(max-width: 697.07px)" />

        //         </div>
        //     </div>
        //     <div  style={{ marginTop: "95px"  , marginLeft:"20px"}}>
        //         <div style={{ display: "flex", gap: "32px" }}>
        //             <span>Sign In</span>
        //             <span>Join In</span>
        //         </div>
        //         <div style={{ marginBottom: "15px", marginTop: "20px" }}>
        //             <div style={{position:"relative"}}>

        //                 <button type="button" style={{ width: "410px", height: "40px" }} class="btn btn-outline-dark">


        //                     Continue with Google
        //                 </button>
        //                 <Image style={{position:"absolute" , top:"14px" , left:"10px"}} src="/assets/Google.png" width={16} height={16}/>
        //             </div>
        //             <div style={{position:"relative"}}>
        //                 <button type="button" style={{ width: "410px", height: "40px", marginTop: "15px" }} class="btn btn-outline-dark">
        //                     Continue with Facebook
        //                     </button>
        //                     <Image style={{position:"absolute" , bottom:"14px" , left:"10px"}} src="/assets/Facebook.png" width={16} height={16}/>
        //             </div>
        //         </div>

        //         <div class="separator">Or connect with</div>

        //         <div style={{ marginTop: "15px", display: "flex", gap: "20px", flexDirection: "column" }}>
        //             <div>
        //                 <input style={{ width: "410px" }} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
        //             </div>
        //             <div>
        //                 <input style={{ width: "410px" }} type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" />
        //             </div>
        //             <div style={{ display: "flex", gap:"110px" }}>
        //                 <div>
        //                     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        //                     <label class="form-check-label" for="flexCheckDefault" style={{ marginLeft: "10px" }}>
        //                         Remember me
        //                     </label>
        //                 </div>

        //                 <div>
        //                     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        //                     <label class="form-check-label" for="flexCheckDefault" style={{ marginLeft: "10px" }}>
        //                         Forgot password
        //                     </label>
        //                 </div>


        //             </div>
        //             <div>
        //                 <button style={{ width: "410px", height: "40px" }} type="button" class="btn btn-outline-dark">Continue</button>
        //             </div>
        //         </div>


        //     </div>


        // </div>
    )
}

export default Homescreen

//style={{ display: "flex", justifyContent: "space-between", width: "1440px" }}