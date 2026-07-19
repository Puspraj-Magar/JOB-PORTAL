import { setAllAppliedJobs } from '@/redux/jobSlice';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetAppliedJobs = () => {
  const dispatch = useDispatch();
  const { searchedQuery } =useSelector(store=>store.job)
    useEffect(()=> {
        const fetchAppliedJobs = async()=>{
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/get?keyword=${searchedQuery}` , {withCredentials:true});
            console.log(res.data);
            
            if(res.data.success){
                dispatch(setAllAppliedJobs(res.data.application))
                console.log("Dispatching applications:", res.data.application);
            }
        } catch (error) {
        console.log(
          "Applied jobs error:",
          error.response?.data || error.message
        );

        dispatch(setAllAppliedJobs([]));
      }
        }
        fetchAppliedJobs();

    },[dispatch])
}

export default useGetAppliedJobs
