import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { setAllApplicants } from "@/redux/applicationsSlice";

const useGetApplicants = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const getApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_END_POINT}/${id}/applicants`,
          {
            withCredentials: true,
          }
        );

        console.log("Applicant API Response:", res.data);

        if (res.data.success) {
          dispatch(
            setAllApplicants(res.data.job.applications)
          );
        }
      } catch (error) {
        console.log(
          error.response?.data || error.message
        );
      }
    };

    getApplicants();
  }, [id, dispatch]);
};

export default useGetApplicants;