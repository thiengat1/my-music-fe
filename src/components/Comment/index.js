/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-02-20 23:35:36
 * @LastEditTime: 2022-03-09 16:48:05
 * @LastEditors: Lewis
 */
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import {
  getCommentStart,
  setCommentRealTime,
  saveCommentStart,
} from "../../redux/music/music.actions";

import { handleSendMessage } from "../../utils/socket";
import styles from "./Comment.module.scss";
import { convertDate } from "../../utils/date-time";
import Avatar from "../Avatar";

const CommentForm = (props) => {
  const {
    token,
    username,
    videoId,
    handleGetComment,
    currentComment,
    handleSetCommentRealTime,
    handleSaveComment
  } = props;

  const [comment, setComment] = useState("");

  useEffect(() => {
    handleGetComment({ videoId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  const handleSendComment = () => {
    const params = { username, videoId, comment, createdAt: new Date() };
    handleSendMessage("comment", params);
    handleSetCommentRealTime(params);
    handleSaveComment(params)
    setComment("");
  };
  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      handleSendComment();
    }
  };
  return (
    <div className={styles.container}>
      {token && (
        <div className={styles.commentInput}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Add a comment"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              onKeyPress={handleKeyPress}
            />
          </Form.Group>
        </div>
      )}

      {currentComment &&
        currentComment.map((item, index) => (
          <div className={styles.commentHistory} key={index}>
            <Avatar username={item.username}/>
            <div className={styles.commentHistoryContent}>
              <div className={styles.commentHistoryAuthor}>
                <span className={styles.commentHistoryAuthorName}>
                  {item.username}
                </span>
                <span className={styles.commentHistoryAuthorTime}>
                  {convertDate(item.createdAt)}
                </span>
              </div>
              <div>{item.comment}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
  username: state.auth.username,
  currentComment: state.music.currentComment,
});
const mapDispatchToProps = (dispatch) => ({
  handleGetComment: (payload) => dispatch(getCommentStart(payload)),
  handleSetCommentRealTime: (payload) => dispatch(setCommentRealTime(payload)),
  handleSaveComment: (payload) => dispatch(saveCommentStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
