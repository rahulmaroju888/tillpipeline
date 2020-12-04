import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import JobFormLatest from '../components/JobFormLatest';
import {jobLatest} from '../actions/jobActions';


export default function JobInfoScreen(props) {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(jobLatest(props.match.params.id));

  }, []);

  const jobLatestState = useSelector((state) => state.jobLatest);

  return (
    <JobFormLatest job={jobLatestState.job} />
  );
}
