export default (theme) => ({
  title: {
    lineHeight: "1.2",
    fontFamily: "sans-serif",
    fontSize: "27px",
    fontWeight: 700,
    margin: "0 0 5px",

    [theme.breakpoints.only("xs")]: {},
  },
  content: {
    fontFamily: "sans-serif",

    "& h2, h3, h4, h5, h6": {},
    "& h2": {
      marginTop: 30,
      position: "relative",
      display: "inline-block",
      fontWeight: "bolder",

      "&:after": {
        content: `'¶'`,
        position: "absolute",
        right: -33,
        width: 15,
        height: 30,
        color: "#DDD",
      },
    },
    "& blockquote": {
      borderLeft: "solid 4px #d2d6db",
      padding: "0 0 0 20px",
      margin: "30px 0",
    },
    "& code:not(.hljs)": {
      padding: ".2em .4em",
      margin: "0",
      fontSize: "85%",
      backgroundColor: "rgb(240, 239, 239)",
      borderRadius: "3px",
    },
    "& .img-float": {
      [theme.breakpoints.up("sm")]: {
        float: "right",
        width: "120px",
        height: "145px",
        marginLeft: "15px",
      },
    },
    "& small": {
      fontSize: "16px",
      display: "block",
      opacity: "0.5",
    },
    "& ol": {
      padding: "0 0 0 30px",

      "& li": {
        marginBottom: 7,
      },
    },
    "& ul": {
      padding: "0 0 0 30px",

      "& li": {
        marginBottom: 7,
      },
    },
    "& .section-group-about": {
      margin: "0 0 35px",

      "&.noMargin": {
        margin: 0,
      },
      "& ul": {
        padding: "0",
        listStyleType: "none",
      },

      "& strong": {
        fontWeight: "bold",
      },
    },
    "& .container-sm": {
      maxWidth: "500px",
    },
    "& sub": {
      lineHeight: ".2em",
    },
  },
  postCoverImg: {
    margin: "17px 0 30px",
  },
  titleContainer: {
    margin: "20px 0 25px",
  },
  published: {
    fontStyle: "italic",
    fontSize: 16,
  },
});
