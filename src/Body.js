import React from 'react';
import './index.css';
import Avatar from 'react-avatar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReactImageZoom from 'react-image-zoom';

export default class Body extends React.Component {

    constructor() {
        super();
        this.state = {
           watch: true,
           show: false,
           image: 1,
        }
     }

     
     showMore=()=>{
         this.setState({
             show:!(this.state.show)
         })
     }
    WatchLater=()=>{
        this.setState({
            watch: !(this.state.watch)
        })
        toast.dark("Added to Wishlist !",  
        {position: toast.POSITION.TOP_CENTER, hideProgressBar: true, autoClose:3000})
    }
    EnlargeHandler=(num)=>{
            this.setState({
                image : num
            })
    }


    render(){
        const props={zoomPosition:'left', width:290,scale:0.4, height: 200, img:"https://upload.wikimedia.org/wikipedia/en/9/97/Angry_Birds_2.png"};
        const props3={zoomPosition:'left',width:290, scale:0.4,height: 200, img:"https://i.ytimg.com/vi/DlHv8R-_cTA/maxresdefault.jpg"};
        const propss={zoomPosition:'left', scale:0.4, width:290, height: 200, img:"https://img.etimg.com/thumb/msid-52166869,width-1200,height-900,imgsize-50741,overlay-etpanache/photo.jpg"}
        return(
            <div>
                
            
            <div className="MainBody">
            
            
                <div className="LeftBody" style={{height: window.innerHeight*0.82}}>
                
               
                    <div className="CoverImage">
                        <img src="https://bestcoverpix.com/wp-content/uploads/2014/02/angry-birds-cover.jpg"
                        alt="cover" className="Images"/>               
                    </div>   

                    <div className="mainTitle">             
                        <div className="TitleMovie" >
                            <h3 style={{fontSize:13, marginLeft:20,color:'rgb(75, 74, 74)'}}>
                                Angry Birds 2 (2019) 
                            </h3>

                            <p style={{marginLeft:25, fontSize:11,marginTop:15}}>
                               <span style={{fontWeight:'600',color:'rgb(75, 74, 74)'}}>Genere:</span>  Animation
                            </p>

                            <p style={{marginLeft:25, fontSize:11,marginTop:15}}>
                               <span style={{fontWeight:'600',color:'rgb(75, 74, 74)'}}>Release Date:</span>  November 15, 2020
                            </p>

                            {this.state.watch?
                            
                            <button className="WatchLater" onClick={()=>this.WatchLater()} style={{outline:'none'}}>
                                Add To Watch Later
                            </button>
                            :
                            <div>
                            <button className="WatchLaterPressed" onClick={()=>this.WatchLater()} style={{outline:'none'}}>
                                Add To Watch Later
                            </button><ToastContainer  toastClassName="dark-toast" bodyClassName="toastify"
                             progressClassName="timer"/></div>
                            }
                        </div>
                    </div>

                    <div className="Direction">
                        <p>
                            <span style={{fontWeight:'600', color:'rgb(75, 74, 74)'}}>Directed By: </span>Thurop Van Orman
                        </p>
                        <p>
                            <span style={{fontWeight:'600',color:'rgb(75, 74, 74)'}}>Writing Credits: </span>Peter Ackman, Jason Sukies
                        </p>

                        <p className="casting">
                        <span style={{fontWeight:'600'}}>Cast: </span>
                        </p>
                        <div className="Cast">
                            
                                    <Avatar  
                                    size="27" round
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/54/Peter_Dinklage_by_Gage_Skidmore.jpg" />

                                    <Popup trigger={
                                    <p className="castName" style={{cursor:'pointer'}}>Peter Dinklage</p>}position="right center" className="popup-arrow">

                                    <div className="popup">
                                    <img style={{width:20, height:20, marginTop:5}}
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/54/Peter_Dinklage_by_Gage_Skidmore.jpg"/>
                                    <p className="castName" style={{lineHeight:1.6}}>
                                   <span style={{fontWeight:'bold'}}> Peter Hayden Dinklage</span> ( born June 11, 1969) is an American actor and producer. He received acclaim for portraying Tyrion Lannister on the HBO television series Game of Thrones from 2011 to 2019, for which he won the Primetime Emmy Award for Outstanding Supporting Actor in a Drama Series a record four times.</p></div>
                                    
                                    </Popup>

                                    <Avatar  
                                    size="27" round
                                    src="https://pyxis.nymag.com/v1/imgs/696/3eb/ddc761b580e626d8ca9fbd04df20b681c0-22-bill-hader-2.rsquare.w700.jpg"/>

                                    <Popup trigger={
                                    <p className="castName" style={{cursor:'pointer'}}>Bill Hader</p>}position="right center" className="popup-arrow">

                                    <div className="popup">
                                    <img style={{width:20, height:20, marginTop:5}}
                                    src="https://pyxis.nymag.com/v1/imgs/696/3eb/ddc761b580e626d8ca9fbd04df20b681c0-22-bill-hader-2.rsquare.w700.jpg"/>
                                    <p className="castName" style={{lineHeight:1.6}}>
                                   <span style={{fontWeight:'bold'}}> Bill Hader</span> ( born June 11, 1969) is an American actor and producer. He received acclaim for portraying Tyrion Lannister on the HBO television series Game of Thrones from 2011 to 2019, for which he won the Primetime Emmy Award for Outstanding Supporting Actor in a Drama Series a record four times.</p></div>
                                    
                                    </Popup>

                                    <Avatar  
                                    size="27" round
                                    src="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/07/12/bddbc3bc-a38e-11e9-9a3c-98259c87fba2_image_hires_015643.jpg?itok=kfL6j7gi&v=1562867811"/>

                                    <Popup trigger={
                                    <p className="castName" style={{cursor:'pointer'}}>Awakwafina</p>}position="right center" className="popup-arrow">

                                    <div className="popup">
                                    <img style={{width:20, height:20, marginTop:5}}
                                    src="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/07/12/bddbc3bc-a38e-11e9-9a3c-98259c87fba2_image_hires_015643.jpg?itok=kfL6j7gi&v=1562867811"/>
                                    <p className="castName" style={{lineHeight:1.6}}>
                                   <span style={{fontWeight:'bold'}}> Awakwafina</span> ( born June 11, 1969) is an American actor and producer. He received acclaim for portraying Tyrion Lannister on the HBO television series Game of Thrones from 2011 to 2019, for which he won the Primetime Emmy Award for Outstanding Supporting Actor in a Drama Series a record four times.</p></div>
                                    
                                    </Popup>
                                    <Avatar  
                                    size="27" round
                                    src="https://s3.r29static.com/bin/entry/f49/x,80/1908965/image.jpg"/>

                                    <Popup trigger={
                                    <p className="castName" style={{cursor:'pointer'}}>Dove Cameron</p>}position="right center" className="popup-arrow">

                                    <div className="popup">
                                    <img style={{width:20, height:20, marginTop:5}}
                                    src="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/07/12/bddbc3bc-a38e-11e9-9a3c-98259c87fba2_image_hires_015643.jpg?itok=kfL6j7gi&v=1562867811"/>
                                    <p className="castName" style={{lineHeight:1.6}}>
                                   <span style={{fontWeight:'bold'}}> Dove Cameron</span> ( born June 11, 1969) is an American actor and producer. He received acclaim for portraying Tyrion Lannister on the HBO television series Game of Thrones from 2011 to 2019, for which he won the Primetime Emmy Award for Outstanding Supporting Actor in a Drama Series a record four times.</p></div>
                                    
                                    </Popup>

                                    <Avatar  
                                    size="27" round
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Rachel_Bloom_at_37th_College_Television_Awards-adj_%28cropped%29.jpg/220px-Rachel_Bloom_at_37th_College_Television_Awards-adj_%28cropped%29.jpg"/>

                                    <Popup trigger={
                                    <p className="popup-arrow" className="castName" style={{cursor:'pointer'}}>Rachel Bloom</p>}position="right center" className="popup-arrow">

                                    <div className="popup">
                                    <img style={{width:20, height:20, marginTop:5}}
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Rachel_Bloom_at_37th_College_Television_Awards-adj_%28cropped%29.jpg/220px-Rachel_Bloom_at_37th_College_Television_Awards-adj_%28cropped%29.jpg"/>
                                    <p className="castName" style={{lineHeight:1.6}}>
                                   <span style={{fontWeight:'bold'}}> Rachel Bloom</span> ( born June 11, 1969) is an American actor and producer. He received acclaim for portraying Tyrion Lannister on the HBO television series Game of Thrones from 2011 to 2019, for which he won the Primetime Emmy Award for Outstanding Supporting Actor in a Drama Series a record four times.</p></div>
                                    
                                    </Popup>

                                    <Popup trigger={<button style={{ marginLeft:30, color:'#007eef', outline:'none'}} className="SeeAll"> 
                                    See Full Cast & Crew</button>} position="right center" className="popup-arrow">
                                        <div className="popup">
                                        <Avatar  
                                    size="27" round
                                    src="https://s3.r29static.com/bin/entry/f49/x,80/1908965/image.jpg"/>

                                    <p className="castNames">Dove Cameron</p></div>
                                        <div className="popup"><Avatar  
                                    size="27" round
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/54/Peter_Dinklage_by_Gage_Skidmore.jpg"/>

                                    <p className="castNames">Awakwafina</p></div>
                                        <div className="popup"><Avatar  
                                    size="27" round
                                    src="https://s3.r29static.com/bin/entry/f49/x,80/1908965/image.jpg"/>

                                    <p className="castNames">Rachel Bloom</p></div>
                                        <div className="popup"><Avatar  
                                    size="27" round
                                    src="https://pyxis.nymag.com/v1/imgs/696/3eb/ddc761b580e626d8ca9fbd04df20b681c0-22-bill-hader-2.rsquare.w700.jpg"/>

                                    <p className="castNames">Bill Hader</p></div>
                                        <div className="popup"><Avatar  
                                    size="27" round
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Rachel_Bloom_at_37th_College_Television_Awards-adj_%28cropped%29.jpg/220px-Rachel_Bloom_at_37th_College_Television_Awards-adj_%28cropped%29.jpg"/>

                                    <p className="castNames">Rachel Bloom</p></div>
                                    </Popup>

                        
                            
                        </div>

                        <div>
                            <p style={{fontWeight:'bold', marginTop:10, marginBottom:10}}>Screenshots:</p>
                        </div>
                        <div className="Screenshot">

                        <div className="areaimage">
                        <img src="https://img.etimg.com/thumb/msid-52166869,width-1200,height-900,imgsize-50741,overlay-etpanache/photo.jpg"
                        alt="cover" className="ss" onMouseEnter={(num)=>this.EnlargeHandler(1)}/>  </div>

                        <div className="areaimage">
                        <img src="https://upload.wikimedia.org/wikipedia/en/9/97/Angry_Birds_2.png"
                        alt="cover" className="ss" onMouseEnter={(num)=>this.EnlargeHandler(2)}/>  </div>
    
                        <div className="areaimage">
                        <img src="https://i.ytimg.com/vi/DlHv8R-_cTA/maxresdefault.jpg"
                        alt="cover" className="ss" onMouseEnter={(num)=>this.EnlargeHandler(3)}/>  </div>
                        
                        {this.state.image===1? 

                        <div className="enlarge">                       
                        <ReactImageZoom
                        {...propss}
                        /></div>
                        /*<img src="https://img.etimg.com/thumb/msid-52166869,width-1200,height-900,imgsize-50741,overlay-etpanache/photo.jpg"
                        alt="cover" className="enlarge"/> */
                        : [
                            (this.state.image===2? 
                                <div className="enlarge"> 
                                <ReactImageZoom
                                    {...props}
                                    /></div>
                                /*<img src="https://upload.wikimedia.org/wikipedia/en/9/97/Angry_Birds_2.png"
                        alt="cover" className="enlarge"/>*/:[
                            (this.state.image===3?
                                <div className="enlarge"> 
                                <ReactImageZoom
                                    {...props3}
                                    /></div>
                                /*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSm7wpkdZyFP62MAmhrhAdLsUgOXhpK1PbHhwaNRAaJlWpNGG4OtYQHQVpwULnyEPTym4k2egQUVkCSLSktaNluqZOsx2Nlni2SzxgP9Tc&usqp=CAU&ec=45725304"
                        alt="cover" className="enlarge" />*/:null)
                        ])
                        ]} 

                        </div>
                       

                        <div>
                            <p style={{fontWeight:'bold', marginTop:-15}}>Description:</p>

                            <div className="showMore">
                            {this.state.show ?
                                <p style={{fontSize:11, marginBottom:15, outline:'none'}} className="des">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<span><button onClick={()=>this.showMore()} className="showing"> show less</button></span></p>
                            
                            :
                            <p style={{fontSize:11, marginBottom:15,outline:'none'}} className="des">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            <span><button onClick={()=>this.showMore()} className="showing" > show more</button></span></p>

                            }</div>
                        </div>
                        
           
                    </div>
                    
                    
                </div>

                <div className="RightBody" style={{height: window.innerHeight*0.8}}>

                        <div style={{height:220, backgroundColor:'#fff', borderRadius:12, marginTop:20, padding:5}}  >
                                 
                                    <h6 style={{marginTop:10 , marginLeft:15}}>Movie of The Month</h6>
                                    <img src="data:image/jpeg;base64,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"
                                    alt="cover" className="ss2"/> 
                                    
                                    <p style={{fontWeight:'900', color:'rgb(75, 74, 74)', fontSize:12,
                                    marginLeft:17, marginTop:-7}}>How to Train Your Dragon</p>
                                    <p style={{ color:'grey', fontSize:10,
                                    marginLeft:17, marginTop:-7}}><span style={{fontWeight:'600', color:'#000'}}>

                                    Release Date:</span> January9, 2021</p>

                                    <p style={{ color:'grey', fontSize:10,
                                    marginLeft:17, marginTop:-7}}><span style={{fontWeight:'600', color:'#000'}}>

                                    Gross Income:</span> $100,245,25,45</p>
                        </div>

                    <div style={{height:270, backgroundColor:'#fff', borderRadius:12, marginTop:15, padding:5}} className="UpcomingCard">

                            <h6 style={{marginTop:6, marginLeft:15}}>Upcoming Movies</h6>
                            <div class="UpComingMovies">
                                   
                                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/94/John_Wick_Chapter_3_Parabellum.png/220px-John_Wick_Chapter_3_Parabellum.png"
                                        alt="jonwick" className="Similar" />
                                     <div className="description">
                                        <p className="titleMovie">John Wick: Chapter 3</p>
                                        <p style={{fontSize:10, marginTop:-7}}>Release Date: <span style={{color:'grey'}}>
                                           August 13, 2023
                                        </span> </p>
                                    </div>
                            </div>

                            <div class="UpComingMovies">
                                   
                                        <img src="https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_.jpg"
                                        alt="jonwick" className="Similar" />
                                     <div className="description">
                                        <p className="titleMovie">Aladdin</p>
                                        <p style={{fontSize:10, marginTop:-7}}>Release Date: <span style={{color:'grey'}}>
                                           August 13, 2023
                                        </span> </p>
                                    </div>
                            </div>

                            <div class="UpComingMovies">
                                   
                                        <img src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/the-lion-king-movie-poster-image0.jpg?itok=ILK65PMU"
                                        alt="jonwick" className="Similar" />
                                     <div className="description">
                                        <p className="titleMovie">Lion King</p>
                                        <p style={{fontSize:10, marginTop:-7}}>Release Date: <span style={{color:'grey'}}>
                                           August 13, 2023
                                        </span> </p>
                                    </div>
                            </div>

                            <div class="UpComingMovies">
                                   
                                        <img src="https://i.ytimg.com/vi/8pR0o2fGyHg/maxresdefault.jpg"
                                        alt="jonwick" className="Similar" />
                                     <div className="description">
                                        <p className="titleMovie">Spider Man: Far From Home</p>
                                        <p style={{fontSize:10, marginTop:-7}}>Release Date: <span style={{color:'grey'}}>
                                           August 13, 2023
                                        </span> </p>
                                    </div>
                            </div>

                            <div class="UpComingMovies">
                                   
                                        <img src="https://ca-times.brightspotcdn.com/dims4/default/d79b3ca/2147483647/strip/true/crop/1920x1080+0+0/resize/1486x836!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F81%2F05%2F1c3595174bc8a09ed2b3e697391a%2Fla-photos-handouts-la-ca-pokemon-mewtwo-strikes-back-evolution-movie-453.JPG"
                                        alt="jonwick" className="Similar" />
                                     <div className="description">
                                        <p className="titleMovie">Pokemon The Movie</p>
                                        <p style={{fontSize:10, marginTop:-7}}>Release Date: <span style={{color:'grey'}}>
                                           August 13, 2023
                                        </span> </p>
                                    </div>
                            </div>
                    </div>

                </div>
            </div></div>
        )
    }

}