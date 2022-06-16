import DropboxClient from "../clients/dropbox";

function transformPath(path: string) {
  return path.split("%20").join(" ");
}
export const getFiles = async (path: string) => {
  const { data } = await DropboxClient.post("/files/list_folder", {
    path: transformPath(path),
  });
  return data;
};

export const deleteFile = async (path: string) => {
  const { data } = await DropboxClient.post("/files/delete_v2", {
    path: transformPath(path),
  });
  return data;
};
