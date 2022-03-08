/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-02-13 23:33:01
 * @LastEditTime: 2022-03-05 00:30:44
 * @LastEditors: Lewis
 */
//import LoadingOverlay from "react-loading-overlay";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import styles from "./Loading.module.scss";

const GlobalLoading = (props) => {
  const { globalLoading } = props;

  return (
    globalLoading && (
      <div className={styles.container}>
        <Spinner animation="border" variant="primary" />
      </div>
    )
  );
};
const mapStateToProps = (state) => ({
  globalLoading: state.auth.loading,
});
export default connect(mapStateToProps)(GlobalLoading);
