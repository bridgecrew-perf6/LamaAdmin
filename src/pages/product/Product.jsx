import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';
import Chart from "../../components/chart/Chart";
import {productData} from '../../dummyData';
import {Publish} from '@material-ui/icons';

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2020/09/05FBstbqla0pEWrlFLTw4ML-5.1569474012.fit_scale.size_1028x578.jpg" alt="" className="productInfoImg" />
                        <span className="productName">Notion WorkSpace</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">122123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form action="" className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text"  placeholder="Product Name"/>
                        <label >In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label >Active</label>
                        <select name="active" id="active">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/234903947_888112815417960_7694193086906613467_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=825194&_nc_ohc=hydX4bQ--4gAX-6_e8D&_nc_ht=scontent.fsgn3-1.fna&oh=8fc6bc75918bff8cf36a960816966ee7&oe=61402CA5" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display: "none"}}/>
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
