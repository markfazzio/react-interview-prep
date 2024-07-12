"use client";

import { useContext } from "react";
import {
  MainPage,
  Navbar,
  PageHeader,
  SwitchTheme,
  useScrollSpy,
} from "@markfazzio/docs-ui-components";

import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";
import { GlossarySection } from "@/sections/Glossary";
import { getSectionIdsArray } from "@/utils/section-utils";
import { SECTIONS } from "@/constants";

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;

  const handleOnThemeChange = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const ids = getSectionIdsArray();
  const activeId = useScrollSpy(ids, 54); //
  const appTitle = "ReactJS Interview Prep";

  return (
    <div className={`theme-${theme}`}>
      <MainPage>
        <Navbar activeId={activeId} navItems={SECTIONS} theme={theme} />
        <SwitchTheme
          checked={theme === "light" ? true : false}
          onChange={handleOnThemeChange}
        />
        <PageHeader title={appTitle}>
          <p>
            Quick refresher/guide to ReactJS for all experience levels. This is
            by no means a comprehensive guide to ReactJS. For that,{" "}
            <a
              className="hover:underline font-semibold"
              href="https://react.dev/reference/react"
              target="_blank"
            >
              Complete React Reference
            </a>
          </p>
        </PageHeader>
        {/* sections */}
        <GlossarySection />
      </MainPage>
    </div>
  );
}
