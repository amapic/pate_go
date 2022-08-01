import { useState, useEffect } from "react";
import * as React from "react";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
//

import styled, { keyframes } from "styled-components";

export function Navbar(props: any) {
  const WrapperHeader = styled.div`
    background-color: #000;
    height: 60px;
    padding: 10px 20px 20px 10px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: "Gilda Display", serif;
    width: 100%;
    height: 10%;
  `;

  const WrapMenu = styled.div`
    background-color: #000;
    height: 60px;
    padding: 10px 20px 20px 10px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-family: "Gilda Display", serif;
    width: 100%;
    height: 10%;
  `;

  const Titre = styled.div`
    width: 20vw;
    font-size: 30px;
    margin: 0;
    text-align: center;
  `;

  const Menu = styled.div`
    /* position:absolute; */
    right: 10px;
    margin: 0 40px;
    width: 10%;
    font-size: 25px;
    text-decoration: none;
  `;

  return (
    <>
      <WrapperHeader>
        <Titre>Pâté</Titre>
        <WrapMenu>
          <Link href="/test">
            <Menu className="cursor-pointer">Pâté</Menu>
          </Link>
          <Menu>Pâté en croute</Menu>
          <Menu>Pâté bio</Menu>
        </WrapMenu>
      </WrapperHeader>
    </>
  );
}
