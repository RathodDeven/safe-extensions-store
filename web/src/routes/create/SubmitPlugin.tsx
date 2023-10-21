import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { BsCardImage } from "react-icons/bs";
import { cidToLink, uploadFilesAndGetCids } from "../../logic/web3Storage";
import ToggleButton from "../../components/ToggleButton";
import PublicationEditor from "../../components/Lexical/PublicationEditor";

const categories = [
  "Social",
  "Productivity",
  "Privacy",
  "Security",
  "Utility",
  "Interoperability",
];

const SubmitPlugin = () => {
  const [icon, setIcon] = React.useState<string>("");
  const [iconLink, setIconLink] = React.useState<string>("");
  const [ssUrlsToShow, ssUrlsToShowSet] = React.useState<string[]>([]);
  const [ssUrls, ssUrlsSet] = React.useState<string[]>([]);

  const [name, setName] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [category, setCategory] = React.useState<string>("Security");
  const [appUrl, setAppUrl] = React.useState<string>("");
  const [repoUrl, setRepoUrl] = React.useState<string>("");
  const [version, setVersion] = React.useState<string>("1.0.0");
  const [loading, setLoading] = React.useState<boolean>(false);

  const [pluginAbi, setPluginAbi] = React.useState<string>("");
  const [pluginBytecode, setPluginBytecode] = React.useState<string>("");

  const [executeCallPermission, setExecuteCallPermission] =
    React.useState<boolean>(false);

  const [callToSelfPermission, setCallToSelfPermission] =
    React.useState<boolean>(false);

  const [executeDelegatePermission, setExecuteDelegatePermission] =
    React.useState<boolean>(false);

  const handleSubmit = async () => {};

  return (
    <div className="bg-s-bg w-1/2 p-12 rounded-xl border border-p-text/10 h-full">
      <div className="flex flex-row items-center space-x-6 w-full">
        <label htmlFor="icon" className="cursor-pointer shrink-0">
          {icon ? (
            <img
              src={icon}
              className="shrink-0 object-cover w-24 h-24 rounded-full shadow-sm mb-3"
            />
          ) : (
            <div className="shrink-0 w-24 h-24 flex justify-center items-center rounded-full mb-3 bg-t-bg">
              <AiOutlineCamera size={24} className="text-s-text" />
            </div>
          )}
        </label>

        <div className="w-full">
          <div className="flex flex-row items-center space-x-8 w-full">
            <input
              type="text"
              placeholder="Name"
              value={name}
              className="px-4 py-2 outline-none bg-t-bg w-full rounded-xl border border-p-text/10 mb-3"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="version"
              value={version}
              className="px-4 py-2 outline-none bg-t-bg w-full rounded-xl border border-p-text/10 mb-3"
              onChange={(e) => {
                setVersion(e.target.value);
              }}
            />
          </div>

          {/* // select category */}
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="px-4 py-2 outline-none bg-t-bg rounded-xl border border-p-text/10 mb-3"
          >
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="font-bold text-s-text text-xl my-2">App Link</div>

      <input
        type="text"
        placeholder="Safe app link or any external link (optional)"
        value={appUrl}
        className="px-4 py-2 outline-none bg-t-bg w-full rounded-xl border border-p-text/10 mb-3 mt-1"
        onChange={(e) => {
          setAppUrl(e.target.value);
        }}
      />

      {/* permission toggle buttons row */}

      <div className="font-bold text-s-text text-xl my-2">Permissions</div>
      <div className="flex flex-row mb-4 items-center space-x-8 w-full font-semibold">
        <div className="flex flex-row items-center space-x-2">
          <ToggleButton
            isOn={executeCallPermission}
            setIsOn={setExecuteCallPermission}
            sizeInPixels={30}
          />
          <div>Execute Call</div>
        </div>

        <div className="flex flex-row items-center space-x-2">
          <ToggleButton
            isOn={callToSelfPermission}
            setIsOn={setCallToSelfPermission}
            sizeInPixels={30}
          />
          <div>Call to Self</div>
        </div>

        <div className="flex flex-row items-center space-x-2">
          <ToggleButton
            isOn={executeDelegatePermission}
            setIsOn={setExecuteDelegatePermission}
            sizeInPixels={30}
          />
          <div>Execute Delegate</div>
        </div>
      </div>

      {/* repo url   */}

      {/* <input
        type="text"
        placeholder="Repo URL"
        value={repoUrl}
        className="px-4 py-2 outline-none bg-t-bg w-full rounded-xl border border-p-text/10 mb-3"
        onChange={(e) => {
          setRepoUrl(e.target.value);
        }}
      /> */}

      {/* screen shots */}
      <div className="font-bold text-s-text text-xl my-2">Screenshots</div>

      <div className="flex flex-row flex-wrap items-center gap-4 ">
        <label htmlFor="ss" className="cursor-pointer shrink-0">
          <div className="h-[100px] w-[200px] rounded-xl flex flex-col gap-2 items-center justify-center bg-t-bg">
            <div className="text-s-text text-xs font-semibold">
              Add Screenshots (optional)
            </div>
            <BsCardImage size={18} className="text-s-text" />
          </div>
        </label>

        {ssUrlsToShow.map((ssUrl) => (
          <img
            src={ssUrl}
            className="h-[100px] w-[200px] rounded-xl object-cover"
          />
        ))}
      </div>

      {/* description */}

      <div className="font-bold text-s-text text-xl my-2">Overview</div>

      <PublicationEditor setContent={setDescription} />

      {/* abi and bytecode */}

      <div className="flex flex-row space-x-8 w-full mt-1">
        {/* abi */}
        <div className="w-full">
          <div className="font-bold text-s-text text-xl my-2">ABI</div>
          <textarea
            placeholder="[]"
            value={pluginAbi}
            className="px-4 py-2 outline-none bg-t-bg w-full rounded-xl border border-p-text/10 mb-3"
            onChange={(e) => {
              setPluginAbi(e.target.value);
            }}
            rows={5}
          />
        </div>

        {/* bytecode */}
        <div className="w-full">
          <div className="font-bold text-s-text text-xl my-2">Bytecode</div>
          <textarea
            placeholder="0x...."
            value={pluginBytecode}
            className="px-4 py-2 outline-none bg-t-bg w-full rounded-xl border border-p-text/10 mb-3"
            onChange={(e) => {
              setPluginBytecode(e.target.value);
            }}
            rows={5}
          />
        </div>
      </div>

      <button
        className="px-8 py-2 mt-4 bg-p-h rounded-xl text-p-bg font-bold hover:bg-p-h/60 transition-all duration-300"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Deploying..." : "Deploy & Add"}
      </button>

      <input
        type="file"
        id="icon"
        onChange={async (e) => {
          const filePicked = e.target.files?.[0];
          if (!filePicked) return;
          setIcon(URL.createObjectURL(filePicked));

          const cids = await uploadFilesAndGetCids([filePicked]);
          console.log("cids", cids);

          if (cids?.length === 0) return;
          // @ts-ignore
          const cidLink = cidToLink(cids[0]);
          setIconLink(cidLink);
        }}
        // only accept images
        accept="image/*"
        // only accept one file
        multiple={false}
        hidden
      />

      <input
        type="file"
        id="ss"
        onChange={async (e) => {
          const filesPicked = e.target.files;
          if (!filesPicked) return;

          for (let i = 0; i < filesPicked.length; i++) {
            const file = filesPicked[i];
            ssUrlsToShowSet((prev) => [...prev, URL.createObjectURL(file)]);
          }

          const cids = await uploadFilesAndGetCids(Array.from(filesPicked));
          console.log("cids", cids);

          if (cids?.length === 0) return;
          // @ts-ignore
          const cidLinks = cids.map(cidToLink);
          ssUrlsSet([...ssUrls, ...cidLinks]);
        }}
        // only accept images
        accept="image/*"
        multiple
        hidden
      />
    </div>
  );
};

export default SubmitPlugin;
