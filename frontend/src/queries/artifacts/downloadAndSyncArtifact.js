// NEW: Function to download artifact AND sync to CQL Services
// This is a separate function from downloadArtifact - existing download functionality is untouched
import axios from 'axios';
import FileSaver from 'file-saver';
import { validateArtifact } from 'queries/testing';
import { changeToCase } from 'utils/strings';

const downloadAndSyncArtifact = async ({ artifact, dataModel }) => {
  artifact.dataModel = dataModel;
  const fileName = changeToCase(`${artifact.name}-v${artifact.version}-cql`, 'snakeCase');

  // NEW: Add syncToCqlServices query parameter to trigger sync
  return axios
    .post(`${process.env.REACT_APP_API_URL}/cql?syncToCqlServices=true`, artifact, { responseType: 'blob' })
    .then(result => {
      FileSaver.saveAs(result.data, `${fileName}.zip`);
      return result.data;
    })
    .then(async () => {
      return validateArtifact({ artifact, dataModel });
    });
};

export default downloadAndSyncArtifact;
