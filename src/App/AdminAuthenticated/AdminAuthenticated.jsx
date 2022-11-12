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
  const { data } = useGetEmployeeQuery({
    id: id._id,
    token: token,
  });
  // console.log(employe);
  useEffect(() => {
    const dataEmployee = async () => {
      const rtl = await data;
      dispatch(logIn({ user: rtl, token: token }));
    };
    dataEmployee();
    navigate("/");
  }, []);

  return null;
};

export default AdminAuth;
