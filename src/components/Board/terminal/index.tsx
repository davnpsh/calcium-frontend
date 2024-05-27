"use client";

import { useEffect, useRef, useState } from "react";
import { Terminal } from "@xterm/xterm";
import { AttachAddon } from "@xterm/addon-attach";
import { FitAddon } from "@xterm/addon-fit";
import "@xterm/xterm/css/xterm.css";
import { useTheme } from "next-themes";

export default function XTerminal() {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const lightTheme = {
      background: "#faf4ed",
      foreground: "#000",
      cursor: "#000",
      selectionBackground: "#000",
      selectionForeground: "#fff",
    };

    const darkTheme = {
      background: "#060521",
    };

    if (!terminalRef.current) {
      return;
    }

    // Clear duplicates
    terminalRef.current.innerHTML = "";

    // Terminal and connection
    const term = new Terminal({
      theme: resolvedTheme == "light" ? lightTheme : darkTheme,
    });

    const socket = new WebSocket(
      "ws://52.191.114.5:2375/containers/98f04c39d3b8/attach/ws?stream=1&stdout=1&stdin=1&stderr=1"
    );

    // Addons
    const attachAddon = new AttachAddon(socket);
    const fitAddon = new FitAddon();

    // Spinning up terminal

    term.loadAddon(attachAddon);
    term.loadAddon(fitAddon);

    term.open(terminalRef.current);

    // Instructions
    term.writeln("# This is your terminal. Click me and press Enter!\r");

    // Initial fit
    fitAddon.fit();

    // Fit on resize
    const resizeObserver = new ResizeObserver(() => {
      try {
        fitAddon && fitAddon.fit();
      } catch (err) {
        console.log(err);
      }
    });

    resizeObserver.observe(terminalRef.current);
  }, [resolvedTheme]);

  return (
    <div
      ref={terminalRef}
      className="w-full h-full p-3 bg-[#faf4ed] dark:bg-[#060521]"
    ></div>
  );
}
