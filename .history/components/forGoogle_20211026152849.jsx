import AutoCompleteText_acceuil from './autocomplete/AutoCompleteText_acceuil';
import {NavBar} from './navbar/navbar';
import Carousell from './carousel/carousel';
import Apropos from './apropos/apropos';
import {Produits_favoris, Produits_recommandés} from './produits_favoris/produits_favoris';
import Footer from './footer/footer';
import {Stats} from './stats/stats';
import liste from './autocomplete/liste.js'
import React, { useEffect , useContext, useState} from 'react'
import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import { useSearchkit, useSearchkitQuery, useSearchkitVariables } from '@searchkit/client'
import ClipLoader from "react-spinners/ClipLoader";
import router from 'next/router'
import { UserContext, Tri, cartItemsVar, SearchkitIndex } from './UserContext.js'
import { useReactiveVar } from '@apollo/client'





