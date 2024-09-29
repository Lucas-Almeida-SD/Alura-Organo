import PropTypes from 'prop-types';

export const collaboratorPropTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export const teamPropTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  collaborators: PropTypes.arrayOf(PropTypes.shape(collaboratorPropTypes)).isRequired,
};

export const teamsPropTypes = {
  programacao: PropTypes.shape(teamPropTypes),
  frontEnd: PropTypes.shape(teamPropTypes),
  dataScience: PropTypes.shape(teamPropTypes),
  devops: PropTypes.shape(teamPropTypes),
  uxAndDesign: PropTypes.shape(teamPropTypes),
  mobile: PropTypes.shape(teamPropTypes),
  innovationAndManagement: PropTypes.shape(teamPropTypes),
};
