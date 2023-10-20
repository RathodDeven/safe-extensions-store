import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { CodeNode } from "@lexical/code";
import { HashtagNode } from "@lexical/hashtag";
import { AutoLinkNode, LinkNode } from "@lexical/link";

const initialConfig = {
  namespace: "composer",
  theme: {
    text: {
      bold: "font-bold",
      italic: "text-italic",
      code: "text-sm bg-gray-300 rounded-lg dark:bg-gray-700 px-[5px] py-[2px]",
    },
    link: "text-blue-500 hover:underline",
  },
  nodes: [CodeNode, HashtagNode, AutoLinkNode, LinkNode],
  editorState: null,
  onError: (error: any) => {
    console.error(error);
  },
  editable: true,
};
const LexicalWrapper = ({
  children,
}: {
  children: string | JSX.Element | (string | JSX.Element)[];
}) => {
  return (
    <LexicalComposer initialConfig={initialConfig}>{children}</LexicalComposer>
  );
};

export default LexicalWrapper;
