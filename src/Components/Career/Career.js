import React from 'react';
import './Carrer.css'

const Career = () => {
    return (
        <div className='pt-5 container mt-5 pb-5 mb-5'>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Dept.</th>
      <th scope="col">Education</th>
      <th scope="col">Apply</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">HR.Admin.</th>
      <td>HR</td>
      <td>Bsc</td>
      <td><a href="">Apply</a></td>
    </tr>
    <tr>
      <th scope="row">SR</th>
      <td>Marketing</td>
      <td>BBA</td>
      <td><a href="">Apply</a></td>
    </tr>
    <tr>
      <th scope="row">Sr.Enginner</th>
      <td >Service</td>
      <td>BSC</td>
      <td><a href="">Apply</a></td>
      
    </tr>
  </tbody>
</table>
         
        </div>
    );
};

export default Career;