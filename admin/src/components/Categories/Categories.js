import React  from 'react';
import '../../css/Categories.css';
import edit from '../../images/pencil.svg'
import remove from '../../images/trash-can.svg'

  
  const Categories = () => {
      return (
          <div className = "Categories-container">
          <div className = "left-container">
          <div className="category_bar">
          <p>Tên danh mục</p>
          <input type="text" className = "input1" placeholder="Nhập tên" />
          </div>
          <div className="des_bar">
          <p>Mô tả</p>
          <textarea placeholder="Nhập mô tả" />
          </div>
          <div className="image_bar">
          <p>Ảnh</p>
          <input id="img" name="img" className = "input1"  placeholder="Nhập link ảnh" />
          </div>
          <div className = "filter-button">Tạo mới</div>
          </div>
          {/* <div className = "right-container">
          <table>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Mô tả</th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>1</td>
            <td>Váy</td>
            <td>Váy ngắn</td>
            <td><a href = ""><img src = {edit} /></a></td>
            <td><img src = {remove} /></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Balo</td>
            <td>Balo nhỏ, nhẹ</td>
            <td><img src = {edit}  /></td>
            <td><img src = {remove}   /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Áo khoác</td>
            <td>Áo khoác mùa hè</td>
            <td><img src = {edit}  /></td>
            <td><img src = {remove}  /></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Áo thun</td>
            <td>Áo thun thời trang</td>
            <td><img src = {edit}   /></td>
            <td><img src = {remove}   /></td>
          </tr>
        </table>
          
          </div>
         */}
          </div>
      );
  }
  
  export default Categories;
  
  