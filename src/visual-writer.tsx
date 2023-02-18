import React, { useEffect, useState } from "react";
import { Portal } from "react-portal";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function VisualWriter(props: Props) {
  const [value, setValue] = useState(props.value);

  return (
    <div className="visual-writer">
      {value?.split(" ")?.map((word, index) => {
        return <VisualWriterWord word={word} key={index} />;
      })}
      <textarea
        placeholder="Type here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
      />
    </div>
  );
}

type VisualWriterWordProps = {
  word: string;
};

const VisualWriterWord = ({ word }: VisualWriterWordProps) => {
  const img = IMAGES.find((image) =>
    word?.toLowerCase()?.replace(".", "")?.includes(image.word)
  );
  const [ref, setRef] = useState<HTMLSpanElement | null>(null);
  const [isOverWord, setIsOverWord] = useState(false);
  const rect = ref?.getBoundingClientRect();

  useEffect(() => {
    // Check if the mouse is over the word
    const onMouseMove = (e: MouseEvent) => {
      setIsOverWord(false);
      if (!rect) return;

      const isMouseOverWord =
        e.clientX > rect?.left &&
        e.clientX < rect?.right &&
        e.clientY > rect?.top &&
        e.clientY < rect?.bottom;

      setIsOverWord(isMouseOverWord);
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [ref, rect]);

  return (
    <span>
      <span ref={setRef} className="visual-writer-word">
        {img && (
          <div className="visual-writer-word-preview">
            {isOverWord ? (
              <Portal>
                <div
                  style={{
                    // TODO make sure it doesnt overflow the screen
                    position: "absolute",
                    top: rect?.top,
                    left: rect?.left,
                    width: rect?.width,
                    height: rect?.height,
                  }}
                >
                  <img
                    src={img?.url}
                    className="visual-writer-word-preview-img visual-writer-word-preview-img-portal-enter"
                  />
                </div>
              </Portal>
            ) : (
              <img
                src={img?.url}
                className="visual-writer-word-preview-img"
                style={{
                  opacity: 0.5,
                  width: "100%",
                  height: "100%",
                }}
              />
            )}
          </div>
        )}
        {word}
      </span>
      <span> </span>
    </span>
  );
};

const IMAGES = [
  {
    word: "fox",
    url: "https://images.unsplash.com/photo-1516934024742-b461fba47600?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    word: "dog",
    url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    word: "jumps",
    url: "https://images.unsplash.com/photo-1656028349768-bf2060c4a815?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    word: "quick",
    url: "https://images.unsplash.com/photo-1532985716028-255a31586f6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80",
  },
  {
    word: "brown",
    url: "https://images.unsplash.com/photo-1635315619556-5826839a1bea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    word: "lazy",
    url: "https://images.unsplash.com/photo-1606103920295-9a091573f160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    word: "found",
    url: "https://images.unsplash.com/photo-1489619547086-641e1c87c3ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1736&q=80",
  },
  {
    word: "light",
    url: "https://images.unsplash.com/photo-1529704193007-e8c78f0f46f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    word: "dark",
    url: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
  },
  {
    word: "time",
    url: "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
];
