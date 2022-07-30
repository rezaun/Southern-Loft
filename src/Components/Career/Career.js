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
            <th scope="row">Senior React Js Developer</th>
            <td>Web Team</td>
            <td>Hon's in Any Decipline</td>
            <td><a href="javascript:void(0)">Apply Now</a></td>
          </tr>
          <tr>
            <th scope="row">WordPress Developer</th>
            <td>WordPress Team</td>
            <td>Hon's in Any Decipline</td>
            <td><a href="javascript:void(0)">Apply Now</a></td>
          </tr>
          <tr>
            <th scope="row">Node Js Developer</th>
            <td >Web Team</td>
            <td>Hon's in Any Decipline</td>
            <td><a href="javascript:void(0)">Apply Now</a></td>
          </tr>
          <tr>
            <th scope="row">Mobile App Developer</th>
            <td >Mobile Team</td>
            <td>Hon's in Any Decipline</td>
            <td><a href="javascript:void(0)">Apply Now</a></td>

          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default Career;