import { Web3Storage } from "web3.storage";
export const uploadFilesAndGetCids = async (files: File[]) => {
  // makeStorageClient returns an authorized Web3.Storage client instance
  const client = new Web3Storage({
    token: String(process.env.REACT_APP_WEB3_STORAGE_TOKEN),
  });

  const rootCid = await client.put(files);

  const res = await client.get(rootCid);

  if (!res?.ok) return;

  const resFiles = await res.files();

  const cids = resFiles.map((file) => file.cid);

  return cids;
};

export const cidToLink = (cid: string) => {
  return `https://${cid}.ipfs.dweb.link`;
};
