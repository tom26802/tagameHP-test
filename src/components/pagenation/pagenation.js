import React from "react";
import styled from 'styled-components';
import { navigate } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
  root: {
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `center`,
    alignItems: "center",
  },
}));

const Pagenation = ({ pageContext }) => {
  const classes = useStyles();
  const { numberOfPages, humanPageNumber } = pageContext;

  const handleChange = (event, value) => {
    value === 1 ? navigate(`/news`) : navigate(`/news/${value}`);
  };
  return (
    <Sdiv>
        <div className={classes.root}>
          <Pagination
            defaultPage={humanPageNumber}
            count={numberOfPages}
            color="primary"
            onChange={handleChange}
          />
        </div>
    </Sdiv>
  );
};
export default Pagenation;

const Sdiv=styled.div`
    margin-top:40px;
`