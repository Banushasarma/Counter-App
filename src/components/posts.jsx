import React from "react";

const Posts = ({ match }) => {
  return (
    <div>
      Year:{match.params.year},Month:{match.params.month}
    </div>
  );
};

export default Posts;
