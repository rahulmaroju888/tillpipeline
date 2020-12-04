import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Pipeline from '../components/PipeLine';
import {jobLatest} from '../actions/jobActions';


export default function PipelineScreen(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobLatest(props.match.params.id));

  }, []);
  

  const jobLatestState = useSelector((state) => state.jobLatest);

  return (
    <Pipeline job={jobLatestState.job} />
  );
}
