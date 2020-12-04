import React, { useEffect, useState } from 'react';

import Dashboard from '../components/Dashboard';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/jobActions';
import JobList  from '../components/JobListLatest';
import JobForm  from '../components/JobForm';
import Axios from "axios";

export default function HomeScreen() {
  const jobDetails = useSelector((state) => state.jobDetails);

  const { job ,isHideTable, isHideForm} = jobDetails;

  const [jobListData, setJobListData] = useState()

  useEffect(() => {
    async function getData() {
      await Axios.get('http://10.1.2.4:5000/job/')
        .then(resp => {
          setJobListData(resp?.data)
        })
    }
    if (!isHideTable)
    getData()
  }, [isHideTable])
  return (
     <div>
             {isHideTable ? "": <JobList tableData={jobListData} />}
             { isHideForm ? "": <JobForm job={job}/>}
    </div>
  );
}
