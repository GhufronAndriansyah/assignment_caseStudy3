import React, {Component} from "react";
import $ from "jquery";
import Media from '../Components/Media'; 
class gallery extends Component {
    render(){
        return( 
            <div className="container">   
                <div className=" container ">  
                <Media image="adiwiyata1.jpg">
                    Memiliki banyak tanaman untuk mengurangu polusi udara
                    </Media>  
                <Media image="adiwiyata2.jpg">
                    Bekerja sama dalam merawat tanaman
                    </Media>  
                <Media image="adiwiyata3.jpg">
                    Kebun tanaman sekolah
                    </Media>  
                <Media image="adiwiyata4.jpg">
                    Tidak hanya siswa, tapi guru juga merawat tanaman   
                    </Media>  
                </div>
            </div>   
                
        );
    }
}
export default gallery;