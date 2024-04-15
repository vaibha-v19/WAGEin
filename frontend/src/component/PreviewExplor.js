import React, { useEffect, useState } from 'react'
import photo from '../img/dsa.png'
import photo1 from '../img/web1.png'
import photo2 from '../img/web2.png'
import photo3 from '../img/web3.png'
import photo4 from '../img/web4.png'
import photo5 from '../img/web5.png'
import photo6 from '../img/web6.png'
import photo7 from '../img/web7.png'
import photo8 from '../img/web8.png'
import photo9 from '../img/tech.png'
import Navbar from './Navbar'
import Explore from './Explore'
import axios from 'axios'



function Dsa(porps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th><br/>
          <th>Price</th>
          <th>Rating</th>
          <th>Views</th>
          <th>Course Link</th>
           <th>You tube Link</th>
        </tr>
      </thead>
      <tbody>
        {porps.data.map((course) => (
          <tr key={course.id}>
            <td>{course.description}</td><br/>
            <td>{course.price}</td>
            <td>{course.rating}</td>
            <td>{course.views}</td>
            <td>
              <a href={course.file_courselink}>Course Link</a>
            </td>
            <td>
              <a href={course.file_ytlink}>You tube Link</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function AndroidDev(porps) {
  return (
    <table>
      <thead>
        <tr>
          {/* <th>Category</th> */}
          <th>Description</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Views</th>
          <th>Course Link</th>
        </tr>
      </thead>
      <tbody>
        {porps.data.map((course) => (
          <tr key={course.id}>
            {/* <td>{course.category}</td> */}
            <td>{course.description}</td>
            <td>{course.price}</td>
            <td>{course.rating}</td>
            <td>{course.views}</td>
            <td>
              <a href={course.file_courselink}>Course Link</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function WebDev(porps) {
  return (
    <table>
      <thead>
        <tr>
          {/* <th>Category</th> */}
          <th>Description</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Views</th>
          <th>Course Link</th>
        </tr>
      </thead>
      <tbody>
        {porps.data.map((course) => (
          <tr key={course.id}>
            {/* <td>{course.category}</td> */}
            <td>{course.description}</td>
            <td>{course.price}</td>
            <td>{course.rating}</td>
            <td>{course.views}</td>
            <td>
              <a href={course.file_courselink}>Course Link</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


function Blockchain(porps) {
  return (
    <table>
      <thead>
        <tr>
          {/* <th>Category</th> */}
          <th>Description</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Views</th>
          <th>Course Link</th>
        </tr>
      </thead>
      <tbody>
        {porps.data.map((course) => (
          <tr key={course.id}>
            {/* <td>{course.category}</td> */}
            <td>{course.description}</td>
            <td>{course.price}</td>
            <td>{course.rating}</td>
            <td>{course.views}</td>
            <td>
              <a href={course.file_courselink}>Course Link</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}



function Ai(porps) {
  return (
    <table>
      <thead>
        <tr>
          {/* <th>Category</th> */}
          <th>Description</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Views</th>
          <th>Course Link</th>
        </tr>
      </thead>
      <tbody>
        {porps.data.map((course) => (
          <tr key={course.id}>
            {/* <td>{course.category}</td> */}
            <td>{course.description}</td>
            <td>{course.price}</td>
            <td>{course.rating}</td>
            <td>{course.views}</td>
            <td>
              <a href={course.file_courselink}>Course Link</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}



function MachineLearning(porps) {
  return (
    <table>
      <thead>
        <tr>
          {/* <th>Category</th> */}
          <th>Description</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Views</th>
          <th>Course Link</th>
        </tr>
      </thead>
      <tbody>
        {porps.data.map((course) => (
          <tr key={course.id}>
            {/* <td>{course.category}</td> */}
            <td>{course.description}</td>
            <td>{course.price}</td>
            <td>{course.rating}</td>
            <td>{course.views}</td>
            <td>
              <a href={course.file_courselink}>Course Link</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


function Cybersecurity(porps) {
  return (
    <table>
      <thead>
        <tr>
          {/* <th>Category</th> */}
          <th>Description</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Views</th>
          <th>Course Link</th>
        </tr>
      </thead>
      <tbody>
        {porps.data.map((course) => (
          <tr key={course.id}>
            {/* <td>{course.category}</td> */}
            <td>{course.description}</td>
            <td>{course.price}</td>
            <td>{course.rating}</td>
            <td>{course.views}</td>
            <td>
              <a href={course.file_courselink}>Course Link</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function PreviewExplor() {

  const [activeField, setActiveField] = useState("Fields");
  const [data, setData] = useState([]);

  const handleButtonClick = (field) => {
    setActiveField(field);
    const height = window.innerHeight;
    window.scrollTo({
      top: height,
      left: 0,
      behavior: 'smooth'
    });

    axios.get(`http://localhost:8080/auth/api/fetch/${activeField}`)
      .then(response => setData(response.data))
      .catch(error => console.log(error));

    console.log(data, "THIS IS data")

  };






  return (
    <>


      <Navbar />
      <div className="heeed">
        <div className="explorepage">
          <div className="techHead" style={{ width: "50%" }}>
            <h1 style={{ padding: "120px 0px 0 50px", color: "#022446" }}>EXPLORE FIELDS</h1>
            <h6 style={{ padding: "0 0px 0 50px" }}>Choosing a field in the tech industry can be a challenging task, especially since there are so many options available</h6>
          </div>
          <div className="techimg">
            <img src={photo9} alt="" style={{ width: "300px", marginLeft: "120px" }} />
          </div>
        </div>
        <h4 style={{ color: "#ff8400", padding: "50px 0", textAlign: "center", fontSize: "2rem" }}>
          {activeField}
        </h4>
        <div className='explorePagebtn'>
          <div className="buttexplore">
            <button className='btn btn-primary' onClick={() => handleButtonClick("Web Development")}>Web Development</button>
            <button className='btn btn-primary' onClick={() => handleButtonClick("Android Development")}>Android Development</button>
            <button className='btn btn-primary'    onClick={() => handleButtonClick("Data Structures and Algorithms")}>Data Structures and Algorithms</button>
            <button className='btn btn-primary' onClick={() => handleButtonClick("Blockchain")}>Blockchain </button>
            <button className='btn btn-primary' onClick={() => handleButtonClick("Artificial Intelligence")}>Artificial Intelligence</button>
            <button className='btn btn-primary' onClick={() => handleButtonClick("Machine Learning")}>Machine Learning</button>
            <button className='btn btn-primary' onClick={() => handleButtonClick("Cybersecurity")}>Cybersecurity</button>
          </div>
        </div>
        {activeField === "Web Development" && <WebDev  data={data} active={activeField}/>}
        {activeField === "Android Development" && <AndroidDev data={data} active={activeField} />}
        {activeField === "Data Structures and Algorithms" && <Dsa data={data} active={activeField}/>}
        {activeField === "Blockchain" && <Blockchain data={data} active={activeField} />}
        {activeField === "Artificial Intelligence" && <Ai data={data} active={activeField} />}
        {activeField === "Machine Learning" && <MachineLearning data={data} active={activeField} />}
        {activeField === "Cybersecurity" && <Cybersecurity data={data} active={activeField} />}
      </div>
    </>
  )
}

