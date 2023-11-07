import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import design2 from "../assets/images/design2.png";
const PageTitle = ({ title }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href={design2} />
        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </div>
  );
};

export default PageTitle;
PageTitle.propTypes = {
  title: PropTypes.object,
};
