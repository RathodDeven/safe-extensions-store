import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import {
  $convertToMarkdownString,
  TEXT_FORMAT_TRANSFORMERS,
} from "@lexical/markdown";
import React from "react";
// import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { HashtagPlugin } from "@lexical/react/LexicalHashtagPlugin";
import LexicalAutoLinkPlugin from "./Plugins/LexicalAutoLinkPlugin";
import ImagesPlugin from "./Plugins/ImagesPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import clsx from "clsx";

/* eslint-disable */

interface Props {
  setContent: (content: string) => void;
  onPaste?: (files: File[]) => void;
}
const TRANSFORMERS = [...TEXT_FORMAT_TRANSFORMERS];
const PublicationEditor = ({ setContent, onPaste }: Props) => {
  return (
    <div className="relative">
      {/* todo toolbar for rich text editor */}
      {/* <ToolbarPlugin /> */}
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            className={clsx(
              "blocktext-p-text overflow-auto  outline-none bg-s-bg",
              " min-h-[150px] max-h-[400px] px-4 py-2 bg-t-bg border  border-p-text/10 rounded-xl"
            )}
          />
        }
        placeholder={
          <div
            className={clsx(
              "text-s-text text-sm font-semibold absolute top-[8px] left-[16px] pointer-events-none whitespace-nowrap"
            )}
          >
            <>
              <div>- Detailed overview of the plugin</div>

              <div>- Add links wherever necessary</div>

              <div>- Can use markdown here</div>
            </>
          </div>
        }
        ErrorBoundary={() => <div>Something went wrong !</div>}
      />
      <OnChangePlugin
        onChange={(editorState) => {
          editorState.read(() => {
            const markdown = $convertToMarkdownString(TRANSFORMERS);
            setContent(markdown);
          });
        }}
      />
      {/* <HistoryPlugin /> */}
      <HashtagPlugin />
      <LexicalAutoLinkPlugin />
      <ImagesPlugin onPaste={onPaste} />
      <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
    </div>
  );
};

export default PublicationEditor;
