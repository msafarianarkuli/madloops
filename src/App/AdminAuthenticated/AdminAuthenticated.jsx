import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { logIn } from "../../store/auth/authSlice";
import { useGetEmployeeQuery } from "../../store/teacherManager/teacherApiSlice";
import { DecodeToken } from "./../../Core/utils/decodeToken";

const AdminAuth = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const id = DecodeToken(token);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetEmployeeQuery({
    id: id._id,
    token: token,
  });
  console.log(data, isLoading);
  // console.log(employe);
  useEffect(() => {
    if (data) {
      dispatch(logIn({ user: data, token: token }));

      navigate("/");
    }
  }, [data]);

  return null;
};

export default AdminAuth;
